webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".centered-text {\n  text-align:center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div row row-centered>\n    <h1 class=\"centered-text\">\n      Phaser with Angular4 POC\n    </h1>\n  </div>\n  <p></p>\n  <div class=\"row align-items-center centered-text\">\n    <div class=\"col align-self-center\">\n      You have clicked on Albert {{clickCount}} times.\n    </div>\n    <div class=\"col align-self-center\">\n      <button [disabled]=\"!buttonEnabled\" type=\"button\" class=\"btn btn-primary\" (click)=\"doBarrel()\">Do a barrel roll!!</button>\n    </div>\n  </div>\n  <p></p>\n  <phaser (onAlbertFinishedRoll)=\"onAlbertFinishedRoll($event)\" (onClickedOnAlbert)=\"onClickedOnAlbert($event)\"></phaser>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__phaser_phaser_canvas_component__ = __webpack_require__("../../../../../src/app/phaser/phaser-canvas.component.ts");
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


var AppComponent = (function () {
    function AppComponent() {
        this.clickCount = 0;
        this.buttonEnabled = true;
    }
    AppComponent.prototype.onClickedOnAlbert = function (clicked) {
        this.clickCount++;
    };
    AppComponent.prototype.onAlbertFinishedRoll = function (finsihed) {
        this.buttonEnabled = true;
    };
    AppComponent.prototype.doBarrel = function () {
        this.buttonEnabled = false;
        this.phaserCanvasComponent.doBarrel();
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1__phaser_phaser_canvas_component__["a" /* PhaserCanvasComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__phaser_phaser_canvas_component__["a" /* PhaserCanvasComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__phaser_phaser_canvas_component__["a" /* PhaserCanvasComponent */]) === "function" && _a || Object)
], AppComponent.prototype, "phaserCanvasComponent", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__phaser_phaser_canvas_component__ = __webpack_require__("../../../../../src/app/phaser/phaser-canvas.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__phaser_phaser_canvas_component__["a" /* PhaserCanvasComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/phaser/phaser-canvas.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div id=\"phaserCanvas\"></div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/phaser/phaser-canvas.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PhaserCanvasComponent; });
/// <reference types="phaser-ce" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PhaserCanvasComponent = (function () {
    function PhaserCanvasComponent(elRef, location) {
        this.elRef = elRef;
        this.location = location;
        this.onClickedOnAlbert = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.onAlbertFinishedRoll = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* EventEmitter */]();
        this.sprites = {};
        this.location = location;
    }
    PhaserCanvasComponent.prototype.sizeChange = function (event) {
        this.scaleManager.setGameSize(this.getWidth(), 600);
        var einsteinSprite = this.sprites.einstein;
        einsteinSprite.x = this.game.world.centerX;
        einsteinSprite.y = this.game.world.centerY;
    };
    PhaserCanvasComponent.prototype.ngOnInit = function () {
        var canvasWidth = this.getWidth();
        this.game = new Phaser.Game(canvasWidth, 600, Phaser.AUTO, 'phaserCanvas', { preload: this.preload, create: this.create(this) });
        this.scaleManager = new Phaser.ScaleManager(this.game, canvasWidth, 600);
    };
    PhaserCanvasComponent.prototype.getWidth = function () {
        var canvasWidth = this.elRef.nativeElement.offsetParent.offsetWidth;
        return canvasWidth;
    };
    PhaserCanvasComponent.prototype.preload = function () {
        this.game.load.image('einstein', location.href + '/assets/pics/ra_einstein.png');
    };
    PhaserCanvasComponent.prototype.create = function (canvasComp) {
        var _this = this;
        return function () {
            var imageKey = 'einstein';
            var sprite = _this.game.add.sprite(_this.game.world.centerX, _this.game.world.centerY, imageKey);
            canvasComp.sprites[imageKey] = sprite;
            sprite.anchor.setTo(0.5, 0.5);
            sprite.inputEnabled = true;
            sprite.events.onInputDown.add(function () {
                canvasComp.onClickedOnAlbert.emit(null);
            }, _this);
        };
    };
    PhaserCanvasComponent.prototype.doBarrel = function () {
        var colors = ['#9400D3', '#4B0082', '#0000FF', '#00FF00', '#FFFF00', '#FF7F00', '#FF0000'];
        var einsteinSprite = this.sprites.einstein;
        var style = { font: '65px Arial', fill: '#ff0044', align: 'center' };
        var text = this.game.add.text(einsteinSprite.x + 60, einsteinSprite.y + 100, 'uaahhh', style);
        text.rotation = 0.3;
        text.anchor.setTo(0.3, 0.3);
        var onAlbertFinishedRoll = this.onAlbertFinishedRoll;
        var looper = setInterval(function () {
            einsteinSprite.angle += 10;
            text.angle += 10;
            text.addColor(colors[Math.floor(Math.random() * colors.length)], 0);
            if (einsteinSprite.angle === 0) {
                clearInterval(looper);
                text.destroy();
                onAlbertFinishedRoll.emit(null);
            }
        }, 100);
    };
    return PhaserCanvasComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], PhaserCanvasComponent.prototype, "onClickedOnAlbert", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", Object)
], PhaserCanvasComponent.prototype, "onAlbertFinishedRoll", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* HostListener */])('window:resize', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PhaserCanvasComponent.prototype, "sizeChange", null);
PhaserCanvasComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* Component */])({
        // tslint:disable-next-line:component-selector
        selector: 'phaser',
        template: __webpack_require__("../../../../../src/app/phaser/phaser-canvas.component.html"),
        providers: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_1__angular_common__["h" /* PathLocationStrategy */] }]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["f" /* Location */]) === "function" && _b || Object])
], PhaserCanvasComponent);

var _a, _b;
//# sourceMappingURL=phaser-canvas.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map