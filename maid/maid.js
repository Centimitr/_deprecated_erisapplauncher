const path = require('path');
const {BrowserWindow} = require('electron');
const fs = require('fs-extra-promise');
const BookTask = require('./bookTask');
const sleep = function (interval) {
    console.log('wait for', interval, 'ms');
    return new Promise(resolve => setTimeout(() => resolve(), interval));
};
let cnt = 0;

class Maid {
    constructor() {
    }

    async loadX(url, options) {
        const win = new BrowserWindow(options);
        win.exec = (...args) => win.webContents.executeJavaScript(...args);
        return new Promise(resolve => {
            win.loadURL(url);
            win.webContents.once('dom-ready', () => {
                resolve(win);
            });
        });
    }

    async exec(win, code) {
    }

    async saveImages(task) {
        const save = function (dst, total) {
            //language=JavaScript
            const template = `(function (dst, total) {
    const fs = require('fs');
    const path = require('path');
    const contents = require('electron').remote.getCurrentWindow().webContents;
    const toArray = function (nodeList) {
        return Array.prototype.slice.call(nodeList);
    };
    const qs = function (selector) {
        return document.querySelector(selector);
    };
    const getImgBuf = async function (img) {
        const imgToBlob = async function (img) {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            return new Promise(resolve => canvas.toBlob(resolve, 'image/webp'));
        };
        const blobToBuffer = async function () {
            return new Promise((resolve, reject) => {
                const toBuf = function (blob, cb) {
                    if (typeof Blob === 'undefined' || !(blob instanceof Blob)) {
                        throw new Error('first argument must be a Blob')
                    }
                    if (typeof cb !== 'function') {
                        throw new Error('second argument must be a function')
                    }

                    let reader = new FileReader();

                    function onLoadEnd(e) {
                        reader.removeEventListener('loadend', onLoadEnd, false);
                        if (e.error) cb(e.error);
                        else cb(null, Buffer.from(reader.result));
                    }

                    reader.addEventListener('loadend', onLoadEnd, false);
                    reader.readAsArrayBuffer(blob);
                };
                toBuf(blob, function (err, buffer) {
                    if (err) {
                        reject(err);
                    }
                    resolve(buffer);
                })
            })
        };
        const blob = await imgToBlob(img);
        return blobToBuffer(blob)
    };
    class TaskMarker {
        constructor() {
            // state: have been run
            this.states = {};
        }

        run(id, fn) {
            if (!this.states[id]) {
                this.states[id] = true;
                fn();
            }
        }
    }

    return new Promise((resolve, reject) => {
        try {
            const marker = new TaskMarker();
            const showImageDiv = qs('#showimage');
            let cnt = 1;
            const runFn = async () => {
                const img = qs('#cpimg');
                const buf = await getImgBuf(img);
                const p = path.join(dst, cnt + '.webp');
                fs.writeFileSync(p, buf);
                contents.sendInputEvent({
                    type: 'mouseDown',
                    x: img.x + 10,
                    y: img.y + 10,
                });
                contents.sendInputEvent({
                    type: 'mouseUp',
                    x: img.x + 10,
                    y: img.y + 10,
                });
                cnt++;
                if (cnt === total){
                    resolve();
                }
            };
            const mo = new MutationObserver(() => {
                const img = qs('#cpimg');
                const i = parseInt('' + cnt);
                img.addEventListener('load', () => {
                    marker.run(i, runFn)
                });
                if (img.complete) {
                    marker.run(i, runFn)
                }
            });
            mo.observe(showImageDiv, {attributes: true, childList: true, subtree: true});
        } catch (e) {
            console.log(e);
            reject(e);
        }
    })
})('${dst}', ${total});
`;
            return template;
        };
        const win = await this.loadX(task.url, {show: false, webPreferences: {webSecurity: false}});
        const e = await win.exec(save(task.dest, task.total));
        console.warn(e);
        win.close();
    }

    async saveBook(task) {
        const dst = task.dest;
        await fs.ensureDirAsync(dst);
        // for (let i = 1; i <= task.total; i++) {
        //     const url = task.url.slice(0, -1) + `-p${i}/`;
        //     task.add(new ImgTask(url, dst, i));
        // }
        await fs.writeJsonAsync(path.join(dst, 'book.json'), task);
        await this.saveImages(task);
        console.log('finish:', cnt++);
    }

    async saveSeries(url, name, dst) {
        dst = path.join(dst, name);
        await fs.ensureDirAsync(dst);
        const win = await this.loadX(url, {show: false});
        const args = await win.exec(`(function () {
                const removeSurround = function (node, direction) {
                    const removeSiblings = function (node, direction) {
                        const getNext = () => direction ? node.previousSibling : node.nextSibling;
                        let next = getNext();
                        while (next) {
                            node.parentNode.removeChild(next);
                            next = getNext();
                        }
                    };
                    const everyAncestor = function (node, fn) {
                        let parent = node.parentElement;
                        while (parent) {
                            fn(parent);
                            parent = parent.parentElement;
                        }
                    };
                    removeSiblings(node, direction);
                    everyAncestor(node, node => removeSiblings(node, direction));
                };
                const toArray = function (nodeList) {
                    return Array.prototype.slice.call(nodeList);
                };
                const all = toArray(document.querySelectorAll('body *'));
                const cut = all.filter(elm => elm.innerText.includes('全部章节列表')).pop();
                removeSurround(cut, true);
                return toArray(document.querySelectorAll('a.tg'))
                    .map(a => [
                        a.href,
                        a.innerText,
                        parseInt(a.nextSibling.textContent.match(/-?[1-9]\d*/).shift())
                    ])
            })()`);
        const tasks = args.map(a => new BookTask(...a));
        win.close();
        await fs.writeJsonAsync(path.join(dst, 'series.json'), tasks);
        console.time('Total');
        console.log('Number:', tasks.length);
        await Promise.all(tasks.map(t => {
            t.setDest(dst);
            return this.saveBook(t);
        }));
        console.timeEnd('Total');
    }
}

module.exports = {
    create: win => new Maid(win)
};
