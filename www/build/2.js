webpackJsonp([2],{

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Done1PageModule", function() { return Done1PageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__done1__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var Done1PageModule = /** @class */ (function () {
    function Done1PageModule() {
    }
    Done1PageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__done1__["a" /* Done1Page */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__done1__["a" /* Done1Page */]),
            ],
        })
    ], Done1PageModule);
    return Done1PageModule;
}());

//# sourceMappingURL=done1.module.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Done1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab1_tab1__ = __webpack_require__(119);
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
 * Generated class for the Done1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Done1Page = /** @class */ (function () {
    function Done1Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Done1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Done1Page');
    };
    Done1Page.prototype.doBack = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    Done1Page.prototype.doBackk = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tab1_tab1__["a" /* Tab1Page */]);
    };
    Done1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-done1',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\done1\done1.html"*/'<!--\n  Generated template for the Done1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-toolbar>\n      <ion-title>\n        SWMS <br/> Smart Waste Management System\n      </ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <div class="ion-text-center">\n              <ion-icon name="checkmark-circle-outline"></ion-icon>\n            <h3>Data Berhasil Dilaporkan</h3>\n            Terimakasih telah melaporkan!\n          </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n    <p text no-lines>\n        <ion-navbar>\n            <ion-buttons left (click)="doBack()">\n              <button navPop ion-button icon-only>\n                <ion-icon color="primary" name="arrow-back"></ion-icon>\n              </button>\n            </ion-buttons>\n        <a class="anchorColor" >Kembali ke Halaman Utama</a>\n        </ion-navbar>\n    \n        <ion-navbar>\n            <ion-buttons left (click)="doBackk()">\n              <button navPop ion-button icon-only>\n                <ion-icon color="primary" name="arrow-back"></ion-icon>\n              </button>\n            </ion-buttons>\n        <a class="anchorColor">Lapor Sampah Baru</a>\n        </ion-navbar>\n    </p>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\done1\done1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Done1Page);
    return Done1Page;
}());

//# sourceMappingURL=done1.js.map

/***/ })

});
//# sourceMappingURL=2.js.map