webpackJsonp([1,4],{

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".titlebar {\n  height: 28px;\n  -webkit-app-region: drag;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n\nreader {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ":host {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\nviewer, .layer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n\n.layer {\n  pointer-events: none;\n}\n\n.layer .panel {\n  position: absolute;\n  background-color: #222;\n  border-radius: 10px;\n  color: #ccc;\n  opacity: 0.8;\n  padding: 10px 14px 8px 14px;\n  font-family: 'Monaco', sans-serif;\n  font-size: 14px;\n}\n\n.progress {\n  display: inline-block;\n  top: 18px;\n  right: 18px;\n}\n\n.ctrl {\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-align: stretch;\n      -ms-flex-align: stretch;\n          align-items: stretch;\n}\n\n.ctrl .panel {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)();
// imports


// module
exports.push([module.i, ".viewer {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  overflow: auto;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n      -ms-flex-pack: start;\n          justify-content: flex-start;\n}\n\n.viewer.x {\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n}\n\n.viewer.y {\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n\n.viewer.tiny {\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n\n.viewer.huge img {\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n\n.x img {\n  max-width: 100vw;\n}\n\n.y img {\n  max-height: 100vh;\n}\n\nimg {\n  box-shadow: 0 0 32px 4px rgba(0, 0, 0, 0.4);\n  -webkit-transition: 75ms ease-out;\n  transition: 75ms ease-out;\n}\n\n::-webkit-scrollbar {\n  width: 0;\n  height: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 151:
/***/ (function(module, exports) {

module.exports = "<reader [path]=\"path\"></reader>\n<header class=\"titlebar\"></header>\n"

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

module.exports = "<viewer\n  *ngFor=\"img in book.pages(_)\"\n  [img]=\"img\"\n  [scale]=\"scale\"\n  (click)=\"next()\">\n</viewer>\n<section class=\"layer\">\n  <section class=\"panel progress\">\n    {{book?.curNum}} / {{book?.totalNum}}\n  </section>\n</section>\n"

/***/ }),

/***/ 153:
/***/ (function(module, exports) {

module.exports = "<section class=\"viewer\"\n         [class.x]=\"isX(img)\"\n         [class.y]=\"!isX(img)\"\n         [class.tiny]=\"isTiny(img)\"\n         [class.huge]=\"isHuge(img)\">\n  <img *ngIf=\"img?.src\"\n       [src]=\"img?.src | trustResourceUrl\"\n       [style.maxHeight.%]=\"scale\"\n       [style.maxWidth.%]=\"scale\"\n       (load)=\"onLoad($event)\"\n  >\n</section>\n<!--<div style=\"color: white;\">{{img?.src}}</div>-->\n"

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fs_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__driver__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
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




let BookService = class BookService {
    constructor(fs) {
        this.fs = fs;
    }
    create(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const driver = new __WEBPACK_IMPORTED_MODULE_2__driver__["a" /* FileDriver */](this.fs);
            const b = new __WEBPACK_IMPORTED_MODULE_3__book__["a" /* Book */](yield driver.resolvePath(path));
            yield b.init(driver);
            return b;
        });
    }
};
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__fs_service__["a" /* FileSystemService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fs_service__["a" /* FileSystemService */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const electron = window['require']('electron');
const { nativeImage } = electron;
class Book {
    constructor(path) {
        this.path = path;
        this._onPage = [];
    }
    init(driver) {
        return __awaiter(this, void 0, void 0, function* () {
            this.meta = yield driver.resolveMeta(this.path);
            const paths = yield driver.resolvePaths(this.path);
            this._cache = paths.map(p => new ImageCache(p, driver));
            this.totalNum = paths.length;
            this.curNum = 1;
        });
    }
    goto(pageOrOffset, relative = false, cache = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const page = pageOrOffset + (relative ? this._curNum : 0);
            return this.get(page, cache);
        });
    }
    get(page, cache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            if (page < 1) {
                throw new Error('first page already');
            }
            else if (page > this.totalNum) {
                throw new Error('last page already');
            }
            else {
                this.curNum = page;
                const img = yield this._cache[page - 1].get();
                // if (cache) {
                //   const BACKWARD_NUM = 1;
                //   const FORWARD_NUM = 3;
                //   const FORWARD_RESERVE_NUM = 10;
                //   for (let i = this.curNum; i < this.totalNum; i++) {
                //     const offset = i - (this.curNum - 1);
                //     if (offset <= FORWARD_NUM) {
                //       this._cache[i].load();
                //     } else if (offset >= FORWARD_RESERVE_NUM) {
                //       this._cache[i].clear();
                //     }
                //   }
                //   for (let i = this.curNum - 1; i >= 0; i--) {
                //     const offset = (this.curNum - 1) - i;
                //     if (offset > BACKWARD_NUM) {
                //       this._cache[i].clear();
                //     }
                //   }
                // }
                return img;
            }
        });
    }
    // all(): ImageMeta[] {
    // return this._cache.map(c => );
    // }
    get curNum() {
        return this._curNum;
    }
    set curNum(v) {
        const old = this._curNum;
        this._curNum = v;
        if (old !== v) {
            this._onPage.forEach(callback => callback(v, old));
        }
    }
    pages() {
    }
    onPage(callback) {
        this._onPage.push(callback);
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Book;

class ImageCache {
    constructor(path, driver) {
        this.path = path;
        this.driver = driver;
        this.src = '';
    }
    clear() {
        this.rejectFlag = true;
        // this.buf = null;
        window.URL.revokeObjectURL(this.src);
        this.src = '';
    }
    loaded() {
        return this.src.startsWith('blob');
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this.rejectFlag = false;
            if (!this.loaded()) {
                const buf = yield this.driver.resolveImage(this.path);
                if (this.rejectFlag) {
                    this.rejectFlag = false;
                }
                else {
                    // this.buf = buf;
                    this.src = window.URL.createObjectURL(new Blob([buf], { type: 'image/jpg' }));
                }
            }
            return this.src;
        });
    }
    get() {
        return __awaiter(this, void 0, void 0, function* () {
            // console.time('0');
            yield this.load();
            // console.timeEnd('0');
            // console.time('1');
            // console.timeEnd('1');
            // console.time('2');
            // const img = nativeImage.createFromBuffer(this.buf);
            // const size = img.getSize();
            // console.timeEnd('2');
            // return new ImageMeta(this.src, size.width, size.height);
            return new ImageMeta(this.src, 100, 100);
        });
    }
}
/* unused harmony export ImageCache */

class ImageMeta {
    constructor(src, width, height) {
        this.src = src;
        this.width = width;
        this.height = height;
        this.aspect = width / height;
    }
}
/* harmony export (immutable) */ __webpack_exports__["b"] = ImageMeta;

//# sourceMappingURL=book.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_fs__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileSystemService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


let FileSystemService = class FileSystemService extends __WEBPACK_IMPORTED_MODULE_1__lib_fs__["a" /* FileSystem */] {
    constructor() {
        super();
    }
};
FileSystemService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], FileSystemService);

//# sourceMappingURL=fs.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(90);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

const electron = window['require']('electron');
const { webFrame } = electron;
const { dialog, getCurrentWindow } = electron.remote;
const qs = __webpack_require__(150);
let AppComponent = class AppComponent {
    constructor() {
        webFrame.setVisualZoomLevelLimits(1, 1);
        const win = getCurrentWindow();
        const entry = JSON.parse(qs.parse(location.search.slice(1)).entry);
        const path = entry.path;
        // check is user folder
        // check path has images
        // const isUserImagesFolder = false;
        const isUserImagesFolder = true;
        if (isUserImagesFolder) {
            this.path = dialog.showOpenDialog({ properties: ['openFile', 'openDirectory'] }).pop();
        }
        // this.path = '/Users/shixiao/Pictures';
        win.show();
    }
};
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(151),
        styles: [__webpack_require__(144)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__viewer_viewer_component__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fs_service__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__trust_resource_url_pipe__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__reader_reader_component__ = __webpack_require__(87);
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
            __WEBPACK_IMPORTED_MODULE_9__reader_reader_component__["a" /* ReaderComponent */],
            __WEBPACK_IMPORTED_MODULE_8__trust_resource_url_pipe__["a" /* TrustResourceUrlPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__fs_service__["a" /* FileSystemService */],
            __WEBPACK_IMPORTED_MODULE_7__book_book_service__["a" /* BookService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class FileDriver {
    constructor(fs) {
        this.fs = fs;
    }
    resolvePath(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const getParentPath = function (path) {
                return path.split('/').slice(0, -1).join('/');
            };
            return (yield this.fs.isDir(path)) ? path : getParentPath(path);
        });
    }
    resolveMeta(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return {};
        });
    }
    resolvePaths(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.fs.getDirImagePaths(path);
        });
    }
    resolveImage(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.fs.readFile(path);
        });
    }
    ;
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileDriver;

//# sourceMappingURL=driver.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const _fs = window['require']('fs');
const path = __webpack_require__(147);
const _0777 = parseInt('0777', 8);
function mkdirP(p, opts, f, made) {
    let mode;
    let xfs = _fs;
    if (mode === undefined) {
        mode = _0777 & (~process.umask());
    }
    if (!made)
        made = null;
    let cb = f || function () {
    };
    p = path.resolve(p);
    xfs.mkdir(p, mode, function (er) {
        if (!er) {
            made = made || p;
            return cb(null, made);
        }
        switch (er.code) {
            case 'ENOENT':
                mkdirP(path.dirname(p), opts, function (er, made) {
                    if (er)
                        cb(er, made);
                    else
                        mkdirP(p, opts, cb, made);
                });
                break;
            default:
                xfs.stat(p, function (er2, stat) {
                    if (er2 || !stat.isDirectory())
                        cb(er, made);
                    else
                        cb(null, made);
                });
                break;
        }
    });
}
class Basic {
    constructor() {
        this.native = _fs;
    }
    readFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                _fs.readFile(path, (err, data) => {
                    if (err) {
                        reject(err);
                    }
                    resolve(data);
                });
            });
        });
    }
    stats(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                _fs.stat(path, function (err, stats) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(stats);
                    }
                });
            });
        });
    }
    readDir(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                _fs.readdir(path, function (err, files) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(files);
                    }
                });
            });
        });
    }
    mkdir(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                _fs.mkdir(path, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(res);
                    }
                });
            });
        });
    }
    mkdirp(path) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(function (resolve, reject) {
                mkdirP(path, function (err, res) {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(res);
                    }
                });
            });
        });
    }
    isFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = yield this.stats(path);
            return stats.isFile();
        });
    }
    isDir(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const stats = yield this.stats(path);
            return stats.isDirectory();
        });
    }
}
class FileSystem extends Basic {
    filterDirPaths(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDirs = yield Promise.all(paths.map(path => this.isDir(path)));
            const filtered = [];
            paths.forEach((path, i) => {
                if (isDirs[i]) {
                    filtered.push(path);
                }
            });
            return filtered;
        });
    }
    filterExtPaths(paths, exts, onlyName = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const isDirs = yield Promise.all(paths.map(path => this.isFile(path)));
            let filtered = [];
            paths.forEach((path, i) => {
                if (isDirs[i] && exts.indexOf(path.split('.').pop().toLowerCase()) >= 0) {
                    filtered.push(path);
                }
            });
            if (onlyName) {
                filtered = filtered.map(p => p.split('/').pop());
            }
            return filtered;
        });
    }
    filterImagePaths(paths, onlyName = false) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.filterExtPaths(paths, ['png', 'jpg', 'jpeg', 'gif', 'tiff'], onlyName);
        });
    }
    getDirImagePaths(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this.readDir(path);
            const paths = files.map(name => [path, name].join('/'));
            return yield this.filterImagePaths(paths);
        });
    }
    getDirImageNum(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const paths = yield this.getDirImagePaths(path);
            return paths.length;
        });
    }
    isDirHasImage(path) {
        return __awaiter(this, void 0, void 0, function* () {
            let num = yield this.getDirImageNum(path);
            return !!num;
        });
    }
    filterHasImageDirPaths(paths) {
        return __awaiter(this, void 0, void 0, function* () {
            const has = yield Promise.all(paths.map(path => this.isDirHasImage(path)));
            return paths.filter((p, i) => has[i]);
        });
    }
    getSubDirPaths(path) {
        return __awaiter(this, void 0, void 0, function* () {
            const files = yield this.readDir(path);
            const paths = files.map(name => [path, name].join('/'));
            return this.filterDirPaths(paths);
        });
    }
    getSubDirPathsr(paths, depth = 3) {
        return __awaiter(this, void 0, void 0, function* () {
            const flat = function (arr) {
                let flatted = [];
                arr.forEach(a => {
                    if (a instanceof Array) {
                        flatted = flatted.concat(a);
                    }
                });
                return flatted;
            };
            let dirs = [].concat(paths);
            for (let d = 0; d < depth; d++) {
                const subs = yield Promise.all(paths.map(path => this.getSubDirPaths(path)));
                paths = flat(subs);
                dirs = dirs.concat(paths);
            }
            return dirs;
        });
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = FileSystem;

const fs = new FileSystem();
/* unused harmony export fs */

//# sourceMappingURL=fs.js.map
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(27)))

/***/ }),

/***/ 85:
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

/***/ 86:
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
/* harmony export (immutable) */ __webpack_exports__["a"] = IntervalTimer;

//# sourceMappingURL=util.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_book_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_util__ = __webpack_require__(86);
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
    constructor(bookService, zone) {
        this.bookService = bookService;
        this.zone = zone;
        this.scale = 100;
    }
    // todo: multi-viewer: cache and better loading
    onRightClick() {
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
            this.book = yield this.bookService.create(this.path);
            yield this.goto(1);
            const getProgressStr = (curNum = this.book.curNum) => curNum + '/' + this.book.totalNum;
            const getRealVal = (selectedVal) => this.book.totalNum > 100 ? selectedVal : Math.max(1, Math.round(this.book.totalNum * selectedVal / 100));
            const getSelectedVal = (curNum = this.book.curNum) => this.book.totalNum > 100 ? curNum : Math.ceil(curNum / this.book.totalNum * 100);
            const slideTimer = new __WEBPACK_IMPORTED_MODULE_3__lib_util__["a" /* IntervalTimer */]();
            const slider = new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["a" /* TouchBarSlider */]({
                label: getProgressStr(),
                value: getSelectedVal(),
                minValue: 1,
                maxValue: Math.max(100, this.book.totalNum),
                change: (newValue) => {
                    const curNum = getRealVal(newValue);
                    slider.label = getProgressStr(curNum);
                    slideTimer.run(() => this.zone.run(() => this.goto(curNum, false, false)), 75);
                }
            });
            this.book.onPage((curNum) => {
                slider.value = getSelectedVal(curNum);
                slider.label = getProgressStr(curNum);
            });
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["b" /* setTouchBar */])([
                new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'Front', click: () => this.zone.run(() => this.goto(1)) }),
                slider,
                new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'ZoomIn', click: () => this.zoom(-10) }),
                new __WEBPACK_IMPORTED_MODULE_1__lib_touchbar__["c" /* TouchBarButton */]({ label: 'ZoomOut', click: () => this.zoom(10) }),
            ]);
        });
    }
    goto(page, relative = false, cache = true) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // console.time('overall');
                // console.time('goto');
                // console.time('image load');
                this.img = yield this.book.goto(page, relative, cache);
                // console.timeEnd('goto');
            }
            catch (e) {
            }
        });
    }
    zoom(percent) {
        this.zone.run(() => {
            this.scale += percent;
        });
    }
    prev() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.goto(-1, true);
        });
    }
    ;
    next() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.goto(1, true);
        });
    }
    ;
    onWheel(e) {
        return __awaiter(this, void 0, void 0, function* () {
            // if (e.deltaY > 0) {
            //   await this.next();
            // } else {
            //   await this.prev();
            // }
        });
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
    __metadata("design:returntype", Promise)
], ReaderComponent.prototype, "prev", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.pageDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowDown', ['$event']),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:keydown.arrowRight', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReaderComponent.prototype, "next", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* HostListener */])('window:mousewheel', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ReaderComponent.prototype, "onWheel", null);
ReaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'reader',
        template: __webpack_require__(152),
        styles: [__webpack_require__(145)],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__book_book_service__["a" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__book_book_service__["a" /* BookService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* NgZone */]) === "function" && _b || Object])
], ReaderComponent);

var _a, _b;
//# sourceMappingURL=reader.component.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
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

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_book__ = __webpack_require__(50);
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
    constructor() {
    }
    ngOnInit() {
        return __awaiter(this, void 0, void 0, function* () {
        });
    }
    ngOnChanges(changes) {
        if (changes.img || changes.scale) {
            // console.timeEnd('overall');
        }
    }
    isX(img) {
        if (img) {
            const [w, h] = getWindowSize();
            return img.aspect > w / h;
        }
    }
    isTiny(img) {
        if (img) {
            const [w, h] = getWindowSize();
            return this.scale < 100 || (img.width < w && img.height < h);
        }
    }
    isHuge(img) {
        if (img) {
            const [w, h] = getWindowSize();
            const ratio = this.scale / 100;
            return img.width * ratio > w && img.height * ratio > h;
        }
    }
    max(img) {
        return this.isTiny(img) ? 100 : this.scale;
    }
    onLoad(e) {
        // console.log(e);
        // console.timeEnd('image load');
    }
};
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_book__["b" /* ImageMeta */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__book_book__["b" /* ImageMeta */]) === "function" && _a || Object)
], ViewerComponent.prototype, "img", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["N" /* Input */])(),
    __metadata("design:type", Number)
], ViewerComponent.prototype, "scale", void 0);
ViewerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
        selector: 'viewer',
        template: __webpack_require__(153),
        styles: [__webpack_require__(146)]
    }),
    __metadata("design:paramtypes", [])
], ViewerComponent);

var _a;
//# sourceMappingURL=viewer.component.js.map

/***/ }),

/***/ 90:
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

},[178]);
//# sourceMappingURL=main.bundle.js.map