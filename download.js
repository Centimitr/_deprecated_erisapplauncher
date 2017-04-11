const download = async function (urls, win, debug) {
    return new Promise(function (resolve) {
        let cnt = 0;
        const errors = [];
        const loadNext = () => {
            const url = urls[cnt];
            if (url) {
                if (debug) {
                    console.log(`[${cnt + 1}/${urls.length}]`, 'next:', 'Picture', cnt)
                }
                cnt++;
                win.loadURL(url);
            } else {
                resolve(errors)
            }
        };
        const saveImageTo = function (dst) {
            const template = `(async function (dst) {
    const fs = require('fs');
    async function getImg(selector) {
        async function imgToBlob(img) {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0);
            return new Promise(resolve => canvas.toBlob(resolve));
        }

        async function blobToBuffer() {
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
        }

        const img = document.querySelector(selector);
        if(!img){
            throw new Error('No image got from the given url.');
        }
        const blob = await imgToBlob(img);
        return blobToBuffer(blob)
    }
    try {
        const img = await getImg('#cpimg');
        fs.writeFileSync(dst, img);
    }catch (e){
        return e.toString();
    }
})('${dst}');
`;
            return template;
        };
        loadNext();
        win.webContents.on('did-finish-load', async () => {
            errors.push(await win.webContents.executeJavaScript(saveImageTo(`/Users/shixiao/Desktop/${cnt}.png`)));
            loadNext();
        });
    });
};
module.exports = download;
