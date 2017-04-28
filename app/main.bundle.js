webpackJsonp([1,4],{

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 38px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  opacity: 0;\n  text-align: center;\n  font-size: 14px;\n  line-height: 38px;\n  color: #ccc;\n  text-shadow: 0 0 1px black;\n  -webkit-transition: opacity 125ms ease-in-out;\n  transition: opacity 125ms ease-in-out;\n}\n\n.titlebar:hover {\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0.9);\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n/*section.cover {*/\n  /*position: fixed;*/\n  /*top: 0;*/\n  /*right: 0;*/\n  /*bottom: 0;*/\n  /*left: 0;*/\n  /*z-index: 1;*/\n  /*background-color: red;*/\n  /*display: flex;*/\n  /*align-items: center;*/\n  /*justify-content: center;*/\n/*}*/\n\n/*section.cover img {*/\n/*}*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, ".layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #111;\n  border-radius: 10px;\n  border: 1px solid #222;\n  color: #999;\n  padding: 8px 12px 8px 12px;\n  font-family: \"PingFang SC\", sans-serif;\n  text-shadow: 0 0 2px black;\n  font-size: 16px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "section.pages {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow-scrolling: touch;\n  scroll-behavior: smooth;\n}\n\nviewer {\n  width: 100%;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)();
// imports


// module
exports.push([module.i, "section {\n  text-align: center;\n  position: relative;\n}\n\nsection.singlePage {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nsection.singlePage.overflow {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: white;\n  font-family: \"American Typewriter\", monospace;\n  opacity: 0.8;\n}\n\n.loading.hide {\n  opacity: 0;\n  -webkit-transition: opacity 275ms ease-in;\n  transition: opacity 275ms ease-in;\n}\n\n.loading .words {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading .words .page {\n  font-size: 4vh;\n  margin-bottom: 1vh;\n}\n\n.loading .words .status {\n  font-size: 2.5vh;\n  opacity: 0.8;\n}\n\nimg {\n  box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.4);\n  opacity: 1;\n  -webkit-transition: 15ms ease;\n  transition: 15ms ease;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\" [refresh]=\"refresh\" (ok)=\"onOk()\" (fail)=\"open()\"></reader>\n<header class=\"titlebar\" (dblclick)=\"zoom()\" (contextmenu)=\"onContextMenu($event, titleBar)\" #titleBar>{{getTitle()}}</header>\n<!--<section class=\"cover\" *ngIf=\"cover.show\" #c>-->\n  <!--<img-->\n    <!--*ngIf=\"cover.dataUrl\"-->\n    <!--[src]=\"cover.dataUrl\"-->\n    <!--[height]=\"c.offsetHeight*cover.scale/100\"-->\n    <!--[width]=\"c.offsetWidth*cover.scale/100\"-->\n  <!--&gt;-->\n<!--</section>-->\n"

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = "<section class=\"pages\" #pages>\n  <viewer #page *ngFor=\"let p of book?.meta?.Pages; let i = index;\"\n          [style.marginTop.px]=\"config.whenContinuousScroll(config.ui.view.before-(i!==0?config.ui.view.intervalCorrection:0))\"\n          [style.marginBottom.px]=\"config.whenContinuousScroll(config.ui.view.after)\"\n          [config]=\"config\"\n          [hidden]=\"config.isContinuousScroll()? false: (i+1!==book.current)\"\n          [id]=\"'page-'+(i+1)\"\n          [class]=\"i\"\n          [page]=\"i+1\"\n          [cache]=\"inCacheRange(i+1)\"\n          [path]=\"book.getPageFilePath(p.Locator)\"\n          [meta]=\"p\"\n          (attention)=\"update(i+1)\"\n          (leave)=\"update(i+1, true)\">\n  </viewer>\n</section>\n<section class=\"layer\">\n  <section class=\"panel progress\" *ngIf=\"book?.total\">\n    {{book?.current}}<span style=\"opacity: 0.75;margin: 0 2px 0 4px;\">/</span>{{book?.total}}\n  </section>\n</section>\n"

/***/ }),

/***/ 157:
/***/ (function(module, exports) {

module.exports = "<section class=\"viewer\" #viewer\n         [class.overflow]=\"isOverflow()\"\n         [class.singlePage]=\"config.isSinglePage()\"\n         [class.continuousScroll]=\"config.isContinuousScroll()\">\n         <!--[style.height.px]=\"config.whenContinuousScroll(height)\">-->\n  <div class=\"loading\" [class.hide]=\"show\">\n    <div class=\"words\">\n      <div class=\"page\">Page {{page}}</div>\n      <!--<div class=\"status\">{{meta.Type}}: {{meta.Width}}-{{meta.Height}}</div>-->\n      <div class=\"status\">loading...</div>\n    </div>\n  </div>\n  <img #img [src]=\"path\"\n       *ngIf=\"cache\"\n       [style.marginTop.px]=\"config.whenSinglePageNotFullHeight(config.ui.view.before)\"\n       [style.marginBottom.px]=\"config.whenSinglePageNotFullHeight(config.ui.view.after)\"\n       [style.maxHeight.px]=\"config.whenNotFullWidth(height)\"\n       [style.minWidth.%]=\"config.whenFullWidth(100)\"\n       [style.width.%]=\"config.whenFullWidth(100)\"\n       [hidden]=\"!show\"\n       (load)=\"onLoad(img)\">\n  <!--[class.visible]=\"show && config.isContinuousScroll()?inView:true\"-->\n</section>\n"

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76);


/***/ }),

/***/ 29:
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
const { app, Menu, MenuItem } = electron.remote;
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
        },
        {
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
                        electron.shell.openExternal('http://devbycm.com');
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
                },
                {
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
        template[3].submenu = [
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
                role: 'togglefullscreen'
            }, {
                type: 'separator'
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
                label: 'Bring All to Front',
                role: 'front'
            }
        ];
        if (1) {
            template[3].submenu.push({
                label: 'Developer Tools',
                accelerator: 'Cmd+Alt+I',
                role: 'toggledevtools'
            });
        }
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
    view() {
        return this.getSubMenu(2);
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

/***/ 30:
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const qs = __webpack_require__(154);
const { ipcRenderer } = window['require']('electron');
class Args {
    constructor() {
        this.sema = 0;
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
}
/* unused harmony export Args */

const args = new Args();
ipcRenderer.on('path', (event, message) => {
    console.warn('PATH:', message);
    args.path = message;
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

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/* harmony export (immutable) */ __webpack_exports__["c"] = RustyLock;

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
/* harmony export (immutable) */ __webpack_exports__["d"] = Checker;

class ABMap {
    constructor(enumArr) {
        this.mapA = {};
        this.mapB = {};
        if (enumArr) {
            enumArr.forEach((item, i) => this.set(i, item));
        }
    }
    set(a, b) {
        this.mapA[a] = b;
        this.mapB[b] = a;
    }
    getA(b) {
        return this.mapB[b];
    }
    getB(a) {
        return this.mapA[a];
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
/* harmony export (immutable) */ __webpack_exports__["b"] = LRU;

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
            this.listeners.forEach(cb => cb(this.value, old));
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
        return this.listeners.push(cb);
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

class Config {
    constructor() {
        this.recentlyEnjoyedLen = 10;
        this.natureScroll = true;
        // appearance
        this.ui = {
            view: {
                before: 50,
                after: 50,
                intervalCorrection: 50,
                zoomUnit: 5
            }
        };
        this.pinch = new ConfigItem(1);
        // mode
        this.mode = new ConfigItem(Config.MODE_DEFAULT);
        // scale
        this.defaultScale = 150;
        this.scale = new ConfigRangedItem(this.defaultScale, 100, 100000);
        this._onSetScaleConstraint = [];
        // view
        this.view = new ConfigItem(Config.VIEW_SINGLE_PAGE);
    }
    clear() {
        this.pinch.clear();
        this.mode.clear();
        this.mode.clear();
        this.view.clear();
    }
    onSetScaleConstraint(cb) {
        this._onSetScaleConstraint.push(cb);
    }
    setScaleConstraint(book, viewers) {
        if (book.meta.Pages.length && viewers.length) {
            const vw = viewers.map(v => v.elm.offsetWidth).reduce((a, b) => a > b ? a : b);
            const vh = viewers.map(v => v.elm.offsetHeight).reduce((a, b) => a > b ? a : b);
            const imgMinW = book.meta.Pages.map(pm => pm.Width).reduce((a, b) => a < b ? a : b);
            const imgMinH = book.meta.Pages.map(pm => pm.Height).reduce((a, b) => a < b ? a : b);
            const MIN_HEIGHT_PROPORTION = 65;
            const MIN_WIDTH_PROPORTION = 30;
            this.scale.setRange(Math.max(MIN_HEIGHT_PROPORTION * vh / imgMinH, MIN_WIDTH_PROPORTION * vw / imgMinW), 100 * vw / imgMinW);
            this._onSetScaleConstraint.forEach(cb => cb(this.scale.min, this.scale.max));
        }
    }
    isFullWidth() {
        return this.mode.is(Config.MODE_FULL_WIDTH);
    }
    whenFullWidth(v) {
        if (this.isFullWidth()) {
            return v;
        }
    }
    whenNotFullWidth(v) {
        if (!this.isFullWidth()) {
            return v;
        }
    }
    isFullHeight() {
        return this.mode.is(Config.MODE_FULL_HEIGHT);
    }
    isContinuousScroll() {
        return this.view.get() === Config.VIEW_CONTINUOUS_SCROLL;
    }
    whenContinuousScroll(v) {
        if (this.isContinuousScroll()) {
            return v;
        }
    }
    isSinglePage() {
        return this.view.get() === Config.VIEW_SINGLE_PAGE;
    }
    // mixed
    whenSinglePageNotFullHeight(v) {
        if (this.isSinglePage() && !this.isFullHeight())
            return v;
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Config;

Config.MODE_DEFAULT = 0;
Config.MODE_FULL_HEIGHT = 1;
Config.MODE_FULL_WIDTH = 2;
Config.MODE_ALL = [Config.MODE_FULL_HEIGHT, Config.MODE_DEFAULT, Config.MODE_FULL_WIDTH];
Config.VIEW_CONTINUOUS_SCROLL = 0;
Config.VIEW_SINGLE_PAGE = 1;
Config.VIEW_ALL = [Config.VIEW_CONTINUOUS_SCROLL, Config.VIEW_SINGLE_PAGE];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_meta__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reader_config__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewerComponent; });
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




let ViewerComponent = class ViewerComponent {
    constructor(elm, zone) {
        this.zone = zone;
        this.show = false;
        this.inView = false;
        this.enter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.attention = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.elm = elm.nativeElement;
        this.elm.addEventListener('ready', e => console.log(e));
    }
    scrollTo() {
        this.elm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    onLoad(img) {
        this.show = true;
        this.img = img;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const checker = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["d" /* Checker */](50);
            const io = new IntersectionObserver(() => {
                this.inView = !this.inView;
                if (this.inView) {
                    this.enter.emit();
                    const getRatio = function (rect) {
                        const w = Math.min(Math.max(rect.right, 0), window.innerWidth) - Math.max(rect.left, 0);
                        const h = Math.min(Math.max(rect.bottom, 0), window.innerWidth) - Math.max(rect.top, 0);
                        return (w * h) / Math.min(rect.width * rect.height, window.innerWidth * window.innerHeight);
                    };
                    checker.check(() => {
                        const ratio = getRatio(this.elm.getBoundingClientRect());
                        const FOCUS_RATIO = 0.35;
                        if (ratio > FOCUS_RATIO) {
                            return true;
                        }
                    }, () => {
                        this.zone.run(() => {
                            this.attention.emit();
                        });
                    }, 1);
                }
                else {
                    checker.clear();
                    this.leave.emit();
                }
            });
            io.observe(this.elm);
            this.setHeight();
            this.config.mode.change(() => this.zone.run(() => this.setHeight()));
            this.config.scale.change(() => this.zone.run(() => this.setHeight()));
        });
    }
    onResize() {
        this.setHeight();
    }
    setHeight() {
        const pages = this.elm.parentElement;
        if (!pages)
            return;
        const p = this.meta;
        if (this.config.view.is(__WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */].VIEW_SINGLE_PAGE) && this.config.mode.is(__WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */].MODE_FULL_HEIGHT)) {
            this.height = pages.offsetHeight;
        }
        else {
            this.height = p.Height * this.config.scale.get() / 100;
        }
    }
    isOverflow() {
        if (!this.config.view.is(__WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */].VIEW_SINGLE_PAGE))
            return false;
        else if (this.config.mode.is(__WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */].MODE_FULL_HEIGHT))
            return false;
        else if (!this.img)
            return false;
        else
            return this.img.height > this.elm.parentElement.offsetHeight;
    }
    getPos() {
        // const top = this.elm.getBoundingClientRect().top;
        // console.log(this.elm.getBoundingClientRect());
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], ViewerComponent.prototype, "path", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__reader_meta__["a" /* PageMeta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__reader_meta__["a" /* PageMeta */]) === "function" && _a || Object)
], ViewerComponent.prototype, "meta", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], ViewerComponent.prototype, "page", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Boolean)
], ViewerComponent.prototype, "cache", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__reader_config__["a" /* Config */]) === "function" && _b || Object)
], ViewerComponent.prototype, "config", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ViewerComponent.prototype, "enter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ViewerComponent.prototype, "leave", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Output */])(),
    __metadata("design:type", Object)
], ViewerComponent.prototype, "attention", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ViewerComponent.prototype, "onResize", null);
ViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'viewer',
        template: __webpack_require__(157),
        styles: [__webpack_require__(150)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _d || Object])
], ViewerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ 75:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 75;


/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(92);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_args__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_menu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(11);
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
const { dialog, getCurrentWindow } = electron.remote;
const ses = getCurrentWindow().webContents.session;
let AppComponent = class AppComponent {
    constructor(zone, title, m, s) {
        this.zone = zone;
        this.title = title;
        this.m = m;
        this.s = s;
        this.refresh = 0;
        this.win = getCurrentWindow();
        const menu = new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["b" /* Menu */]();
        const aotItem = new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */](__WEBPACK_IMPORTED_MODULE_2__lib_menu__["d" /* alwaysOnTopItem */]);
        menu.append(aotItem);
        menu.refreshAOTChecked = () => aotItem.checked = this.win.isAlwaysOnTop();
        this.titleBarContextMenu = menu;
        webFrame.setVisualZoomLevelLimits(1, 1);
        webFrame.setLayoutZoomLevelLimits(0, 0);
        ses.on('will-download', (event, item, webContents) => {
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
            enabled: false,
            click: () => this.zone.run(() => this.open())
        }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["c" /* MenuItem */]({
            label: 'Save As...',
            enabled: false,
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
            const getSize = () => new Promise(resolve => ses.getCacheSize(size => resolve(size)));
            // setInterval(async () => {
            //   const s = await getSize();
            //   console.log(s / 1024 / 1024, 'MB');
            // }, 1000);
            // console.log(s / 1024 / 1024, 'MB');
            yield __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].wait();
            const path = __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].path;
            if (!path) {
                yield this.open();
            }
            else {
                this.path = path;
                yield this.whenOpen();
            }
        });
    }
    onOk() {
        getCurrentWindow().show();
    }
    open() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.path = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }).pop();
                yield this.whenOpen();
            }
            catch (e) {
            }
            // this.refresh++;
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:dragover', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:dragleave', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:dragend', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onDropBefore", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:drop', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppComponent.prototype, "onDrop", null);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(155),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__lib_storage__["a" /* AppStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__lib_storage__["a" /* AppStorage */]) === "function" && _d || Object])
], AppComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reader_reader_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_height_pipe__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_menu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_storage__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__render_service__ = __webpack_require__(90);
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
            __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__["a" /* ViewerComponent */],
            __WEBPACK_IMPORTED_MODULE_7__reader_reader_component__["a" /* ReaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__["a" /* TrustResourceUrlPipe */],
            __WEBPACK_IMPORTED_MODULE_8__page_height_pipe__["a" /* PageHeightPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__lib_menu__["a" /* AppMenu */], __WEBPACK_IMPORTED_MODULE_10__lib_storage__["a" /* AppStorage */], __WEBPACK_IMPORTED_MODULE_11__render_service__["a" /* RenderService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 85:
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeightPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let PageHeightPipe = class PageHeightPipe {
    transform(p, args) {
        const pages = args[0];
        const xScale = 100;
        const yScale = args[1];
        const [w, h] = [xScale / 100 * pages.offsetWidth, yScale / 100 * pages.offsetHeight];
        const scale = Math.min(1, w / p.Width, h / p.Height);
        return p.Height * scale;
    }
};
PageHeightPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'pageHeight'
    })
], PageHeightPipe);

//# sourceMappingURL=page-height.pipe.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_args__ = __webpack_require__(50);
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

class Book {
    constructor(path, config) {
        this.config = config;
        this._onPage = [];
        this.locator = path;
    }
    bind(viewers) {
        this._viewers = viewers;
    }
    get current() {
        return this._current;
    }
    set current(page) {
        const old = this._current;
        this._current = page;
        this._onPage.forEach(cb => cb(page, old));
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield __WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].wait();
            const url = new URL(`http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book`);
            url['searchParams'].append('locator', this.locator);
            const data = yield fetch(url.href);
            this.meta = yield data.json();
            if (!this.meta.Pages) {
                return 'no pages';
            }
            this.total = this.meta.Pages.length;
            this.current = 1;
        });
    }
    checkPage(page) {
        if (page > 0 && page <= this.total) {
            return true;
        }
    }
    updateCurrent(page) {
        const ok = this.checkPage(page);
        if (ok) {
            this.current = page;
        }
        return ok;
    }
    go(pageOrOffset, relative = false) {
        const page = relative ? this.current + pageOrOffset : pageOrOffset;
        const ok = this.checkPage(page);
        if (ok) {
            const viewer = this._viewers[page - 1];
            if (this.config.isSinglePage()) {
                this.current = page;
                setTimeout(() => {
                    viewer.scrollTo();
                }, 0);
            }
            else {
                viewer.scrollTo();
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
    getLastReadIndex() {
        return this.meta.Pages.map(pm => pm.Locator).indexOf(this.meta.LastRead);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class PageMeta {
}
/* harmony export (immutable) */ __webpack_exports__["a"] = PageMeta;

class BookMeta {
}
/* unused harmony export BookMeta */

//# sourceMappingURL=meta.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewer_viewer_component__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_menu__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_lib_storage__ = __webpack_require__(30);
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
    constructor(zone, title, m, s, elm) {
        this.zone = zone;
        this.title = title;
        this.m = m;
        this.s = s;
        this.ok = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.fail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.pageList = [];
        this.elm = elm.nativeElement;
        this.config = new __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */]();
    }
    // todo: multi-viewer: cache and better loading
    onRightClick() {
    }
    update(page, leave) {
        if (leave) {
            this.pageList = this.pageList.filter(p => p !== page);
        }
        else {
            this.pageList.push(page);
        }
        this.book.updateCurrent(this.pageList[this.pageList.length - 1]);
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes.path && this.path) {
                this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](this.path, this.config);
                let e = yield this.book.init();
                if (e) {
                    this.fail.emit(e);
                    return;
                }
                this.ok.emit();
                this.title.setTitle(this.book.meta.Name);
                this.viewers.changes.subscribe(() => {
                    this.book.bind(this.viewers.map(v => v));
                });
                this.config.clear();
                setTimeout(() => this.config.setScaleConstraint(this.book, this.viewers), 0);
                // turn to specific page
                if (this.book.meta.LastRead) {
                    const page = this.book.getLastReadIndex();
                    const shouldTurn = dialog.showMessageBox(getCurrentWindow(), {
                        type: 'question',
                        message: `Turn to Page${page}`,
                        detail: `You may opened the book via Page${page}, 'OK' to turn that page rather than Page1.`,
                        buttons: ['Yes', 'Cancel'],
                        cancelId: 1
                    }) === 0;
                    if (shouldTurn) {
                        this.book.go(page);
                    }
                }
                // scale and view
                const barViewMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_ALL);
                const barModeMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].MODE_ALL);
                const setView = i => {
                    this.zone.run(() => {
                        this.config.view.set(barViewMap.getB(i));
                    });
                };
                const setMode = i => {
                    this.zone.run(() => {
                        this.config.mode.set(barModeMap.getB(i));
                    });
                };
                //pinch
                this.config.pinch.change(v => {
                    if (this.config.mode.is(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].MODE_DEFAULT)) {
                        const to = this.config.scale.get() * ((v - 1) * 0.5 + 1);
                        this.config.scale.set(to);
                    }
                });
                // menu
                const re = this.s.get('menu.recentlyEnjoyed');
                re.set((new __WEBPACK_IMPORTED_MODULE_2__lib_util__["b" /* LRU */](re.get([]), this.config.recentlyEnjoyedLen, (a, b) => a.value === b.value)).add({
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
                // const zoomInItem = new MenuItem({
                //   label: 'Zoom In',
                //   accelerator: 'CmdOrCtrl+Plus',
                //   click: () => this.zone.run(() => this.config.scale.set(this.config.scale.get() + this.config.ui.view.zoomUnit))
                // });
                // const zoomOutItem = new MenuItem({
                //   label: 'Zoom Out',
                //   accelerator: 'CmdOrCtrl+-',
                //   click: () => this.zone.run(() => this.config.scale.set(this.config.scale.get() - this.config.ui.view.zoomUnit))
                // });
                const modeItems = ['Full Page', 'Default', 'Width FullFilled'].map((label, i) => new MenuItem({
                    label,
                    accelerator: `CmdOrCtrl+Alt+${i + 1}`,
                    type: 'radio',
                    click: () => setMode(i),
                    checked: barModeMap.getA(this.config.mode.get()) === i
                }));
                // .concat([zoomInItem, zoomOutItem]);
                const goItems = ['First Page', 'Go to..', 'Previous Page', 'Next Page'].map((label, i) => new MenuItem({
                    label,
                    accelerator: [null, 'CmdOrCtrl+G', 'Left', 'Right'][i],
                    click: () => {
                        this.zone.run(() => {
                            switch (i) {
                                case 0:
                                    this.book.go(1);
                                    break;
                                case 1:
                                    const w = new BrowserWindow({
                                        modal: true, parent: getCurrentWindow()
                                    });
                                    w.show();
                                    break;
                                case 2:
                                    this.book.prev();
                                    break;
                                case 3:
                                    this.book.next();
                                    break;
                            }
                        });
                    }
                }));
                append(vm, viewItems, modeItems, goItems);
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
                const lock = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["c" /* RustyLock */]();
                const slider = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["a" /* TouchBarSlider */]({
                    label: getProgressStr(),
                    value: this.book.current,
                    minValue: 1,
                    maxValue: this.book.total,
                    change: (current) => {
                        slider.label = getProgressStr(current);
                        this.zone.run(() => this.book.go(current));
                        lock.lock(175);
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
                    selectedIndex: barModeMap.getA(this.config.mode.get()),
                    change: setMode
                });
                this.book.onPage((current) => {
                    lock.run(() => {
                        slider.value = current;
                        slider.label = getProgressStr(current);
                    });
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* setTouchBar */])([
                    viewCtrl,
                    // new TouchBarButton({label: 'Page 1', click: () => this.zone.run(() => this.book.go(1))}),
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
                    const index = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_ALL.indexOf(n);
                    viewItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                    viewCtrl.selectedIndex = index;
                    const viewer = this.viewers.filter((v, i) => i + 1 === this.book.current)[0];
                    viewer.getPos();
                    // hack view change
                    if (n === __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_CONTINUOUS_SCROLL) {
                        setTimeout(() => {
                            viewer.scrollTo();
                        }, 0);
                    }
                });
                this.config.mode.change(n => {
                    const index = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].MODE_ALL.indexOf(n);
                    modeItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                    modeCtrl.selectedIndex = index;
                });
            }
        });
    }
    prev() {
        if (this.book) {
            this.zone.run(() => {
                this.book.prev();
            });
        }
    }
    ;
    next() {
        if (this.book) {
            this.zone.run(() => {
                this.book.next();
            });
        }
    }
    ;
    onResize() {
        console.warn('RESIZED!');
        this.config.setScaleConstraint(this.book, this.viewers);
    }
    inCacheRange(page) {
        // let distance = 1e10;
        // this.recorder.stack.map(id => parseInt(id)).forEach(p => {
        //   const d = p - page;
        //   if (Math.abs(d) < Math.abs(distance)) {
        //     distance = d;
        //   }
        // });
        const distance = page - this.book.current;
        const BACKWARD = 3;
        const FORWARD = 7;
        return -1 * BACKWARD <= distance && distance <= FORWARD;
    }
    onClick() {
        this.book.next();
    }
    onContextMenu() {
        this.book.prev();
    }
    onWheel(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            if (e.ctrlKey)
                this.config.pinch.set(Math.exp(-e.deltaY / 100));
            else
                this.elm.firstElementChild.scrollTop += e.deltaY * (this.config.natureScroll ? 1 : -1);
        });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewChildren */])(__WEBPACK_IMPORTED_MODULE_4__viewer_viewer_component__["a" /* ViewerComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* QueryList */]) === "function" && _a || Object)
], ReaderComponent.prototype, "viewers", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onRightClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:keydown.pageUp', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "prev", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:keydown.pageDown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "next", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onResize", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('click', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onContextMenu", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReaderComponent.prototype, "onWheel", null);
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(156),
        styles: [__webpack_require__(147), __webpack_require__(149), __webpack_require__(148)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["d" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser__["d" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__lib_menu__["a" /* AppMenu */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_8_app_lib_storage__["a" /* AppStorage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8_app_lib_storage__["a" /* AppStorage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _f || Object])
], ReaderComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RenderService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

const { getCurrentWindow } = window['require']('electron').remote;
let RenderService = class RenderService {
    constructor() {
        this.win = getCurrentWindow();
    }
    stop() {
        this.win.webContents.stopPainting();
    }
    start() {
        this.win.webContents.startPainting();
    }
};
RenderService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], RenderService);

//# sourceMappingURL=render.service.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(11);
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

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
const environment = {
    production: false
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.js.map

/***/ })

},[182]);
//# sourceMappingURL=main.bundle.js.map