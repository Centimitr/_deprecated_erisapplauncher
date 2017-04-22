webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 28px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #222;\n  border-radius: 10px;\n  color: #ccc;\n  opacity: 0.8;\n  padding: 10px 14px 8px 14px;\n  font-family: 'Monaco', sans-serif;\n  font-size: 14px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "section.pages {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow-scrolling: touch;\n  scroll-behavior: smooth;\n}\n\nviewer {\n  width: 100%;\n}\n\n.pages.singlePage viewer {}\n\n.pages.continuousScroll viewer + viewer {\n  margin-top: 7vh;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "section {\n  text-align: center;\n  position: relative;\n}\n\nsection.singlePage {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nsection.singlePage.overflow {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: white;\n  font-family: \"American Typewriter\", monospace;\n  opacity: 0.8;\n}\n\n.loading .words {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading .words .page {\n  font-size: 4vh;\n  margin-bottom: 1vh;\n}\n\n.loading .words .status {\n  font-size: 2.5vh;\n  opacity: 0.8;\n}\n\nimg {\n  box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.4);\n  /*transition: opacity 750ms ease-in-out;*/\n  /*opacity: 0.6;*/\n  /*animation: loaded 500ms;*/\n}\n\n/*@keyframes loaded {*/\n/*from {*/\n/*opacity: 0.8;*/\n/*filter: blur(2px);*/\n/*}*/\n/*to {*/\n/*filter: blur(0);*/\n/*opacity: 1;*/\n/*}*/\n/*}*/\n\nimg.visible {\n  /*opacity: 1;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\" [refresh]=\"refresh\" (ok)=\"onOk()\" (fail)=\"open()\"></reader>\n<header class=\"titlebar\"></header>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<section class=\"pages\" #pages\n         [class.singlePage]=\"config.isSinglePage()\"\n         [class.continuousScroll]=\"config.isContinuousScroll()\">\n  <viewer #page *ngFor=\"let p of book?.meta?.Pages; let i = index;\"\n          [config]=\"config\"\n          [hidden]=\"config.isContinuousScroll()? false: (i+1!==book.current)\"\n          [id]=\"'page-'+(i+1)\"\n          [class]=\"i\"\n          [page]=\"i+1\"\n          [cache]=\"inCacheRange(i+1)\"\n          [path]=\"book.getPageFilePath(p.Id)\"\n          [meta]=\"p\"\n          (attention)=\"book.updateCurrent(i+1)\">\n  </viewer>\n</section>\n<section class=\"layer\">\n  <section class=\"panel progress\" *ngIf=\"book?.total\">\n    {{book?.current}} / {{book?.total}}\n  </section>\n</section>\n"

/***/ }),

/***/ 155:
/***/ (function(module, exports) {

module.exports = "<section class=\"viewer\" #viewer\n         [class.overflow]=\"overflow | async\"\n         [class.singlePage]=\"config.isSinglePage()\"\n         [class.continuousScroll]=\"config.isContinuousScroll()\"\n         [style.height.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\"\n         [style.minHeight.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\"\n         [style.maxHeight.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\">\n  <div class=\"loading\">\n    <div class=\"words\">\n      <div class=\"page\">Page {{page}}</div>\n      <!--<div class=\"status\">{{meta.Type}}: {{meta.Width}}-{{meta.Height}}</div>-->\n      <div class=\"status\">loading...</div>\n    </div>\n  </div>\n  <img #img [src]=\"path\"\n       [style.marginTop.vh]=\"config.whenSinglePage(config.whenNotFullHeight(config.ui.view.singlePage.before))\"\n       [style.marginBottom.vh]=\"config.whenSinglePage(config.whenNotFullHeight(config.ui.view.singlePage.after))\"\n       [style.maxHeight.px]=\"config.whenNotFullWidth(height)\"\n       [style.minWidth.%]=\"config.whenFullWidth(100)\"\n       [style.width.%]=\"config.whenFullWidth(100)\"\n       [class.visible]=\"show && inView\"\n       *ngIf=\"cache\"\n       (load)=\"onLoad()\">\n</section>\n"

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(75);


/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MenuItem; });
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

const getTemplate = function () {
    const template = [
        {
            label: 'File',
            submenu: []
        },
        {
            label: 'View',
            submenu: [
                {
                    role: 'togglefullscreen'
                }
            ]
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
                label: 'Zoom',
                accelerator: 'Ctrl+Cmd+=',
                role: 'zoom'
            }, {
                label: 'Always On Top',
                type: 'checkbox',
                checked: false,
                click: function (item, win) {
                    win.setAlwaysOnTop(!win.isAlwaysOnTop());
                    item.checked = win.isAlwaysOnTop();
                }
            }, {
                type: 'separator'
            }, {
                label: 'Developer Tools',
                accelerator: 'Cmd+Alt+I',
                click: function (item, win) {
                    if (!win.webContents.isDevToolsOpened()) {
                        win.webContents.openDevTools();
                    }
                }
            }, {
                type: 'separator'
            },
            {
                label: 'Bring All to Front',
                role: 'front'
            }
        ];
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const qs = __webpack_require__(152);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class ClassNames {
    constructor() {
        this.names = [];
    }
    get() {
        return this.names;
    }
    clear() {
        this.names = [];
    }
    add(c) {
        this.names.push(c);
    }
}
class IntervalTimer {
    constructor() {
    }
    run(callback, delay = 100) {
        const now = Date.now();
        if ((now - this.lastRunTime) > delay) {
            this.lastRunTime = now;
            callback();
            this.timer = null;
        }
        else {
            if (this.timer) {
                clearTimeout(this.timer);
                this.timer = null;
            }
            this.timer = setTimeout(() => {
                this.lastRunTime = now;
                callback();
            }, delay - (now - this.lastRunTime));
        }
    }
    whenFree(callback) {
        if (!this.timer) {
            callback();
        }
    }
}
/* unused harmony export IntervalTimer */

class EnterLeaveRecorder {
    constructor(cb, opt) {
        this.stack = [];
        this.io = new IntersectionObserver(cb, opt);
    }
    top() {
        return this.stack[this.stack.length - 1];
    }
    // intersect(...ids: string[]): boolean {
    //   return ids.map(id => this.stack.includes(id)).some(b => b);
    // }
    toggle(id) {
        const index = this.stack.indexOf(id);
        if (index < 0) {
            this.stack.push(id);
        }
        else {
            this.stack.splice(index, 1);
        }
        return this.top();
    }
}
/* unused harmony export EnterLeaveRecorder */

class Dismiss {
    constructor(times) {
        this.times = times;
    }
    run(cb) {
        if (this.times > 0) {
            this.times--;
        }
        else {
            cb();
        }
    }
}
/* unused harmony export Dismiss */

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
/* harmony export (immutable) */ __webpack_exports__["b"] = RustyLock;

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
/* harmony export (immutable) */ __webpack_exports__["c"] = Change;

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let cnt = 0;
const pt = v => console.log(cnt++, v);
class ConfigItem {
    constructor(v) {
        this.listeners = [];
        this.value = v;
    }
    set(v) {
        const old = this.value;
        this.value = v;
        if (old !== this.value) {
            this.listeners.forEach(cb => cb(this.value, old));
        }
    }
    get() {
        return this.value;
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

class Config {
    constructor() {
        // appearance
        this.ui = {
            view: {
                continuousScroll: {
                    before: 5,
                    interval: 0,
                    after: 0,
                },
                singlePage: {
                    before: 5,
                    after: 5
                }
            }
        };
        // scale
        this.scale = new ConfigItem(Config.SCALE_DEFAULT);
        // view
        this.view = new ConfigItem(Config.VIEW_SINGLE_PAGE);
    }
    isFullWidth() {
        return this.scale.get() === Config.SCALE_FULL_WIDTH;
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
        return this.scale.get() === Config.SCALE_FULL_HEIGHT;
    }
    whenFullHeight(v) {
        if (this.isFullHeight()) {
            return v;
        }
    }
    whenNotFullHeight(v) {
        if (!this.isFullHeight()) {
            return v;
        }
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
    whenSinglePage(v) {
        if (this.isSinglePage()) {
            return v;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Config;

Config.SCALE_DEFAULT = 150;
Config.SCALE_FULL_HEIGHT = 100;
Config.SCALE_FULL_WIDTH = Infinity;
Config.SCALE_ALL = [Config.SCALE_FULL_HEIGHT, Config.SCALE_DEFAULT, Config.SCALE_FULL_WIDTH];
Config.VIEW_CONTINUOUS_SCROLL = 0;
Config.VIEW_SINGLE_PAGE = 1;
Config.VIEW_ALL = [Config.VIEW_CONTINUOUS_SCROLL, Config.VIEW_SINGLE_PAGE];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_meta__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reader_config__ = __webpack_require__(51);
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




const getWindowSize = () => {
    return [window.innerWidth, window.innerHeight];
};
let ViewerComponent = class ViewerComponent {
    constructor(elm, zone) {
        this.zone = zone;
        this.show = false;
        this.inView = false;
        this.enter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.leave = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.attention = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.c = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["c" /* Change */]();
        this.elm = elm.nativeElement;
        this.elm.addEventListener('ready', e => console.log(e));
        this.overflow = new Promise(resolve => this.resolveOverflow = resolve);
    }
    scrollTo() {
        this.elm.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
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
            this.config.scale.change(() => {
                this.zone.run(() => {
                    this.setHeight();
                });
            });
        });
    }
    onResize() {
        this.setHeight();
    }
    setHeight() {
        const pages = this.elm.parentElement;
        const p = this.meta;
        const xScale = 100;
        const yScale = this.config.scale.get();
        const [w, h] = [xScale / 100 * pages.offsetWidth, yScale / 100 * pages.offsetHeight];
        const scale = Math.min(1, w / p.Width, h / p.Height);
        return this.height = p.Height * scale;
    }
    ngOnChanges(changes) {
    }
    checkOverflow() {
        const h = this.elm.parentElement.offsetHeight;
        const changed = this.c.changed(`${h}.${this.height}`);
        if (changed && h) {
            this.overflow = new Promise(r => r(h < this.height));
        }
    }
    ngAfterContentChecked() {
        this.checkOverflow();
    }
    onLoad() {
        this.show = true;
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
        template: __webpack_require__(155),
        styles: [__webpack_require__(148)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _d || Object])
], ViewerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 74;


/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__ = __webpack_require__(90);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment_prod__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_args__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_menu__ = __webpack_require__(29);
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
let AppComponent = class AppComponent {
    constructor(zone, m) {
        this.zone = zone;
        this.m = m;
        this.refresh = 0;
    }
    whenOpen() {
        this.m.reset();
        const fm = this.m.file();
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["b" /* MenuItem */]({
            label: 'Open...',
            accelerator: 'CmdOrCtrl+O',
            enable: true,
            click: () => this.zone.run(() => this.open())
        }));
        fm.append(new __WEBPACK_IMPORTED_MODULE_2__lib_menu__["b" /* MenuItem */]({
            label: 'Save as...',
            accelerator: 'CmdOrCtrl+Shift+S',
            click() {
                console.log('SAVE AS.');
            }
        }));
        this.m.set();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            webFrame.setVisualZoomLevelLimits(1, 1);
            webFrame.setLayoutZoomLevelLimits(1, 1);
            yield __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].wait();
            const path = __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].path;
            if (!path) {
                this.open();
            }
            else {
                this.path = path;
                this.whenOpen();
            }
        });
    }
    onOk() {
        getCurrentWindow().show();
    }
    open() {
        this.whenOpen();
        this.path = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }).pop();
        this.refresh++;
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(153),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__lib_menu__["a" /* AppMenu */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reader_reader_component__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_height_pipe__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_menu__ = __webpack_require__(29);
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
        providers: [__WEBPACK_IMPORTED_MODULE_9__lib_menu__["a" /* AppMenu */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 84:
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

/***/ 85:
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

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_args__ = __webpack_require__(49);
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
    getPageFilePath(id) {
        const url = new URL(`http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book/page`);
        url['searchParams'].append('locator', this.locator);
        url['searchParams'].append('page', id);
        return url.href;
    }
    onPage(callback) {
        this._onPage.push(callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 87:
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

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewer_viewer_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__lib_menu__ = __webpack_require__(29);
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
const { Menu, MenuItem } = window['require']('electron').remote;
let ReaderComponent = class ReaderComponent {
    constructor(zone, m) {
        this.zone = zone;
        this.m = m;
        this.scale = 133;
        this.ok = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.fail = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* EventEmitter */]();
        this.config = new __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */]();
    }
    // todo: multi-viewer: cache and better loading
    onRightClick() {
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes.path && this.path || this.refresh) {
                this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](this.path, this.config);
                let e = yield this.book.init();
                if (e) {
                    this.fail.emit(e);
                    return;
                }
                this.ok.emit();
                this.viewers.changes.subscribe(() => {
                    this.book.bind(this.viewers.map(v => v));
                });
                const barScaleMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].SCALE_ALL);
                const barViewMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_ALL);
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
                // menu
                const vm = this.m.view();
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
                const scaleItems = ['Full Page', 'Default', 'Width FullFilled'].map((label, i) => new MenuItem({
                    label,
                    accelerator: `CmdOrCtrl+Alt+${i + 1}`,
                    type: 'radio',
                    click: () => setScale(i),
                    checked: barScaleMap.getA(this.config.scale.get()) === i,
                })).concat([new MenuItem({
                        label: 'Zoom In',
                        accelerator: 'CmdOrCtrl+Plus'
                    }), new MenuItem({
                        label: 'Zoom Out',
                        accelerator: 'CmdOrCtrl+-'
                    })
                ]);
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
                                    this.book.prev();
                                    break;
                                case 2:
                                    this.book.next();
                                    break;
                            }
                        });
                    }
                }));
                append(vm, viewItems, scaleItems, goItems);
                this.m.set();
                // touchBar
                const getProgressStr = (current = this.book.current) => current + '/' + this.book.total;
                const lock = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["b" /* RustyLock */]();
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
                    change: i => setView(i)
                });
                const scaleCtrl = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* TouchBarSegmentedControl */]({
                    segments: [
                        { label: 'Page' },
                        { label: 'Default' },
                        { label: 'Width' },
                    ],
                    selectedIndex: barScaleMap.getA(this.config.scale.get()),
                    change: i => setScale(i)
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
                    scaleCtrl,
                ]);
                this.config.view.change(n => {
                    const index = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_ALL.indexOf(n);
                    viewItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                    viewCtrl.selectedIndex = index;
                    // hack scale
                    if (n === __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_CONTINUOUS_SCROLL) {
                        const viewer = this.viewers.filter((v, i) => i + 1 === this.book.current)[0];
                        setTimeout(() => {
                            viewer.scrollTo();
                        }, 0);
                    }
                });
                this.config.scale.change(n => {
                    const index = __WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].SCALE_ALL.indexOf(n);
                    scaleItems.filter((item, i) => i === index).forEach(item => item.checked = true);
                });
            }
        });
    }
    zoom(percent) {
        this.scale += percent;
        console.log(this.scale);
    }
    // @HostListener('window:keydown.arrowUp', ['$event'])
    // @HostListener('window:keydown.arrowLeft', ['$event'])
    prev() {
        if (this.book) {
            this.zone.run(() => {
                this.book.prev();
            });
        }
    }
    ;
    // @HostListener('window:keydown.arrowDown', ['$event'])
    // @HostListener('window:keydown.arrowRight', ['$event'])
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
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(154),
        styles: [__webpack_require__(145), __webpack_require__(147), __webpack_require__(146)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__lib_menu__["a" /* AppMenu */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__lib_menu__["a" /* AppMenu */]) === "function" && _c || Object])
], ReaderComponent);

var _a, _b, _c;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(16);
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

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const environment = {
    production: true
};
/* harmony export (immutable) */ __webpack_exports__["a"] = environment;

//# sourceMappingURL=environment.prod.js.map

/***/ })

},[180]);
//# sourceMappingURL=main.bundle.js.map