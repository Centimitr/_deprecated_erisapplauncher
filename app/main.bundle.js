webpackJsonp([1,4],{

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 28px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, ".layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #222;\n  border-radius: 10px;\n  color: #ccc;\n  opacity: 0.8;\n  padding: 10px 14px 8px 14px;\n  font-family: 'Monaco', sans-serif;\n  font-size: 14px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "section.pages {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  overflow-scrolling: touch;\n  scroll-behavior: smooth;\n}\n\nviewer {\n  width: 100%;\n}\n\n.pages.singlePage viewer {}\n\n.pages.continuousScroll viewer + viewer {\n  margin-top: 7vh;\n}\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(13)();
// imports


// module
exports.push([module.i, "section {\n  text-align: center;\n  position: relative;\n}\n\nsection.singlePage {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\nsection.singlePage.overflow {\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading {\n  z-index: -1;\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: white;\n  font-family: \"American Typewriter\", monospace;\n  opacity: 0.8;\n}\n\n.loading .words {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n}\n\n.loading .words .page {\n  font-size: 4vh;\n  margin-bottom: 1vh;\n}\n\n.loading .words .status {\n  font-size: 2.5vh;\n  opacity: 0.8;\n}\n\nimg {\n  box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.4);\n  /*transition: opacity 750ms ease-in-out;*/\n  /*opacity: 0.6;*/\n  /*animation: loaded 500ms;*/\n}\n\n/*@keyframes loaded {*/\n/*from {*/\n/*opacity: 0.8;*/\n/*filter: blur(2px);*/\n/*}*/\n/*to {*/\n/*filter: blur(0);*/\n/*opacity: 1;*/\n/*}*/\n/*}*/\n\nimg.visible {\n  /*opacity: 1;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\" [refresh]=\"refresh\" (ok)=\"onOk()\" (fail)=\"onFail($event)\"></reader>\n<header class=\"titlebar\"></header>\n"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<section class=\"pages\" #pages\n         [class.singlePage]=\"config.isSinglePage()\"\n         [class.continuousScroll]=\"config.isContinuousScroll()\">\n  <viewer #page *ngFor=\"let p of book?.meta?.Pages; let i = index;\"\n          [config]=\"config\"\n          [hidden]=\"config.isContinuousScroll()? false: (i+1!==book.current)\"\n          [height]=\"p | pageHeight:[pages,config.scale]\"\n          [id]=\"'page-'+(i+1)\"\n          [class]=\"i\"\n          [page]=\"i+1\"\n          [cache]=\"inCacheRange(i+1)\"\n          [path]=\"book.getPageFilePath(p.Id)\"\n          [meta]=\"p\"\n          (attention)=\"book.updateCurrent(i+1)\"\n          (click)=\"book.next(i+1, true)\">\n  </viewer>\n</section>\n<section class=\"layer\">\n  <section class=\"panel progress\" *ngIf=\"book?.total\">\n    {{book?.current}} / {{book?.total}}\n  </section>\n</section>\n"

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

module.exports = "<section class=\"viewer\" #viewer\n         [class.singlePage]=\"config.isSinglePage()\"\n         [class.continuousScroll]=\"config.isContinuousScroll()\"\n         [class.overflow]=\"config.isSinglePage()&&isOverflow(height, viewer)\"\n         [style.height.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\"\n         [style.minHeight.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\"\n         [style.maxHeight.px]=\"config.whenContinuousScroll(config.whenNotFullWidth(height))\">\n  <div class=\"loading\">\n    <div class=\"words\">\n      <div class=\"page\">Page {{page}}</div>\n      <!--<div class=\"status\">{{meta.Type}}: {{meta.Width}}-{{meta.Height}}</div>-->\n      <div class=\"status\">loading...</div>\n    </div>\n  </div>\n  <img #img [src]=\"path\"\n       [style.paddingTop.vh]=\"config.whenSinglePage(config.ui.view.singlePage.before)\"\n       [style.paddingBottom.vh]=\"config.whenSinglePage(config.ui.view.singlePage.after)\"\n       [style.maxHeight.px]=\"config.whenNotFullWidth(height)\"\n       [style.minWidth.%]=\"config.whenFullWidth(100)\"\n       [style.width.%]=\"config.whenFullWidth(100)\"\n       [class.visible]=\"show && inView\"\n       *ngIf=\"cache\"\n       (load)=\"onLoad($event, img)\">\n</section>\n"

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const qs = __webpack_require__(151);
const { ipcRenderer } = window['require']('electron');
class Args {
    constructor() {
        this._promise = new Promise(resolve => this._resolve = resolve);
    }
    check() {
        if (this._resolve && this.path && this.port) {
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
    // console.log('path:', message);
    args.path = message;
    args.check();
});
ipcRenderer.on('port', (event, message) => {
    // console.log('port:', message);
    args.port = message;
    args.check();
});
/* harmony default export */ __webpack_exports__["a"] = args;
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 49:
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
/* harmony export (immutable) */ __webpack_exports__["a"] = RustyLock;

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
/* harmony export (immutable) */ __webpack_exports__["c"] = Checker;

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
/* harmony export (immutable) */ __webpack_exports__["b"] = ABMap;

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
        this.scale = Config.SCALE_DEFAULT;
        // view
        this.view = Config.VIEW_SINGLE_PAGE;
    }
    setScale(s) {
        this.scale = s;
    }
    isFullWidth() {
        return this.scale === Config.SCALE_FULL_WIDTH;
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
    setView(v) {
        this.view = v;
    }
    isContinuousScroll() {
        return this.view === Config.VIEW_CONTINUOUS_SCROLL;
    }
    whenContinuousScroll(v) {
        if (this.isContinuousScroll()) {
            return v;
        }
    }
    isSinglePage() {
        return this.view === Config.VIEW_SINGLE_PAGE;
    }
    whenSinglePage(v) {
        if (this.isSinglePage()) {
            return v;
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Config;

Config.SCALE_MIN = 100;
Config.SCALE_DEFAULT = 150;
Config.SCALE_FULL_WIDTH = Infinity;
Config.SCALE_ALL = [Config.SCALE_MIN, Config.SCALE_DEFAULT, Config.SCALE_FULL_WIDTH];
Config.VIEW_CONTINUOUS_SCROLL = 0;
Config.VIEW_SINGLE_PAGE = 1;
Config.VIEW_ALL = [Config.VIEW_CONTINUOUS_SCROLL, Config.VIEW_SINGLE_PAGE];
//# sourceMappingURL=config.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__reader_meta__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__reader_config__ = __webpack_require__(50);
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
        this.elm = elm.nativeElement;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const checker = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["c" /* Checker */](50);
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
        });
    }
    getHeight(s) {
        const pages = this.elm.parentElement;
        const p = this.meta;
        const xScale = 100;
        const yScale = s + 1 - 1;
        const [w, h] = [xScale / 100 * pages.offsetWidth, yScale / 100 * pages.offsetHeight];
        const scale = Math.min(1, w / p.Width, h / p.Height);
        return p.Height * scale;
    }
    ngOnChanges(changes) {
    }
    onLoad(e, img) {
        this.show = true;
    }
    isOverflow(height, base) {
        if (base.offsetHeight) {
            return base.offsetHeight < height;
        }
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
    __metadata("design:type", Number)
], ViewerComponent.prototype, "height", void 0);
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
ViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'viewer',
        template: __webpack_require__(154),
        styles: [__webpack_require__(147)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _d || Object])
], ViewerComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 73;


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(89);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_args__ = __webpack_require__(48);
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
    constructor(zone) {
        this.zone = zone;
        this.refresh = 0;
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            webFrame.setVisualZoomLevelLimits(1, 1);
            yield __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].wait();
            const path = __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].path;
            console.warn('PATH:', path);
            this.path = path;
            // this.path = '/Users/shixiao/Pictures';
            // this.path = '/Users/shixiao/Downloads/a/top20/8';
        });
    }
    onOk() {
        getCurrentWindow().show();
    }
    onFail(e) {
        console.warn('FAIL:', e);
        this.path = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }).pop();
        this.refresh++;
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(152),
        styles: [__webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reader_reader_component__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__page_height_pipe__ = __webpack_require__(84);
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
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setTouchBar; });
/* unused harmony export TouchBarButton */
/* unused harmony export TouchBarColorPicker */
/* unused harmony export TouchBarGroup */
/* unused harmony export TouchBarLabel */
/* unused harmony export TouchBarPopover */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchBarSlider; });
/* unused harmony export TouchBarSpacer */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TouchBarSegmentedControl; });
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

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__lib_args__ = __webpack_require__(48);
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
    bind(elms) {
        this._viewers = elms;
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
                    viewer.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 0);
            }
            else {
                viewer.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
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

/***/ 86:
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

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__viewer_viewer_component__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(50);
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
let ReaderComponent = class ReaderComponent {
    constructor(zone) {
        this.zone = zone;
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
                    this.book.bind(this.viewers.map(viewer => viewer.elm));
                });
                // touchBar
                const getProgressStr = (current = this.book.current) => current + '/' + this.book.total;
                const lock = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* RustyLock */]();
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
                this.book.onPage((current) => {
                    lock.run(() => {
                        slider.value = current;
                        slider.label = getProgressStr(current);
                    });
                });
                const barScaleMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["b" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].SCALE_ALL);
                const barViewMap = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["b" /* ABMap */](__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].VIEW_ALL);
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* setTouchBar */])([
                    new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarSegmentedControl */]({
                        segments: [
                            { label: 'Scroll' },
                            { label: 'Single' },
                        ],
                        selectedIndex: barViewMap.getA(this.config.view),
                        change: selectedIndex => {
                            this.zone.run(() => {
                                this.config.setView(barViewMap.getB(selectedIndex));
                                console.log(this.config);
                            });
                        }
                    }),
                    // new TouchBarButton({label: 'Page 1', click: () => this.zone.run(() => this.book.go(1))}),
                    slider,
                    // new TouchBarScrubber({
                    //   items: (new Array(this.book.total)).fill(1).map((v, i) => '' + i).map(i => ({label: i})),
                    //   highlight: index => console.log('touchBar scrubber:', index),
                    //   mode: 'free',
                    //   selectedStyle: 'outline',
                    // }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarSegmentedControl */]({
                        segments: [
                            { label: 'H 100%' },
                            { label: 'Auto' },
                            { label: 'W 100%' },
                        ],
                        selectedIndex: barScaleMap.getA(this.config.scale),
                        change: selectedIndex => {
                            this.zone.run(() => {
                                this.config.setScale(barScaleMap.getB(selectedIndex));
                            });
                        }
                    }),
                ]);
            }
        });
    }
    zoom(percent) {
        this.scale += percent;
        console.log(this.scale);
    }
    // @HostListener('window:keydown.arrowUp', ['$event'])
    prev() {
        if (this.book) {
            this.zone.run(() => {
                this.book.prev();
            });
        }
    }
    ;
    // @HostListener('window:keydown.arrowDown', ['$event'])
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
    // private inCacheRange(page: number): boolean {
    //   const BACKWARD = 2;
    //   const FORWARD = 5;
    //   const current = this.book.current;
    //   if (current - BACKWARD <= page && page <= current + FORWARD) {
    //     return true;
    //   }
    // }
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:keydown.arrowLeft', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "prev", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:keydown.pageDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* HostListener */])('window:keydown.arrowRight', ['$event']),
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
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(153),
        styles: [__webpack_require__(144), __webpack_require__(146), __webpack_require__(145)],
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _b || Object])
], ReaderComponent);

var _a, _b;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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

/***/ 89:
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

},[179]);
//# sourceMappingURL=main.bundle.js.map