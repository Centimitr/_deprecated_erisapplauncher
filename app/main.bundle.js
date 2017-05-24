webpackJsonp([1,4],{

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 38px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  text-align: center;\n  font-size: 14px;\n  line-height: 38px;\n  color: #ccc;\n  text-shadow: 0 0 1px black;\n  -webkit-transition: opacity 125ms ease-in-out;\n  transition: opacity 125ms ease-in-out;\n}\n\n.titlebar:hover {\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n/*section.cover {*/\n  /*position: fixed;*/\n  /*top: 0;*/\n  /*right: 0;*/\n  /*bottom: 0;*/\n  /*left: 0;*/\n  /*z-index: 1;*/\n  /*background-color: red;*/\n  /*display: flex;*/\n  /*align-items: center;*/\n  /*justify-content: center;*/\n/*}*/\n\n/*section.cover img {*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: inline;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.loading {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  /*color: white;*/\n  font-family: \"American Typewriter\", monospace;\n  opacity: 0.62;\n  -webkit-transition: opacity 275ms ease-in;\n  transition: opacity 275ms ease-in;\n}\n\n.loading.hide {\n  opacity: 0;\n}\n\n.loading.singlePage {\n  position: fixed;\n}\n\n.loading .words {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading .words .page {\n  font-size: 4vh;\n  margin-bottom: 1vh;\n}\n\n.loading .words .status {\n  font-size: 2.5vh;\n  opacity: 0.8;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".layer {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #111;\n  border-radius: 10px;\n  border: 1px solid #222;\n  color: #aaa;\n  padding: 8px 12px 8px 12px;\n  font-family: \"PingFang SC\", sans-serif;\n  text-shadow: 0 0 2px black;\n  font-size: 16px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n\n.loading {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  opacity: 0;\n  -webkit-transition: 275ms;\n  transition: 275ms;\n}\n\n.loading.show {\n  opacity: 1;\n}\n\n.loading .word {\n  font-size: 38px;\n  color: #444;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "section.pages {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow-scrolling: touch;\n  scroll-behavior: smooth;\n  opacity: 1;\n}\n\nsection.pages.hide {\n  opacity: 0;\n}\n\nviewer {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".hidden {\n  display: none;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\" [refresh]=\"refresh\" (ok)=\"onOk()\" (fail)=\"open($event)\"></reader>\n<header class=\"titlebar\" (dblclick)=\"zoom()\" (contextmenu)=\"onContextMenu($event, titleBar)\" #titleBar>{{getTitle()}}</header>\n<!--<section class=\"cover\" *ngIf=\"cover.show\" #c>-->\n  <!--<img-->\n    <!--*ngIf=\"cover.dataUrl\"-->\n    <!--[src]=\"cover.dataUrl\"-->\n    <!--[height]=\"c.offsetHeight*cover.scale/100\"-->\n    <!--[width]=\"c.offsetWidth*cover.scale/100\"-->\n  <!--&gt;-->\n<!--</section>-->\n"

/***/ }),

/***/ 162:
/***/ (function(module, exports) {

module.exports = "{{word}}<span></span>\n"

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports = "<div class=\"loading\" [class.singlePage]=\"config.isSinglePage()\">\n  <div class=\"words\">\n    <div class=\"page\">Page {{page}}</div>\n    <div class=\"status\">loading...</div>\n  </div>\n</div>\n"

/***/ }),

/***/ 164:
/***/ (function(module, exports) {

module.exports = "<section class=\"pages\" #pages [class.hide]=\"loadingShow\">\n  <cm-scroll style=\"width: 100%;\" [book]=\"book\"></cm-scroll>\n</section>\n<section class=\"layer\">\n  <section class=\"panel progress\" *ngIf=\"book?.total\">\n    <span>{{book?.current}}</span>\n    <span style=\"opacity: 0.8;margin: 0 -2px;\">/</span>\n    <span style=\"opacity: 0.95\">{{book?.total}}</span>\n  </section>\n  <section class=\"loading\" [class.show]=\"loadingShow\">\n    <cm-dot class=\"word\" [word]=\"'Book Loading'\" [interval]=\"500\"></cm-dot>\n  </section>\n</section>\n"

/***/ }),

/***/ 165:
/***/ (function(module, exports) {

module.exports = "<div [hidden]=\"config.isSinglePage()&&config.isMaxlHeight()\"\n     style=\"height: 5vh; width: 100%;\"></div>\n<cm-image *ngFor=\"let p of book?.pages(); let i=index;\"\n          [style.marginBottom.vh]=\"config.isSinglePage()&&config.isMaxlHeight()?0:5\"\n          [page]=\"i+1\"\n          [src]=\"book.getPageFilePath(p.Locator)\"\n></cm-image>\n<div style=\"height: 0; width: 100%;\"></div>\n"

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__image_scale__ = __webpack_require__(88);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


let cnt = 0;
const pt = v => console.log(cnt++, v);
class ConfigItem {
    constructor(v) {
        this.listeners = [];
        this._lock = false;
        this.value = v;
    }
    set(v) {
        if (this._lock)
            return false;
        const old = this.value;
        if (old !== v) {
            this.value = v;
            setTimeout(() => {
                this.listeners.forEach(cb => cb(this.value, old));
            }, 0);
        }
        return true;
    }
    get() {
        return this.value;
    }
    is(v) {
        return this.value === v;
    }
    lock() {
        this._lock = true;
    }
    unlock() {
        this._lock = false;
    }
    clear() {
        this.listeners = [];
    }
    change(cb) {
        this.listeners.push(cb);
    }
    toValue() {
        return this.value;
    }
    toString() {
        return this.toValue().toString();
    }
}
/* unused harmony export ConfigItem */

class ConfigRangedItem extends ConfigItem {
    constructor(v, min, max) {
        super(v);
        [this.min, this.max] = [min, max];
    }
    setRange(min, max) {
        if (min >= max)
            console.error('min should be smaller than max:', min, max);
        [this.min, this.max] = [min, max];
        if (this.value < this.min)
            this.set(this.min);
        else if (this.value > this.max)
            this.set(this.max);
    }
    inRange(v) {
        return this.min <= v && v <= this.max;
    }
    set(v) {
        if (this.inRange(v))
            return super.set(v);
        else
            return false;
    }
}
/* unused harmony export ConfigRangedItem */

let Config = Config_1 = class Config {
    constructor() {
        this.recentlyEnjoyedLen = 10;
        this.scrollDirection = true;
        // appearance
        this.ui = {
            view: {
                before: 5,
                after: 0,
                eachAfter: 5,
                zoomUnit: 5
            }
        };
        this.pinch = new ConfigItem(1);
        this.scale = new ConfigItem(Config_1.SCALE_DEFAULT);
        // view
        this.view = new ConfigItem(Config_1.VIEW_SINGLE_PAGE);
        // mixed
        // whenSinglePageNotFullHeight(v: any) {
        //   if (this.isSinglePage() && !this.isFullHeight()) return v;
        // }
    }
    clear() {
        this.pinch.clear();
        this.view.clear();
    }
    // mode
    // mode = new ConfigItem<number>(Config.MODE_DEFAULT);
    // static MODE_DEFAULT: number = 0;
    // static MODE_FULL_HEIGHT: number = 1;
    // static MODE_FULL_WIDTH: number = 2;
    // static MODE_ALL: number[] = [Config.MODE_FULL_HEIGHT, Config.MODE_DEFAULT, Config.MODE_FULL_WIDTH];
    // scale
    // defaultScale: number = 150;
    // scale = new ConfigRangedItem(this.defaultScale, 100, 100000);
    // private _onSetScaleConstraint: Function[] = [];
    // onSetScaleConstraint(cb: Function) {
    //   this._onSetScaleConstraint.push(cb);
    // }
    // setScaleConstraint(book: Book, reader: HTMLElement, viewers: QueryList<ViewerComponent>) {
    //   if (book.meta.Pages.length && viewers.length) {
    //     const vw = Math.max(...viewers.map(v => v.elm.offsetWidth));
    //     const vh = Math.max(...viewers.map(v => v.elm.offsetHeight));
    // const imgWs = viewers.map(v => v.oriWidth).filter(v => v);
    // const imgHs = viewers.map(v => v.oriHeight).filter(v => v);
    // if (!imgWs.length || !imgHs.length) return;
    // const MIN_HEIGHT_PROPORTION = 65;
    // const MIN_WIDTH_PROPORTION = 30;
    // this.scale.setRange(100 * 375 / reader.offsetHeight, 100 * reader.offsetWidth / Math.min(...imgWs));
    // this._onSetScaleConstraint.forEach(cb => cb(this.scale.min, this.scale.max));
    // }
    // }
    // isFullWidth(): boolean {
    //   return this.mode.is(Config.MODE_FULL_WIDTH);
    // }
    //
    // whenFullWidth(v: any): boolean {
    //   if (this.isFullWidth()) {
    //     return v;
    //   }
    // }
    //
    // whenNotFullWidth(v: any): boolean {
    //   if (!this.isFullWidth()) {
    //     return v;
    //   }
    // }
    //
    isMaxlHeight() {
        return this.scale.is(Config_1.SCALE_MAXHEIGHT);
    }
    isContinuousScroll() {
        return this.view.get() === Config_1.VIEW_CONTINUOUS_SCROLL;
    }
    whenContinuousScroll(v) {
        if (this.isContinuousScroll()) {
            return v;
        }
    }
    isSinglePage() {
        return this.view.is(Config_1.VIEW_SINGLE_PAGE);
    }
};
// scale
Config.SCALE_DEFAULT = new __WEBPACK_IMPORTED_MODULE_1__image_scale__["a" /* Scale */](null, 100, null, 150);
Config.SCALE_MAXHEIGHT = new __WEBPACK_IMPORTED_MODULE_1__image_scale__["a" /* Scale */](null, 100, null, 100);
Config.SCALE_FULLWIDTH = new __WEBPACK_IMPORTED_MODULE_1__image_scale__["a" /* Scale */](100, 100, null, null);
Config.SCALE_ALL = [Config_1.SCALE_MAXHEIGHT, Config_1.SCALE_DEFAULT, Config_1.SCALE_FULLWIDTH];
Config.VIEW_CONTINUOUS_SCROLL = 0;
Config.VIEW_SINGLE_PAGE = 1;
Config.VIEW_ALL = [Config_1.VIEW_CONTINUOUS_SCROLL, Config_1.VIEW_SINGLE_PAGE];
Config = Config_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], Config);

var Config_1;
//# sourceMappingURL=config.service.js.map

/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__time__ = __webpack_require__(90);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class RustyLock {
    constructor() {
        this.finishTime = 0;
    }
    lock(interval) {
        this.finishTime = Date.now() + interval;
    }
    run(cb) {
        if (Date.now() > this.finishTime) {
            cb();
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["e"] = RustyLock;

class Checker {
    constructor(freq) {
        this.freq = freq;
    }
    check(checkFn, cb, times = -1) {
        const call = () => {
            if (checkFn()) {
                if (times > 0) {
                    times--;
                }
                cb();
                if (times === 0) {
                    this.clear();
                }
            }
        };
        call();
        this.timer = setInterval(() => {
            call();
        }, this.freq);
    }
    clear() {
        clearInterval(this.timer);
    }
}
/* unused harmony export Checker */

class ABMap {
    constructor(enumArr) {
        this.mapA = new Map();
        this.mapB = new Map();
        if (enumArr) {
            enumArr.forEach((item, i) => this.set(i, item));
        }
    }
    set(a, b) {
        this.mapA.set(a, b);
        this.mapB.set(b, a);
    }
    getA(b) {
        return this.mapB.get(b);
    }
    getB(a) {
        return this.mapA.get(a);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ABMap;

class Semaphore {
    constructor(permits) {
        this.permits = permits;
        this.initial = permits;
    }
    set(p) {
        this.permits = p;
    }
    reset() {
        return this.permits = this.initial;
    }
    get() {
        return this.permits;
    }
    wait(success, error) {
        if (this.permits > 0) {
            success && success();
            this.permits--;
            return true;
        }
        else {
            error && error();
            return false;
        }
    }
    release() {
        this.permits++;
        return this.permits;
    }
}
/* unused harmony export Semaphore */

class Change {
    constructor(initial) {
        this.v = initial;
    }
    changed(n) {
        if (n !== this.v) {
            this.v = n;
            return true;
        }
        return false;
    }
}
/* unused harmony export Change */

class LRU {
    constructor(q, size, cmp) {
        this.q = q;
        this.size = size;
        this.cmp = cmp;
        this.checkSize();
    }
    checkSize() {
        this.q.splice(this.size);
    }
    add(v) {
        this.q = this.q.filter(item => !this.cmp(v, item));
        this.q.unshift(v);
        this.checkSize();
        return this.get();
    }
    get() {
        return this.q;
    }
}
/* harmony export (immutable) */ __webpack_exports__["d"] = LRU;

class LatestRunner {
    constructor() {
        this.busy = false;
    }
    run(fn) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.busy) {
                this.busy = true;
                yield fn();
                if (this.wait) {
                    yield this.wait();
                    this.wait = null;
                }
                this.busy = false;
            }
            else {
                // console.log('busy so wait');
                this.wait = fn;
            }
        });
    }
    runp(p) {
        return __awaiter(this, void 0, void 0, function* () {
            const fn = () => p;
            yield this.run(fn);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = LatestRunner;

class Timeout {
    constructor() {
        this.t = __WEBPACK_IMPORTED_MODULE_0__time__["a" /* time */].Now();
    }
    timeout(delay) {
        return new Promise(resolve => {
            const since = __WEBPACK_IMPORTED_MODULE_0__time__["a" /* time */].Since(this.t);
            const d = since > delay ? 0 : delay - since;
            setTimeout(() => {
                resolve();
            }, d);
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["c"] = Timeout;

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return MenuItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return alwaysOnTopItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenu; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const electron = window['require']('electron');
const { app, Menu, MenuItem, BrowserWindow } = electron.remote;
const process = window['process'];
const alwaysOnTopItem = {
    label: 'Always on Top',
    type: 'checkbox',
    checked: false,
    click(item, win) {
        win.setAlwaysOnTop(!win.isAlwaysOnTop());
        item.checked = win.isAlwaysOnTop();
    }
};
const getTemplate = function () {
    const template = [
        {
            label: 'File',
            submenu: []
        }, {
            label: 'Catalogue',
            submenu: []
        }, {
            label: 'View',
            submenu: []
        },
        {
            role: 'window',
            submenu: [
                {
                    role: 'minimize'
                },
                {
                    role: 'close'
                }
            ]
        },
        {
            role: 'help',
            submenu: [
                {
                    label: 'Learn More',
                    click() {
                        electron.shell.openExternal('http://erisapp.com');
                    }
                }, {
                    label: 'Credits',
                    click() {
                        electron.shell.openExternal('http://erisapp.com/credits');
                    }
                }, {
                    label: 'Feedback',
                    click() {
                        electron.shell.openExternal('http://erisapp.com/feedback');
                    }
                }, {
                    label: 'Feature Request',
                    click() {
                        electron.shell.openExternal('http://erisapp.com/featurerequrest');
                    }
                }
            ]
        }
    ];
    if (process.platform === 'darwin') {
        template.unshift({
            label: app.getName(),
            submenu: [
                {
                    role: 'about'
                }, {
                    type: 'separator'
                },
                {
                    role: 'services',
                    submenu: []
                },
                {
                    type: 'separator'
                },
                {
                    role: 'hide'
                },
                {
                    role: 'hideothers'
                },
                {
                    role: 'unhide'
                },
                {
                    type: 'separator'
                },
                {
                    role: 'quit'
                }
            ]
        });
        // Window menu.
        template[4].submenu = [
            {
                label: 'Close',
                accelerator: 'CmdOrCtrl+W',
                role: 'close'
            },
            {
                label: 'Minimize',
                accelerator: 'CmdOrCtrl+M',
                role: 'minimize'
            }, {
                type: 'separator'
            }, {
                role: 'togglefullscreen'
            }, {
                label: 'Zoom',
                accelerator: 'Ctrl+Cmd+=',
                role: 'zoom'
            }, {
                label: 'Center',
                click(item, win) {
                    win.center();
                }
            }, alwaysOnTopItem, {
                type: 'separator'
            }, {
                label: 'Background',
                enabled: false
            }, {
                label: 'Light',
                type: 'radio',
                click(item, win) {
                    document.body.style.backgroundColor = null;
                    win.setVibrancy('light');
                }
            }, {
                label: 'Dark',
                type: 'radio',
                click(item, win) {
                    win.setVibrancy('medium-light');
                    document.body.style.backgroundColor = 'rgba(0,0,0,.7)';
                }
            }, {
                label: 'Book Paper',
                type: 'radio',
                click() {
                    document.body.style.backgroundColor = '#f8f4ea';
                }
            }, {
                label: 'Silver Gray',
                type: 'radio',
                click() {
                    document.body.style.backgroundColor = '#dedede';
                }
            }, {
                label: 'Deep Black',
                type: 'radio',
                click() {
                    document.body.style.backgroundColor = '#171717';
                }
            }, {
                type: 'separator'
            }, {
                label: 'Bring All to Front',
                role: 'front'
            }
        ];
        // if (1) {
        //   template[4].submenu.push({
        //     label: 'Developer Tools',
        //     accelerator: 'Cmd+Alt+I',
        //     role: 'toggledevtools'
        //   });
        // }
    }
    return Menu.buildFromTemplate(template);
};

let AppMenu = class AppMenu {
    constructor() {
        this.current = getTemplate();
    }
    get() {
        return this.current;
    }
    getSubMenu(index) {
        return this.current.items[index].submenu;
    }
    file() {
        return this.getSubMenu(1);
    }
    catalogue() {
        return this.getSubMenu(2);
    }
    view() {
        return this.getSubMenu(3);
    }
    set() {
        Menu.setApplicationMenu(this.current);
    }
    reset() {
        this.current = getTemplate();
        this.set();
    }
};
AppMenu = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], AppMenu);

//# sourceMappingURL=menu.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class AppStorageValue {
    constructor(k, driver) {
        this.k = k;
        this.driver = driver;
        this.cached = false;
        this._onChange = [];
    }
    get(defaultValue) {
        if (!this.cached) {
            this.v = this.driver.read(this.k, defaultValue);
            this.cached = true;
        }
        return this.v;
    }
    set(v) {
        const old = this.v;
        this.v = v;
        this.cached = true;
        this.driver.write(this.k, v);
        if (old !== v) {
            this._onChange.forEach(cb => cb(v, old));
        }
    }
    onChange(cb) {
        this._onChange.push(cb);
    }
    clearCache() {
        this.v = null;
        this.cached = false;
    }
}
/* unused harmony export AppStorageValue */

class AppStorage {
    constructor() {
        this.m = new Map();
        this.s = window.localStorage;
    }
    write(key, value) {
        return this.s.setItem(key, JSON.stringify(value));
    }
    read(key, defaultValue = null) {
        const v = this.s.getItem(key);
        return JSON.parse(v !== null ? v : typeof defaultValue === 'string' ? defaultValue : JSON.stringify(defaultValue));
    }
    get(key) {
        const exists = this.m.has(key);
        if (!exists) {
            this.m.set(key, new AppStorageValue(key, this));
        }
        return this.m.get(key);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = AppStorage;

//# sourceMappingURL=storage.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__range__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



const clearCache = window['require']('electron').webFrame.clearCache;
const createImageBitmap = window['createImageBitmap'];
const fetch = function (url) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield window.fetch(url);
        const img = yield res.blob();
        return yield createImageBitmap(img);
    });
};
const bitmapToCanvas = function (ib) {
    const canvas = document.createElement('canvas');
    canvas.height = ib.height;
    canvas.width = ib.width;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(ib, 0, 0);
    ib.close();
    return canvas;
};
const px = function (v) {
    return v + 'px';
};
let ImageComponent = class ImageComponent {
    constructor(elm, config) {
        this.config = config;
        this.showing = false;
        this.showLock = false;
        this.reject = false;
        this.elm = elm.nativeElement;
        this.setHeight(375);
        this.config.scale.change(() => this.resize());
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.loading = this.elm.querySelector('.loading');
        });
    }
    cache() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.reject = false;
                if (!this.canvas) {
                    let ib = yield fetch(this.src);
                    if (this.reject) {
                        return;
                    }
                    this.canvas = bitmapToCanvas(ib);
                    ib = null;
                    this.size = { w: this.canvas.width, h: this.canvas.height };
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    paint() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.showing && !this.showLock) {
                this.showLock = true;
                yield this.cache();
                if (this.reject)
                    return;
                this.resize(false);
                this.elm.appendChild(this.canvas);
                this.canvas.style.boxShadow = '0 0 12px 4px rgba(0,0,0,.382)';
                this.canvas.style.border = '1px solid rgba(0,0,0,.382)';
                this.showing = true;
                this.loading.classList.add('hide');
                this.showLock = false;
            }
        });
    }
    resize(checkOverflow = true) {
        if (!this.canvas)
            return;
        try {
            const p = this.elm.parentNode.parentNode;
            const mode = this.config.scale.get();
            let s = mode.calc({
                w: p.offsetWidth,
                h: p.offsetHeight
            }, this.size);
            this.canvas.style.zoom = s;
            this.setHeight(this.size.h * s);
            if (checkOverflow)
                this.checkOverflow();
        }
        catch (e) {
            console.warn(e);
            // this catch is because when submenu changing, parentNode may be null
        }
    }
    checkOverflow() {
        try {
            if (this.config.isSinglePage()) {
                const p = this.elm.parentNode.parentNode;
                const threshold = p.clientHeight - window.innerHeight * (5 + 5) / 100;
                const shouldCenter = threshold > this._height;
                if (shouldCenter) {
                    const offset = (threshold - this._height) / 2;
                    this.elm.style.marginTop = px(offset);
                    return;
                }
            }
            this.elm.style.marginTop = null;
        }
        catch (e) {
        }
    }
    clear() {
        this.reject = true;
        if (this.canvas) {
            const parent = this.canvas.parentNode;
            if (parent)
                parent.removeChild(this.canvas);
            this.showing = false;
            this.loading.classList.remove('hide');
            this.canvas = null;
        }
    }
    show() {
        this.checkOverflow();
        this.elm.style.display = 'flex';
        return this;
    }
    hide() {
        this.elm.style.display = 'none';
        return this;
    }
    distance() {
        try {
            const min = this.elm.offsetTop - this.elm.offsetParent.clientHeight;
            const max = this.elm.offsetTop + this.elm.offsetHeight;
            return new __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */](min, max).distance(this.elm.offsetParent.scrollTop);
        }
        catch (e) {
            console.error(e);
        }
    }
    ratio() {
        const r = this.elm.getBoundingClientRect();
        if (!this.elm.offsetParent) {
            return 0;
        }
        const pr = this.elm.offsetParent.getBoundingClientRect();
        const xr = new __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */](pr.left, pr.right);
        const yr = new __WEBPACK_IMPORTED_MODULE_1__range__["a" /* Range */](pr.top, pr.bottom);
        const w = xr.near(r.right) - xr.near(r.left);
        const h = yr.near(r.bottom) - yr.near(r.top);
        const cw = Math.min(r.width, pr.width);
        const ch = Math.min(r.height, pr.height);
        return (w * h) / (cw * ch);
    }
    inView() {
        return this.distance() === 0;
    }
    setHeight(h) {
        this._height = h;
        this.elm.style.height = px(h);
    }
    scrollTo() {
        this.elm.scrollIntoView(true);
    }
    ngOnDestroy() {
        this.clear();
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], ImageComponent.prototype, "src", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], ImageComponent.prototype, "page", void 0);
ImageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'cm-image',
        template: __webpack_require__(163),
        styles: [__webpack_require__(152)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* Config */]) === "function" && _b || Object])
], ImageComponent);

var _a, _b;
//# sourceMappingURL=image.component.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const checkNum = function (v) {
    return v || v === 0;
};
class Range {
    constructor(i, a) {
        [this.min, this.max] = [i, a];
    }
    x(n) {
        let min, max;
        if (this.min !== null && n !== null)
            min = this.min * n;
        if (this.max !== null && n !== null)
            max = this.max * n;
        return new Range(min, max);
    }
    cmb(r) {
        let { min, max } = this;
        if (r.min > min || !checkNum(min))
            min = r.min;
        if (r.max < max || !checkNum(max))
            max = r.max;
        return new Range(min, max);
    }
    between(v) {
        const r = 0;
        if (checkNum(this.max) && v >= this.max)
            return 1;
        else if (checkNum(this.min) && v <= this.min)
            return -1;
        else
            return 0;
    }
    near(v) {
        switch (this.between(v)) {
            case 0:
                return v;
            case 1:
                return this.max;
            case -1:
                return this.min;
        }
    }
    distance(v) {
        switch (this.between(v)) {
            case 0:
                return 0;
            case 1:
                return v - this.max;
            case -1:
                return v - this.min;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Range;

//# sourceMappingURL=range.js.map

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const qs = __webpack_require__(160);
const { ipcRenderer } = window['require']('electron');
class Args {
    constructor() {
        this.sema = 0;
        this._onPath = [];
        this._promise = new Promise(resolve => this._resolve = resolve);
    }
    check() {
        if (this._resolve && this.sema >= 2) {
            this._resolve();
        }
    }
    wait() {
        return this._promise;
    }
    onPath(fn) {
        this._onPath.push(fn);
    }
    execOnPath() {
        this._onPath.forEach(fn => fn(this.path));
    }
}
/* unused harmony export Args */

const args = new Args();
ipcRenderer.on('path', (event, message) => {
    console.warn('PATH:', message);
    args.path = message;
    args.execOnPath();
    args.sema++;
    args.check();
});
ipcRenderer.on('port', (event, message) => {
    console.warn('PORT:', message);
    args.port = message;
    args.sema++;
    args.check();
});
/* harmony default export */ __webpack_exports__["a"] = args;
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_args__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_get__ = __webpack_require__(89);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const getSubBookNames = function (pms) {
    const m = new Map();
    pms.forEach(pm => m.set(pm.SubBook, 1));
    return Array.from(m.keys()).sort((a, b) => a.length - b.length);
};
const { webFrame } = window['require']('electron');
class Book {
    constructor(path, config) {
        this.config = config;
        this._onPage = [];
        this._onSubBook = [];
        this.locator = path;
    }
    get current() {
        return this._current;
    }
    set current(page) {
        const old = this._current;
        this._current = page;
        if (old !== page) {
            this._onPage.forEach(cb => cb(page, old));
        }
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].wait();
            const data = yield __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_get__["a" /* get */])(`http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book`, { locator: this.locator });
            this.meta = yield data.json();
            if (!this.meta.Pages || !this.meta.Pages.length) {
                return 'Sorry, no book found in this folder.';
            }
            this.subBooks = getSubBookNames(this.meta.Pages);
            this.setSubBook(this.subBooks[0]);
        });
    }
    onSubBook(fn) {
        this._onSubBook.push(fn);
    }
    setSubBook(name) {
        webFrame.clearCache();
        this.curSubBook = name;
        this.current = 1;
        this.total = this.pages().length;
        this._onSubBook.forEach(fn => fn());
    }
    pages() {
        return this.meta && this.meta.Pages ? this.meta.Pages.filter(pm => pm.SubBook === this.curSubBook) : [];
    }
    checkPage(page) {
        return page > 0 && page <= this.total;
    }
    updateCurrent(page) {
        const ok = this.checkPage(page);
        if (ok) {
            this.current = page;
        }
        return ok;
    }
    bind(imgs) {
        this.imgs = imgs;
    }
    go(pageOrOffset, relative = false) {
        const page = relative ? this.current + pageOrOffset : pageOrOffset;
        const ok = this.checkPage(page);
        if (ok) {
            if (this.config.isSinglePage()) {
                this.current = page;
            }
            else if (this.config.isContinuousScroll()) {
                const img = this.imgs[page - 1];
                img.scrollTo();
            }
        }
        return ok;
    }
    prev(page) {
        return this.go((page || 0) - 1, !page);
    }
    next(page) {
        return this.go((page || 0) + 1, !page);
    }
    getPageFilePath(imgLocator) {
        const url = new URL(`http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book/page`);
        url['searchParams'].append('locator', this.locator);
        url['searchParams'].append('page', imgLocator);
        return url.href;
    }
    onPage(callback) {
        this._onPage.push(callback);
    }
    onPageRemove(callback) {
        this._onPage = this._onPage.filter(cb => cb !== callback);
    }
    hasPageLoaded() {
        return new Promise(resolve => this.pHasPageLoaded = resolve);
    }
    ensureHasPageLoaded() {
        if (this.pHasPageLoaded)
            this.pHasPageLoaded();
    }
    // last read
    getLastReadIndex() {
        return this.meta.Pages.map(pm => pm.Locator).indexOf(this.meta.LastRead);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 77;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(86);



// if (environment.production) {
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
// }
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_args__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_menu__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const electron = window['require']('electron');
const { webFrame } = electron;
const { dialog, getCurrentWindow, app } = electron.remote;
const ses = getCurrentWindow().webContents.session;
const getSize = () => new Promise(resolve => ses.getCacheSize(size => resolve(size)));
let AppComponent = class AppComponent {
    constructor(zone, title, m, s) {
        this.zone = zone;
        this.title = title;
        this.m = m;
        this.s = s;
        this.refresh = 0;
        webFrame.setZoomLevelLimits(1, 1);
        this.win = getCurrentWindow();
        const menu = new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["b" /* Menu */]();
        const aotItem = new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */](__WEBPACK_IMPORTED_MODULE_2__lib_menu__["d" /* alwaysOnTopItem */]);
        menu.append(aotItem);
        menu.refreshAOTChecked = () => aotItem.checked = this.win.isAlwaysOnTop();
        this.titleBarContextMenu = menu;
        ses.on('will-download', (event) => {
            event.preventDefault();
        });
        this.m.reset();
        const re = this.s.get('menu.recentlyEnjoyed');
        re.onChange(() => this.setFileMenu(re));
        this.setFileMenu(re);
    }
    setFileMenu(re) {
        // file menu
        const fm = this.m.file();
        fm.clear();
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({
            label: 'Open...',
            accelerator: 'CmdOrCtrl+O',
            enabled: true,
            click: () => this.zone.run(() => this.open())
        }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({
            label: 'Open URL...',
            accelerator: 'CmdOrCtrl+U',
            visible: false,
            enabled: false,
            click: () => this.zone.run(() => this.open())
        }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({
            label: 'Save As...',
            enabled: false,
            visible: false,
            accelerator: 'CmdOrCtrl+Shift+S',
            click() {
                console.log('SAVE AS.');
            }
        }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({ type: 'separator' }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({ type: 'separator' }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({ label: 'Recently Enjoyed', enabled: false }));
        re.get([]).map((item) => new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({
            label: item.key,
            click: () => this.zone.run(() => this.path = item.value)
        })).map(item => fm.append(item));
        this.m.set();
    }
    ;
    whenOpen() {
        return __awaiter(this, void 0, void 0, function* () {
            webFrame.clearCache();
            const ses = getCurrentWindow().webContents.session;
            yield new Promise(r => ses.clearCache(r));
        });
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].wait();
            const path = __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].path;
            if (!path) {
                yield this.open();
            }
            else {
                this.path = path;
                yield this.whenOpen();
            }
            __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].onPath(path => {
                const shouldOpen = dialog.showMessageBox(getCurrentWindow(), {
                    type: 'question',
                    message: `File Open Request`,
                    detail: `Would you like to open '${path}'?`,
                    buttons: ['Yes', 'Cancel'],
                    cancelId: 1
                }) === 0;
                if (shouldOpen) {
                    this.zone.run(() => __awaiter(this, void 0, void 0, function* () {
                        this.path = path;
                        yield this.whenOpen();
                    }));
                }
            });
        });
    }
    onOk() {
        getCurrentWindow().show();
    }
    open(e) {
        return __awaiter(this, void 0, void 0, function* () {
            if (e) {
                dialog.showMessageBox(this.win.isVisible() ? this.win : null, {
                    type: 'warning',
                    message: e
                });
            }
            try {
                this.path = dialog.showOpenDialog({
                    properties: ['openFile', 'openDirectory', 'showHiddenFiles'],
                    filters: [
                        { name: 'Images', extensions: ['webp', 'jpg', 'png', 'gif', 'jpeg'] },
                        { name: 'Manga', extensions: ['eris'] },
                        { name: 'Archive', extensions: ['rar', 'zip'] },
                    ]
                }).pop();
                this.refresh++;
                yield this.whenOpen();
            }
            catch (e) {
            }
        });
    }
    getTitle() {
        return this.title.getTitle();
    }
    onContextMenu(e, titleBar) {
        const m = this.titleBarContextMenu;
        m.refreshAOTChecked();
        m.popup(this.win, { x: e.x, y: titleBar.offsetHeight / 2 });
    }
    zoom() {
        const w = this.win;
        return w.isMaximized() ? w.unmaximize() : w.maximize();
    }
    onDropBefore() {
        return false;
    }
    onDrop(e) {
        e.preventDefault();
        this.path = e.dataTransfer.files[0].path;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:dragover', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:dragleave', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onDropBefore", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onDrop", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(161),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__lib_storage__["a" /* AppStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__lib_storage__["a" /* AppStorage */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__trust_resource_url_pipe__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__reader_reader_component__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__lib_menu__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__lib_storage__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__image_image_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__scroll_scroll_component__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dot_dot_component__ = __webpack_require__(87);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













let AppModule = class AppModule {
};
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_6__reader_reader_component__["a" /* ReaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__trust_resource_url_pipe__["a" /* TrustResourceUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_9__image_image_component__["a" /* ImageComponent */],
            __WEBPACK_IMPORTED_MODULE_10__scroll_scroll_component__["a" /* ScrollComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dot_dot_component__["a" /* DotComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_7__lib_menu__["a" /* AppMenu */], __WEBPACK_IMPORTED_MODULE_8__lib_storage__["a" /* AppStorage */], __WEBPACK_IMPORTED_MODULE_11__config_service__["a" /* Config */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DotComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

let DotComponent = class DotComponent {
    constructor(elm) {
        this.elm = elm.nativeElement;
    }
    ngOnInit() {
        let times = 0;
        this.timer = setInterval(() => {
            times++;
            const dots = (new Array(3))
                .fill(false).map((v, i) => i < times % 4)
                .map(v => `<span style="opacity: ${v ? 1 : 0}">.</span>`)
                .join('');
            this.elm.querySelector('span').innerHTML = dots;
        }, this.interval);
    }
    ngOnDestroy() {
        clearInterval(this.timer);
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], DotComponent.prototype, "word", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], DotComponent.prototype, "interval", void 0);
DotComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'cm-dot',
        template: __webpack_require__(162),
        styles: [__webpack_require__(151)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _a || Object])
], DotComponent);

var _a;
//# sourceMappingURL=dot.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__range__ = __webpack_require__(53);

class Scale {
    constructor(xi, xa, yi, ya) {
        this.x = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](null, null);
        this.y = new __WEBPACK_IMPORTED_MODULE_0__range__["a" /* Range */](null, null);
        [this.x.min, this.x.max, this.y.min, this.y.max] = [xi, xa, yi, ya];
    }
    calc(parent, child) {
        const wsr = this.x.x(parent.w).x(1 / child.w);
        const hsr = this.y.x(parent.h).x(1 / child.h);
        const sr = wsr.cmb(hsr);
        const s = sr.near(100);
        return s / 100;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Scale;

//# sourceMappingURL=scale.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const get = function (url, params) {
    const u = new URL(url);
    for (let prop in params) {
        u['searchParams'].append(prop, params[prop]);
    }
    return fetch(u.href);
};
/* harmony export (immutable) */ __webpack_exports__["a"] = get;

//# sourceMappingURL=get.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const time = {
    Second: 1000,
    Minute: 1000 * 60,
    Hour: 1000 * 60 * 60,
    Day: 1000 * 60 * 60 * 24,
    Now() {
        return Date.now();
    },
    Sleep(duration) {
        return new Promise(r => setTimeout(r, duration));
    },
    Since(time) {
        return Date.now() - time;
    }
};
/* harmony export (immutable) */ __webpack_exports__["a"] = time;

//# sourceMappingURL=time.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return setTouchBar; });
/* unused harmony export TouchBarButton */
/* unused harmony export TouchBarColorPicker */
/* unused harmony export TouchBarGroup */
/* unused harmony export TouchBarLabel */
/* unused harmony export TouchBarPopover */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchBarSlider; });
/* unused harmony export TouchBarSpacer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TouchBarSegmentedControl; });
/* unused harmony export TouchBarScrubber */
const electron = window['require']('electron');
const { getCurrentWindow, TouchBar } = electron.remote;
const { TouchBarButton, TouchBarColorPicker, TouchBarGroup, TouchBarLabel, TouchBarPopover, TouchBarSlider, TouchBarSpacer, TouchBarScrubber, TouchBarSegmentedControl } = TouchBar;
const setTouchBar = function (args) {
    const win = getCurrentWindow();
    const touchBar = new TouchBar(args);
    win.setTouchBar(touchBar);
};

//# sourceMappingURL=touchbar.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_menu__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_lib_storage__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};








const fs = window['require']('fs');
const { dialog, BrowserWindow, getCurrentWindow, Menu, MenuItem } = window['require']('electron').remote;
let ReaderComponent = class ReaderComponent {
    constructor(zone, title, m, s, elm, config) {
        this.zone = zone;
        this.title = title;
        this.m = m;
        this.s = s;
        this.config = config;
        this.ok = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.fail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.loadingShow = false;
        this.elm = elm.nativeElement;
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((changes.path || changes.refresh) && this.path) {
                this.config.clear();
                this.book = null;
                this.loadingShow = true;
                const t = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["c" /* Timeout */]();
                this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](this.path, this.config);
                let e = yield this.book.init();
                if (e) {
                    this.fail.emit(e);
                    return;
                }
                this.ok.emit();
                yield this.book.hasPageLoaded();
                yield t.timeout(998);
                this.loadingShow = false;
                this.title.setTitle(this.book.meta.Name);
                // if (this.book.meta.Pages.length > 512) {
                //   alert('Now manga with more than 512 pages is not supported, the first 512 pages are displayed.');
                //   this.book.meta.Pages = this.book.meta.Pages.slice(0, 512);
                // }
                // turn to specific page
                setTimeout(() => {
                    if (this.book.meta.LastRead) {
                        const page = this.book.getLastReadIndex();
                        const shouldTurn = dialog.showMessageBox(getCurrentWindow(), {
                            type: 'question',
                            message: `Turn to Page${page}`,
                            detail: `The book is opened via page${page}, 'OK' to go that page rather than Page1.`,
                            buttons: ['Yes', 'Cancel'],
                            cancelId: 1
                        }) === 0;
                        if (shouldTurn) {
                            this.zone.run(() => this.book.go(page));
                        }
                    }
                }, 0);
                // scale and view
                const barViewMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */].VIEW_ALL);
                const barScaleMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */].SCALE_ALL);
                const setView = i => {
                    this.zone.run(() => {
                        this.config.view.set(barViewMap.getB(i));
                    });
                };
                const setScale = i => {
                    this.zone.run(() => {
                        this.config.scale.set(barScaleMap.getB(i));
                    });
                };
                // todo: pinch
                this.config.pinch.change(v => 0);
                // menu
                const re = this.s.get('menu.recentlyEnjoyed');
                re.set((new __WEBPACK_IMPORTED_MODULE_2__lib_util__["d" /* LRU */](re.get([]), this.config.recentlyEnjoyedLen, (a, b) => a.value === b.value)).add({
                    key: this.book.meta.Name || this.book.meta.Locator,
                    value: this.book.meta.Locator
                }));
                const vm = this.m.view();
                vm.clear();
                const append = (vm, ...itemsArr) => {
                    itemsArr.forEach(items => {
                        vm.append(new MenuItem({ type: 'separator' }));
                        items.forEach(item => vm.append(item));
                    });
                };
                const viewItems = ['Continuous Scroll', 'Single Page'].map((label, i) => new MenuItem({
                    label,
                    accelerator: `CmdOrCtrl+${i + 1}`,
                    type: 'radio',
                    click: () => setView(i),
                    checked: barViewMap.getA(this.config.view.get()) === i,
                }));
                const modeItems = ['Full Page', 'Default', 'Width FullFilled'].map((label, i) => new MenuItem({
                    label,
                    accelerator: `CmdOrCtrl+Alt+${i + 1}`,
                    type: 'radio',
                    click: () => setScale(i),
                    checked: barScaleMap.getA(this.config.scale.get()) === i
                }));
                const goItems = ['First Page', 'Previous Page', 'Next Page'].map((label, i) => new MenuItem({
                    label,
                    accelerator: [null, 'Left', 'Right'][i],
                    click: () => {
                        this.zone.run(() => {
                            switch (i) {
                                case 0:
                                    this.book.go(1);
                                    break;
                                case 1:
                                    this.onContextMenu();
                                    break;
                                case 2:
                                    this.onClick();
                                    break;
                            }
                        });
                    }
                }));
                append(vm, viewItems, modeItems, goItems);
                const cm = this.m.catalogue();
                cm.clear();
                const subBookItems = this.book.subBooks.map(name => new MenuItem({
                    label: '.'.includes(name) ? 'Default Book' : name,
                    type: 'radio',
                    click: () => this.zone.run(() => this.book.setSubBook(name)),
                    checked: this.book.curSubBook === name
                }));
                append(cm, [new MenuItem({
                        label: subBookItems.length > 1 ? 'multi-books inside' : 'no sub-book found',
                        enabled: false
                    })], subBookItems.length > 1 ? subBookItems : []);
                this.m.set();
                // const setZoomItemEnabled = (min: number, max: number) => {
                //   const unit = this.config.ui.view.zoomUnit;
                //   const cur = this.config.scale.get();
                //   const toMin = (100 - unit) / 100 * cur;
                //   const toMax = (100 + unit) / 100 * cur;
                //   const threshold = 5;
                //   // [zoomOutItem.enabled, zoomInItem.enabled] = [toMin - min <= threshold, max - toMax <= threshold];
                // };
                // this.config.scale.change(() => setZoomItemEnabled(this.config.scale.min, this.config.scale.max));
                // this.config.onSetScaleConstraint((min, max) => setZoomItemEnabled(min, max));
                // touchBar
                const getProgressStr = (current = this.book.current) => current + '/' + this.book.total;
                const lock = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["e" /* RustyLock */]();
                let barProgLastValue;
                const slider = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["a" /* TouchBarSlider */]({
                    label: getProgressStr(),
                    value: this.book.current,
                    minValue: 1,
                    maxValue: this.book.total,
                    change: (current) => {
                        if (barProgLastValue !== current) {
                            barProgLastValue = current;
                            slider.label = getProgressStr(current);
                            this.zone.run(() => this.book.go(current));
                            lock.lock(250);
                        }
                    }
                });
                const viewCtrl = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* TouchBarSegmentedControl */]({
                    segments: [
                        { label: 'Scroll' },
                        { label: 'Single' },
                    ],
                    selectedIndex: barViewMap.getA(this.config.view.get()),
                    change: setView
                });
                const modeCtrl = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* TouchBarSegmentedControl */]({
                    segments: [
                        { label: 'Page' },
                        { label: 'Default' },
                        { label: 'Width' },
                    ],
                    selectedIndex: barScaleMap.getA(this.config.scale.get()),
                    change: setScale
                });
                this.book.onPage((current) => {
                    lock.run(() => {
                        slider.value = current;
                        slider.label = getProgressStr(current);
                    });
                });
                this.book.onSubBook(() => {
                    slider.maxValue = this.book.total;
                    slider.label = getProgressStr(this.book.current);
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* setTouchBar */])([
                    viewCtrl,
                    slider,
                    // new TouchBarScrubber({
                    //   items: (new Array(this.book.total)).fill(1).map((v, i) => '' + i).map(i => ({label: i})),
                    //   highlight: index => console.log('touchBar scrubber:', index),
                    //   mode: 'free',
                    //   selectedStyle: 'outline',
                    // }),
                    modeCtrl,
                ]);
                // update menu and touchBar
                this.config.view.change(n => {
                    const index = __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */].VIEW_ALL.indexOf(n);
                    viewItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                    viewCtrl.selectedIndex = index;
                });
                this.config.scale.change(n => {
                    const index = __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */].SCALE_ALL.indexOf(n);
                    modeItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                    modeCtrl.selectedIndex = index;
                });
            }
        });
    }
    // setScaleConstraint() {
    //   this.config.setScaleConstraint(this.book, this.elm, this.viewers);
    // }
    // @HostListener('resize', ['$event']) onResize() {
    //   alert(1)
    // setTimeout(() => {
    //   this.setScaleConstraint();
    // }, 0);
    // }
    onClick() {
        this.config.scrollDirection = true;
        const ok = this.book.next();
        console.log(1, ok);
    }
    onContextMenu() {
        this.config.scrollDirection = false;
        const ok = this.book.prev();
        console.log(ok);
    }
    onWheel(e) {
        if (e.ctrlKey) {
            e.preventDefault();
            if (this.config.scale.is(__WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */].SCALE_DEFAULT)) {
                this.config.pinch.set(Math.exp(-e.deltaY / 100));
            }
            return;
        }
        this.config.scrollDirection = e.deltaY > 0;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], ReaderComponent.prototype, "path", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], ReaderComponent.prototype, "refresh", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ReaderComponent.prototype, "ok", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ReaderComponent.prototype, "fail", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:keydown.pageDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:keydown.pageUp', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onContextMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onWheel", null);
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(164),
        styles: [__webpack_require__(153), __webpack_require__(155), __webpack_require__(154)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__lib_menu__["a" /* AppMenu */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7_app_lib_storage__["a" /* AppStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_lib_storage__["a" /* AppStorage */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__config_service__["a" /* Config */]) === "function" && _f || Object])
], ReaderComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_util__ = __webpack_require__(23);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const BACKWARD_RESERVE = 3;
const FORWARD_RESERVE = 6;
const NEXT_PRELOAD = 3;
class MinorQueue {
    constructor() {
        this.interrupt = false;
    }
    stop() {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.wait) {
                this.interrupt = true;
                return this.wait;
            }
        });
    }
    run(tasks) {
        return __awaiter(this, void 0, void 0, function* () {
            let resolve;
            this.interrupt = false;
            this.wait = new Promise(r => resolve = r);
            for (let i = 0; i < tasks.length; i++) {
                yield tasks[i];
                if (this.interrupt) {
                    break;
                }
            }
            resolve();
        });
    }
}
class CacheManager {
    // imgs: ImageComponent[];
    // queues
    // showQ: ImageComponent[];
    // cacheQ: ImageComponent[];
    constructor(config, book, imgs) {
        this.config = config;
        this.book = book;
        this.imgs = imgs;
        this.minor = new MinorQueue();
        this.latest = new __WEBPACK_IMPORTED_MODULE_0__lib_util__["b" /* LatestRunner */]();
    }
    getPreloadTasks(indexes) {
        const d = this.config.scrollDirection ? 1 : -1;
        const startPoint = d ? Math.max(...indexes) : Math.min(...indexes);
        let from = Math.max(0, startPoint + d);
        let to = Math.max(0, startPoint + d * NEXT_PRELOAD);
        if (to < from)
            [to, from] = [from, to];
        return this.imgs.slice(from, to).map(img => img.paint());
    }
    getCleanTasks(indexes) {
        const to = Math.max(0, Math.min(...indexes) - BACKWARD_RESERVE);
        const from = Math.max(...indexes) + FORWARD_RESERVE;
        return this.imgs.slice(0, to).concat(this.imgs.slice(from)).map(img => (() => __awaiter(this, void 0, void 0, function* () { return img.clear(); }))());
    }
    request(...indexes) {
        return __awaiter(this, void 0, void 0, function* () {
            // await this.latest.run(async () => {
            yield this.minor.stop();
            for (let i = 0; i < indexes.length; i++) {
                yield this.imgs[indexes[i]].paint();
                this.book.ensureHasPageLoaded();
            }
            let tasks = [];
            tasks = tasks.concat(this.getPreloadTasks(indexes), this.getCleanTasks(indexes));
            this.minor.run(tasks);
            // });
        });
    }
    debug() {
        setInterval(() => {
            console.clear();
            console.table(this.imgs.map((img, i) => ({ index: i, showing: img.showing ? '*' : undefined })));
        }, 500);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = CacheManager;

//# sourceMappingURL=cache-manager.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_book__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__image_image_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_util__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__view_mode__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cache_manager__ = __webpack_require__(93);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







const { webFrame } = window['require']('electron');
let checking = false;
let ScrollComponent = class ScrollComponent {
    constructor(config, elm) {
        this.config = config;
        this.elm = elm.nativeElement;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        let check;
        const barViewMap = new __WEBPACK_IMPORTED_MODULE_4__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* Config */].VIEW_ALL);
        let viewCS, viewSP;
        this.imgs.changes.subscribe((changes) => __awaiter(this, void 0, void 0, function* () {
            // binding
            const imgs = this.imgs.map(img => img);
            const manager = new __WEBPACK_IMPORTED_MODULE_6__cache_manager__["a" /* CacheManager */](this.config, this.book, imgs);
            if (viewSP)
                viewSP.after(this.book);
            if (viewCS)
                viewCS.after(this.book);
            viewCS = new __WEBPACK_IMPORTED_MODULE_5__view_mode__["a" /* ViewContinuousScroll */](imgs, manager);
            viewSP = new __WEBPACK_IMPORTED_MODULE_5__view_mode__["b" /* ViewSinglePage */](imgs, manager);
            if (!this.book)
                return;
            this.book.bind(imgs);
            // manager.debug();
            // set check function
            if (!imgs.length)
                return;
            let checkCurView;
            check = (newIndex) => {
                const newValue = barViewMap.getA(newIndex);
                if (newIndex !== undefined) {
                    if (viewCS.is(newValue)) {
                        viewSP.after(this.book);
                        viewCS.before(this.config, this.book);
                        checkCurView = () => viewCS.check();
                    }
                    else if (viewSP.is(newValue)) {
                        viewCS.after(this.book);
                        viewSP.before(this.book);
                        checkCurView = () => viewSP.check(this.book.current);
                    }
                    else
                        debugger;
                }
                if (!checkCurView)
                    debugger;
                checkCurView();
            };
            check(this.config.view.get());
            this.config.view.change(n => check(n));
        }));
    }
    onResize() {
        this.imgs.map(img => img).filter(img => img.showing).forEach(img => img.resize());
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reader_book__["a" /* Book */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reader_book__["a" /* Book */]) === "function" && _a || Object)
], ScrollComponent.prototype, "book", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_3__image_image_component__["a" /* ImageComponent */]),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* QueryList */]) === "function" && _b || Object)
], ScrollComponent.prototype, "imgs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* HostListener */])('window:resize'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ScrollComponent.prototype, "onResize", null);
ScrollComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* Component */])({
        selector: 'cm-scroll',
        template: __webpack_require__(165),
        styles: [__webpack_require__(156)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__config_service__["a" /* Config */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _d || Object])
], ScrollComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=scroll.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__config_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_util__ = __webpack_require__(23);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


const r = new __WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* LatestRunner */]();
class ViewSinglePage {
    is(view) {
        return view === __WEBPACK_IMPORTED_MODULE_0__config_service__["a" /* Config */].VIEW_SINGLE_PAGE;
    }
    constructor(imgs, manager) {
        this.imgs = imgs;
        this.manager = manager;
    }
    before(book) {
        this.imgs.filter((img, i) => i !== book.current - 1).forEach(img => img.hide());
        this.onPage = (n) => {
            this.check(n);
        };
        book.onPage(this.onPage);
    }
    check(page) {
        return __awaiter(this, void 0, void 0, function* () {
            // console.log(1, page);
            yield r.run(() => __awaiter(this, void 0, void 0, function* () {
                const cur = this.imgs[page - 1];
                // console.log(2, page);
                yield this.manager.request(page - 1);
                // console.log(3, page);
                if (this.last && this.last != cur) {
                    this.last.hide();
                }
                cur.scrollTo();
                cur.show();
                this.last = cur;
            }));
        });
    }
    after(book) {
        if (book)
            book.onPageRemove(this.onPage);
        this.last = null;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ViewSinglePage;

class ViewContinuousScroll {
    is(view) {
        return view === __WEBPACK_IMPORTED_MODULE_0__config_service__["a" /* Config */].VIEW_CONTINUOUS_SCROLL;
    }
    constructor(imgs, manager) {
        this.imgs = imgs;
        this.manager = manager;
    }
    before(config, book) {
        this.imgs.forEach(img => img.show());
        this.imgs[book.current - 1].scrollTo();
        const r = new __WEBPACK_IMPORTED_MODULE_1__lib_util__["b" /* LatestRunner */]();
        this._timer = setInterval(() => {
            const r = this.imgs.map((img, i) => ({ i: i, r: img.ratio() })).filter(x => x.r > 0.45);
            const d = config.scrollDirection;
            const focus = d ? r.pop() : r.shift();
            if (focus) {
                book.updateCurrent(focus.i + 1);
            }
        }, 300);
        this.onPage = (n) => {
            this.check();
        };
        book.onPage(this.onPage);
    }
    check() {
        return __awaiter(this, void 0, void 0, function* () {
            yield r.run(() => __awaiter(this, void 0, void 0, function* () {
                const showingIndex = this.imgs.map((img, i) => ({
                    i: i,
                    inView: img.inView()
                })).filter(x => x.inView).map(x => x.i);
                yield this.manager.request(...showingIndex);
            }));
        });
    }
    after(book) {
        if (book)
            book.onPageRemove(this.onPage);
        clearInterval(this._timer);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = ViewContinuousScroll;

//# sourceMappingURL=view-mode.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TrustResourceUrlPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let TrustResourceUrlPipe = class TrustResourceUrlPipe {
    constructor(_s) {
        this.sanitizer = _s;
    }
    transform(value, args) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(value);
    }
};
TrustResourceUrlPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'trustResourceUrl'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object])
], TrustResourceUrlPipe);

var _a;
//# sourceMappingURL=trust-resource-url.pipe.js.map

/***/ })

},[190]);
//# sourceMappingURL=main.bundle.js.map