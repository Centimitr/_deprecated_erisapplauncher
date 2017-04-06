webpackJsonp([1,4],{

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 28px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n\n:host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\nsection.pages {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-flow: column nowrap;\n          flex-flow: column nowrap;\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n\nviewer {\n  width: 100%;\n}\n\n.layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.layer {\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #222;\n  border-radius: 10px;\n  color: #ccc;\n  opacity: 0.8;\n  padding: 10px 14px 8px 14px;\n  font-family: 'Monaco', sans-serif;\n  font-size: 14px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, "/*.viewer {*/\n/*position: absolute;*/\n/*top: 0;*/\n/*right: 0;*/\n/*bottom: 0;*/\n/*left: 0;*/\n/*overflow: auto;*/\n/*display: flex;*/\n/*align-items: center;*/\n/*justify-content: flex-start;*/\n/*}*/\n\n/*.viewer.x {*/\n/*flex-direction: row;*/\n/*}*/\n\n/*.viewer.y {*/\n/*flex-direction: column;*/\n/*}*/\n\n/*.viewer.tiny {*/\n/*justify-content: center;*/\n/*}*/\n\n/*.viewer.huge img {*/\n/*position: absolute;*/\n/*top: 0;*/\n/*left: 0;*/\n/*}*/\n\n/*.x img {*/\n/*max-width: 100vw;*/\n/*}*/\n\n/*.y img {*/\n/*max-height: 100vh;*/\n/*}*/\n\n/*img {*/\n/*box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.4);*/\n/*transition: 75ms ease-out;*/\n/*}*/\n\n/*::-webkit-scrollbar {*/\n/*width: 0;*/\n/*height: 0;*/\n/*}*/\n\n/*:host {*/\n/*overflow: scroll;*/\n/*}*/\n\nsection {\n  border: 4px solid blue;\n  /*background-color: rgba(0, 0, 0, 0.6);*/\n  text-align: center;\n}\n\n.loading {\n  /*height: 100vh;*/\n  height: 30vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  color: white;\n  font-family: \"American Typewriter\", monospace;\n  font-size: 2.5vh;\n  opacity: 0.8;\n}\n\nimg {\n  /*border: 4px solid red;*/\n  max-width: 100%;\n  /*max-height: 133vh;*/\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\"></reader>\n<header class=\"titlebar\"></header>\n"

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = "<!--<viewer-->\n<!--*ngFor=\"img in book.pages(_)\"-->\n<!--[img]=\"img\"-->\n<!--[scale]=\"scale\"-->\n<!--(click)=\"next()\">-->\n<!--</viewer>-->\n<section class=\"pages\">\n  <viewer *ngFor=\"let p of book?.meta?.Pages; let i = index;\"\n          [class]=\"i\"\n          [cache]=\"inCacheRange(recorder.stack, i)\"\n          [path]=\"book?.getPageFilePath(p.Id)\"\n          (click)=\"book?.next()\">\n  </viewer>\n  <!--[hidden]=\"i!==book?.current-1\"-->\n</section>\n<section class=\"layer\">\n  <section class=\"panel progress\">\n    {{book?.current}} / {{book?.total}}\n  </section>\n</section>\n"

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

module.exports = "<section class=\"viewer\"\n         [class]=\"classNames.get()\"\n>\n  <!--[class.y]=\"!isX(img)\"-->\n  <!--[class.tiny]=\"isTiny(img)\"-->\n  <!--[class.huge]=\"isHuge(img)\">-->\n  <!--<img *ngIf=\"img?.src\"-->\n  <!--[src]=\"img?.src | trustResourceUrl\"-->\n  <!--[style.maxWidth.%]=\"scale\"-->\n  <div class=\"loading\"\n       *ngIf=\"!show\">\n    <div>loading...</div>\n    {{show}}\n  </div>\n  <img #img [src]=\"path\"\n       *ngIf=\"cache\"\n       [hidden]=\"!show\"\n       (load)=\"onLoad($event, img)\">\n</section>\n<!--[style.maxHeight.vh]=\"100\"-->\n<!--<div style=\"color: white;\">{{img?.src}}</div>-->\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(71);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const qs = __webpack_require__(146);
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
    console.log('path:', message);
    args.path = message;
    args.check();
});
ipcRenderer.on('port', (event, message) => {
    console.log('port:', message);
    args.port = message;
    args.check();
});
/* harmony default export */ __webpack_exports__["a"] = args;
//# sourceMappingURL=args.js.map

/***/ }),

/***/ 70:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 70;


/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(86);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
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
    constructor() {
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            webFrame.setVisualZoomLevelLimits(1, 1);
            const win = getCurrentWindow();
            yield __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].wait();
            const path = __WEBPACK_IMPORTED_MODULE_1__lib_args__["a" /* default */].path;
            console.log('Open From FileAssociation:', path);
            if (path) {
                this.path = path;
            }
            // check is user folder
            // check path has images
            // const isUserImagesFolder = false;
            if (this.path) {
                this.path = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }).pop();
            }
            // this.path = '/Users/shixiao/Pictures';
            // this.path = '/Users/shixiao/Downloads/a/top20/8';
            win.show();
        });
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(147),
        styles: [__webpack_require__(140)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__reader_reader_component__ = __webpack_require__(83);
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
            __WEBPACK_IMPORTED_MODULE_6__trust_resource_url_pipe__["a" /* TrustResourceUrlPipe */]
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

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return setTouchBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return TouchBarButton; });
/* unused harmony export TouchBarColorPicker */
/* unused harmony export TouchBarGroup */
/* unused harmony export TouchBarLabel */
/* unused harmony export TouchBarPopover */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TouchBarSlider; });
/* unused harmony export TouchBarSpacer */
const electron = window['require']('electron');
const { getCurrentWindow, TouchBar } = electron.remote;
const { TouchBarButton, TouchBarColorPicker, TouchBarGroup, TouchBarLabel, TouchBarPopover, TouchBarSlider, TouchBarSpacer } = TouchBar;
const setTouchBar = function (args) {
    const win = getCurrentWindow();
    const touchBar = new TouchBar(args);
    win.setTouchBar(touchBar);
};

//# sourceMappingURL=touchbar.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class IntervalTimer {
    constructor() {
    }
    run(callback, delay = 100) {
        const now = Date.now();
        if ((now - this.lastRunTime) > delay) {
            this.lastRunTime = now;
            callback();
        }
        else {
            if (this.timer) {
                clearTimeout(this.timer);
            }
            this.timer = setTimeout(() => {
                this.lastRunTime = now;
                callback();
            }, delay - (now - this.lastRunTime));
        }
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = IntervalTimer;

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
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterLeaveRecorder;

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

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 82:
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
    constructor(path) {
        this._onPage = [];
        this.locator = path;
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
            const url = `http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book?locator=${this.locator}`;
            const data = yield fetch(url);
            this.meta = yield data.json();
            this.total = this.meta.Pages.length;
            this.current = 1;
        });
    }
    goto(pageOrOffset, relative = false) {
        const page = relative ? this.current + pageOrOffset : pageOrOffset;
        if (page > 0 && page <= this.total) {
            this.current = page;
            return true;
        }
    }
    prev() {
        return this.goto(-1, true);
    }
    next() {
        return this.goto(1, true);
    }
    getPageFilePath(id) {
        return `http://localhost:${__WEBPACK_IMPORTED_MODULE_0__lib_args__["a" /* default */].port}/book/page?locator=${this.locator}&page=${id}`;
    }
    onPage(callback) {
        this._onPage.push(callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_util__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(82);
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
        this.scale = 100;
    }
    // todo: multi-viewer: cache and better loading
    onRightClick() {
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    onready() {
        console.log('onready');
    }
    ngOnChanges(changes) {
        return __awaiter(this, void 0, void 0, function* () {
            if (changes.path && this.path) {
                this.book = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](this.path);
                yield this.book.init();
                //
                if (this.recorder) {
                    this.recorder.io.disconnect();
                }
                this.recorder = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["a" /* EnterLeaveRecorder */]((entries) => {
                    const top = +entries.map(e => this.recorder.toggle('' + (+e.target.className + 1))).pop();
                    this.zone.run(() => this.book.goto(top));
                }, { threshold: [0.5] });
                setTimeout(() => {
                    Array.prototype.slice.call(document.querySelectorAll('viewer')).forEach(node => this.recorder.io.observe(node));
                }, 0);
                // touchBar
                const getProgressStr = (current = this.book.current) => current + '/' + this.book.total;
                const getRealVal = (selectedVal) => this.book.total > 100 ? selectedVal : Math.max(1, Math.round(this.book.total * selectedVal / 100));
                const getSelectedVal = (current = this.book.current) => this.book.total > 100 ? current : Math.ceil(current / this.book.total * 100);
                const slideTimer = new __WEBPACK_IMPORTED_MODULE_2__lib_util__["b" /* IntervalTimer */]();
                const slider = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["a" /* TouchBarSlider */]({
                    label: getProgressStr(),
                    value: getSelectedVal(),
                    minValue: 1,
                    maxValue: Math.max(100, this.book.total),
                    change: (newValue) => {
                        const current = getRealVal(newValue);
                        slider.label = getProgressStr(current);
                        slideTimer.run(() => this.zone.run(() => this.book.current = current), 75);
                    }
                });
                this.book.onPage((current) => {
                    slider.value = getSelectedVal(current);
                    slider.label = getProgressStr(current);
                });
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* setTouchBar */])([
                    new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'Front', click: () => this.zone.run(() => this.book.goto(1)) }),
                    slider,
                    new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'ZoomIn', click: () => this.zoom(-10) }),
                    new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'ZoomOut', click: () => this.zoom(10) }),
                ]);
            }
        });
    }
    zoom(percent) {
        this.zone.run(() => {
            this.scale += percent;
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
    // private inCacheRange(page: number): boolean {
    //   const BACKWARD = 2;
    //   const FORWARD = 5;
    //   const current = this.book.current;
    //   if (current - BACKWARD <= page && page <= current + FORWARD) {
    //     return true;
    //   }
    // }
    inCacheRange(set, p) {
        const distance = ((set, p) => {
            let min = 1e10;
            set.forEach(s => {
                const d = s - p;
                if (Math.abs(d) < Math.abs(min)) {
                    min = d;
                }
            });
            return min;
        })(set, p);
        const BACKWARD = 2;
        const FORWARD = 5;
        return -1 * BACKWARD <= distance && distance <= FORWARD;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], ReaderComponent.prototype, "path", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:contextmenu', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "onRightClick", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.pageUp', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowUp', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowLeft', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "prev", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.pageDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowRight', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ReaderComponent.prototype, "next", null);
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(148),
        styles: [__webpack_require__(141)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _a || Object])
], ReaderComponent);

var _a;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(15);
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

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
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
let ViewerComponent = class ViewerComponent {
    constructor() {
        this.show = false;
        this.classNames = new ClassNames();
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ngOnChanges(changes) {
        if (changes.path || changes.scale) {
            // console.timeEnd('overall');
        }
    }
    // isX(img?: HTMLImageElement) {
    //   if (img) {
    //     const [w, h] = getWindowSize();
    //     return img.width / img.height > w / h;
    //   }
    // }
    //
    // isTiny(img?: ImageMeta) {
    //   if (img) {
    //     const [w, h] = getWindowSize();
    //     return this.scale < 100 || (img.width < w && img.height < h);
    //   }
    // }
    //
    // isHuge(img?: ImageMeta) {
    //   if (img) {
    //     const [w, h] = getWindowSize();
    //     const ratio = this.scale / 100;
    //     return img.width * ratio > w && img.height * ratio > h;
    //   }
    // }
    // max(img?: ImageMeta) {
    //   return this.isTiny(img) ? 100 : this.scale;
    // }
    //
    onLoad(e, img) {
        this.refresh(img);
    }
    refresh(img) {
        // console.table([{'width': img.width, 'height': img.height}]);
        this.classNames.add('y');
        this.show = true;
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", String)
], ViewerComponent.prototype, "path", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], ViewerComponent.prototype, "scale", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Boolean)
], ViewerComponent.prototype, "cache", void 0);
ViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'viewer',
        template: __webpack_require__(149),
        styles: [__webpack_require__(142)]
    }),
    __metadata("design:paramtypes", [])
], ViewerComponent);

//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ 86:
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

},[174]);
//# sourceMappingURL=main.bundle.js.map