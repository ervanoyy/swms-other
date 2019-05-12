webpackJsonp([1],{

/***/ 336:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Done2PageModule", function() { return Done2PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done2__ = __webpack_require__(350);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Done2PageModule = /** @class */ (function () {
    function Done2PageModule() {
    }
    Done2PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__done2__["a" /* Done2Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__done2__["a" /* Done2Page */]),
            ],
        })
    ], Done2PageModule);
    return Done2PageModule;
}());

//# sourceMappingURL=done2.module.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Done2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the Done2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Done2Page = /** @class */ (function () {
    function Done2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Done2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Done2Page');
    };
    Done2Page.prototype.doBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Done2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done2',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\done2\done2.html"*/'<!--\n  Generated template for the Done2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        SWMS <br/> Smart Waste Management System\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="ion-text-center">\n              <ion-icon name="checkmark-circle-outline"></ion-icon>\n            <h3>Berhasil Memanggil Petugas</h3>\n            Silahkan tunggu sampai petugas datang ke tempat tujuan.\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <p text no-lines>\n        <ion-navbar>\n            <ion-buttons left (click)="doBack()">\n              <button navPop ion-button icon-only>\n                <ion-icon color="primary" name="arrow-back"></ion-icon>\n              </button>\n            </ion-buttons>\n        <a class="anchorColor" >Kembali ke Halaman Utama</a>\n        </ion-navbar>\n    </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\done2\done2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Done2Page);
    return Done2Page;
}());

//# sourceMappingURL=done2.js.map

/***/ })

});
//# sourceMappingURL=1.js.map