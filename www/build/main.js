webpackJsonp([15],{

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { database } from 'firebase';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab1Page = /** @class */ (function () {
    //navCtrl: any;
    //map: any;
    // GoogleAutocomplete: google.maps.places.AutocompleteService;
    // autocomplete: { input: string; };
    // autocompleteItems: any[];
    function Tab1Page(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        //creating new object
        this.laporItem = {};
        //   this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
        //   this.autocomplete = { input: '' };
        //   this.autocompleteItems = [];
        this.laporItemRef$ = this.database.list('daftarlapor');
    }
    Tab1Page.prototype.doLapor = function (laporItem) {
        this.laporItemRef$.push({
            Nama: this.laporItem.Nama,
            Phone: this.laporItem.Phone,
            Lokasi: this.laporItem.Lokasi,
            Keterangan: this.laporItem.Keterangan
        });
        //console.log(laporItem);
        this.laporItem = {};
        this.navCtrl.setRoot('Done1Page');
    };
    Tab1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab1',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tab1\tab1.html"*/'<!--\n  Generated template for the Tab1Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>SWMS</ion-title>\n      <ion-title>Lapor Sampah</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <!-- <ion-list [hidden]="autocompleteItems.length == 0">\n        <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item)">\n          {{ item.description }}\n        </ion-item>\n      </ion-list> -->\n      \n   \n     \n    <!-- <ion-toolbar color="primary">\n        <ion-searchbar [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n    </ion-toolbar>   \n    <div id=\'map\'></div> -->\n     \n    <ion-infinite-scroll threshold="100px" id="infinite-scroll"></ion-infinite-scroll>\n      <ion-item> \n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label color="primary" stacked> Nama</ion-label>\n        <ion-input type="text" placeholder="Masukan nama" [(ngModel)]="laporItem.Nama"></ion-input>\n      </ion-item>\n   \n      <ion-item>\n          <ion-icon name="call" item-left></ion-icon>\n          <ion-label color="primary" stacked> Nomor telepon</ion-label>\n          <ion-input type="text" placeholder="Masukan nomor telepon" [(ngModel)]="laporItem.Phone"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-icon name="pin" item-left></ion-icon>\n          <ion-label color="primary" stacked> Lokasi yang dilaporkan</ion-label>\n          <ion-input type="text" placeholder="Masukan lokasi yang dilaporkan" [(ngModel)]="laporItem.Lokasi"></ion-input>\n      </ion-item>\n\n          <ion-item>\n              <ion-icon name="information-circle" item-left></ion-icon>\n              <ion-label color="primary" stacked> Keterangan</ion-label>\n              <ion-input type="text" placeholder="Masukan keterangan"  [(ngModel)]="laporItem.Keterangan"></ion-input>\n            </ion-item>\n\n            <!-- <ion-item>\n                <ion-icon name="camera" item-left></ion-icon>\n                <ion-label color="primary" stacked> Foto (opsional)</ion-label>\n                <ion-input type="image" placeholder="Masukan gambar"></ion-input>\n              </ion-item> -->\n\n            \n            <ion-grid>\n              <ion-row>\n                <ion-col style="text-align: center"><button ion-button (click)="doLapor(laporItem)">Lapor</button></ion-col>\n              </ion-row>\n            </ion-grid>\n                \n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tab1\tab1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], Tab1Page);
    return Tab1Page;
}());

//# sourceMappingURL=tab1.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DaftarlaporPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
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
 * Generated class for the DaftarlaporPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DaftarlaporPage = /** @class */ (function () {
    function DaftarlaporPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.laporItemRef$ = this.database.list('daftarlapor');
        //this.laporItemRef$.subscribe(x => console.log(x));
    }
    DaftarlaporPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DaftarlaporPage');
    };
    DaftarlaporPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-daftarlapor',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\daftarlapor\daftarlapor.html"*/'<!--\n  Generated template for the DaftarlaporPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Daftar Laporan Sampah</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of laporItemRef$ | async">\n      <h2>Nama: {{item.Nama}}</h2>\n      <h2>Nomor Telepon: {{item.Phone}}</h2>\n      <h2>Lokasi yang dilaporkan: {{item.Lokasi}}</h2>\n      <h2>Keterangan: {{item.Keterangan}}</h2>\n    </ion-item>\n    <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\daftarlapor\daftarlapor.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], DaftarlaporPage);
    return DaftarlaporPage;
}());

//# sourceMappingURL=daftarlapor.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = /** @class */ (function () {
    function EditProfilePage(navCtrl, navParams, database) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.dataDiriItem = {};
        //capture the dataDiriId as a NavParameter
        var dataDiriId = this.navParams.get('dataDiriId');
        //logout NavParam
        console.log(dataDiriId);
        //set the scope of out Firebase object equal to our selected item
        this.dataDiriItemRef$ = this.database.object("dataDiriItem/" + dataDiriId);
        //subscribe to the object and assign the result to this.dataDiriItem
        this.dataDiriSubscription = this.dataDiriItemRef$.subscribe(function (dataDiriItem) { return _this.dataDiriItem = dataDiriItem; });
    }
    //Update our Firebase node with new data
    EditProfilePage.prototype.EditProfile = function (dataDiriItem) {
        this.dataDiriItemRef$.update("dataDiriItem");
        //back to the profile page
        this.navCtrl.pop();
    };
    EditProfilePage.prototype.ionViewWillLeave = function () {
        this.dataDiriSubscription.unsubscribe();
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-editprofil',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\editprofil\editprofil.html"*/'<!--\n  Generated template for the EditprofilPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-item>\n    <ion-label floating>Nama</ion-label>\n    <ion-input type="text" [(ngModel)]="dataDiriItem.Nama"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Nomor Telepon</ion-label>\n    <ion-input type="text" [(ngModel)]="dataDiriItem.Phone"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label floating>Alamat</ion-label>\n    <ion-input type="text" [(ngModel)]="dataDiriItem.Alamat"></ion-input>\n  </ion-item>\n\n  <button ion-button (click)="EditProfile(dataDiriItem)">Done</button>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\editprofil\editprofil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=editprofil.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_register__ = __webpack_require__(124);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { HomePage } from '../home/home';

//import { DaftarlaporPage } from '../daftarlapor/daftarlapor';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    SignupPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    SignupPage.prototype.doLogin = function () {
        var _this = this;
        if (this.uname.value == "petugas" && this.password.value == "petugas123") {
            this.fire.auth.createUserWithEmailAndPassword(this.uname.value + '@gmail.com', this.password.value)
                .then(function (data) {
                console.log('got data ', data);
                _this.alert('Petugas berhasil masuk!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
            });
        }
        else {
            this.fire.auth.createUserWithEmailAndPassword(this.uname.value, this.password.value)
                .then(function (data) {
                console.log('got data ', data);
                _this.alert('Berhasil terdaftar!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__register_register__["a" /* RegisterPage */]);
            })
                .catch(function (error) {
                console.log('got an error ', error);
                _this.alert(error.message);
            });
            console.log('Would register user with ', this.uname.value, this.password.value);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], SignupPage.prototype, "password", void 0);
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\signup\signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <ion-title>\n            SWMS <br/> Smart Waste Management System\n          </ion-title>\n      </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list></ion-list>\n <img src ="../assets/logoswms.png"/>\n  <ion-infinite-scroll threshold="100px" id="infinite-scroll"></ion-infinite-scroll>\n  <ion-card>\n<!-- <ion-item>\n  <ion-label color = "primary" position="stacked">Nama</ion-label>\n  <ion-input  placeholder="Masukan nama" ></ion-input>\n</ion-item>\n\n<ion-item>\n    <ion-label color = "primary" position="stacked">Email</ion-label>\n    <ion-input  placeholder="Masukan email" ></ion-input>\n  </ion-item>\n\n<ion-item>\n      <ion-label color = "primary" position="stacked">Nomor Telepon</ion-label>\n      <ion-input  placeholder="Masukan nomor telepon" ></ion-input>\n  </ion-item> -->\n\n  <ion-item>\n      <ion-label color = "primary" position="stacked">Email</ion-label>\n      <ion-input placeholder="Masukan email" type="text"  #username></ion-input>\n    </ion-item>\n\n<ion-item>\n  <ion-label color = "primary" position="stacked">Kata Sandi</ion-label>\n  <ion-input placeholder="Masukan kata sandi" type="password" #password></ion-input>\n</ion-item>\n<!-- \n<ion-item>\n    <ion-label color = "primary" position="stacked">Konfirmasi Kata Sandi</ion-label>\n    <ion-input  type="password"placeholder="Konfirmasi kata sandi" ></ion-input>\n  </ion-item> -->\n\n  <button block ion-button shape = round size= small expand="full" (click)="doLogin()">Masuk</button>\n</ion-card>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PengaturanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(64);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the PengaturanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PengaturanPage = /** @class */ (function () {
    function PengaturanPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PengaturanPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    PengaturanPage.prototype.ViewProfile = function () {
        // close the menu when clicking a link from the menu
        //this.menu.close(TabsPage);
        // navigate to the new page if it is not the current page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilePage */]);
    };
    PengaturanPage.prototype.doSignout = function () {
        // close the menu when clicking a link from the menu
        //this.menu.close(TabsPage);
        // navigate to the new page if it is not the current page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    PengaturanPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PengaturanPage');
    };
    PengaturanPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pengaturan',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\pengaturan\pengaturan.html"*/'<!--\n  Generated template for the PengaturanPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <ion-title>SWMS</ion-title>\n      <ion-title>Pengaturan</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  \n  <ion-content padding>\n    <ion-list>\n      <button ion-item (click)="ViewProfile()"> Akun Saya</button> \n      <button ion-item> Kebijakan Lisensi</button>   \n      <button ion-item> Bantuan</button>  \n      <button ion-item (click)="doSignout()"> Keluar</button> \n    </ion-list>\n  </ion-content>\n  '/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\pengaturan\pengaturan.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], PengaturanPage);
    return PengaturanPage;
}());

//# sourceMappingURL=pengaturan.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { database } from 'firebase';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        //creating new object
        this.dataDiriItem = {};
        this.dataDiriItemRef$ = this.database.list('profilee');
    }
    RegisterPage.prototype.doRegister = function (dataDiriItem) {
        this.dataDiriItemRef$.push({
            Nama: this.dataDiriItem.Nama,
            Phone: this.dataDiriItem.Phone,
            Alamat: this.dataDiriItem.Alamat
        });
        //console.log(dataDiri);
        this.dataDiriItem = {};
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\register\register.html"*/'<!--\n\n  Generated template for the RegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n    <ion-navbar>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>SWMS</ion-title>\n\n      <ion-title>Buat Profil</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <!-- <ion-list [hidden]="autocompleteItems.length == 0">\n\n        <ion-item *ngFor="let item of autocompleteItems" tappable (click)="selectSearchResult(item)">\n\n          {{ item.description }}\n\n        </ion-item>\n\n      </ion-list> -->\n\n      \n\n   \n\n     \n\n    <!-- <ion-toolbar color="primary">\n\n        <ion-searchbar [(ngModel)]="autocomplete.input" (ionInput)="updateSearchResults()" placeholder="Search for a place"></ion-searchbar>\n\n    </ion-toolbar>   \n\n    <div id=\'map\'></div> -->\n\n     \n\n    <ion-infinite-scroll threshold="100px" id="infinite-scroll"></ion-infinite-scroll>\n\n      <ion-item> \n\n        <ion-icon name="person" item-left></ion-icon>\n\n        <ion-label color="primary" stacked> Nama Lengkap</ion-label>\n\n        <ion-input type="text" placeholder="Nama Lengkap" [(ngModel)]="dataDiriItem.Nama"></ion-input>\n\n      </ion-item>\n\n   \n\n      <ion-item>\n\n          <ion-icon name="call" item-left></ion-icon>\n\n          <ion-label color="primary" stacked> Nomor Telepon</ion-label>\n\n          <ion-input type="text" placeholder="Nomor Telepon" [(ngModel)]="dataDiriItem.Phone"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n          <ion-icon name="address" item-left></ion-icon>\n\n          <ion-label color="primary" stacked> Alamat</ion-label>\n\n          <ion-input type="text" placeholder="Alamat" [(ngModel)]="dataDiriItem.Alamat"></ion-input>\n\n      </ion-item>\n\n\n\n            <!-- <ion-item>\n\n                <ion-icon name="camera" item-left></ion-icon>\n\n                <ion-label color="primary" stacked> Foto (opsional)</ion-label>\n\n                <ion-input type="image" placeholder="Masukan gambar"></ion-input>\n\n              </ion-item> -->\n\n\n\n            \n\n            <ion-grid>\n\n              <ion-row>\n\n                <ion-col style="text-align: center"><button ion-button (click)="doRegister(dataDiriItem)">Daftar</button></ion-col>\n\n              </ion-row>\n\n            </ion-grid>\n\n                \n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpecialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profil_profil__ = __webpack_require__(64);
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
 * Generated class for the SpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpecialPage = /** @class */ (function () {
    function SpecialPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SpecialPage.prototype.itemSelected = function (item) {
        console.log("Selected Item", item);
    };
    SpecialPage.prototype.ViewProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__profil_profil__["a" /* ProfilePage */]);
    };
    SpecialPage.prototype.doSignout = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    SpecialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SpecialPage');
    };
    SpecialPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-special',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\special\special.html"*/'<!--\n  Generated template for the SpecialPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SWMS</ion-title>\n    <ion-title>Pengaturan</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item (click)="ViewProfile()"> Akun Saya</button> \n    <button ion-item> Kebijakan Lisensi</button>   \n    <button ion-item> Bantuan</button>  \n    <button ion-item (click)="doSignout()"> Keluar</button> \n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\special\special.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], SpecialPage);
    return SpecialPage;
}());

//# sourceMappingURL=special.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tab2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
 * Generated class for the Tab2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var Tab2Page = /** @class */ (function () {
    function Tab2Page(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    Tab2Page.prototype.doPanggil = function () {
        this.navCtrl.setRoot('Done2Page');
    };
    Tab2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Tab2Page');
    };
    Tab2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tab2',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tab2\tab2.html"*/'<!--\n  Generated template for the Tab2Page page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>SWMS</ion-title>\n      <ion-title>Panggil Petugas</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-infinite-scroll threshold="100px" id="infinite-scroll"></ion-infinite-scroll>\n      <ion-item> \n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label color="primary" stacked> Nama</ion-label>\n        <ion-input type="name" placeholder="Masukan nama"></ion-input>\n      </ion-item>\n   \n      <ion-item>\n          <ion-icon name="call" item-left></ion-icon>\n          <ion-label color="primary" stacked> Nomor telepon</ion-label>\n          <ion-input type="call" placeholder="Masukan nomor telepon"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-icon name="pin" item-left></ion-icon>\n            <ion-label color="primary" stacked> Lokasi yang ingin dibersihkan</ion-label>\n            <ion-input type="locate" placeholder="Cari lokasi tujuan"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-icon name="information-circle" item-left></ion-icon>\n              <ion-label color="primary" stacked> Keterangan</ion-label>\n              <ion-input type="locate" placeholder="Masukan keterangan"></ion-input>\n            </ion-item>\n\n            \n            <ion-grid>\n              <ion-row>\n              <ion-col style="text-align: center"><button ion-button (click)="doPanggil()">Panggil Sekarang</button></ion-col>\n              </ion-row>\n            </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tab2\tab2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], Tab2Page);
    return Tab2Page;
}());

//# sourceMappingURL=tab2.js.map

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 132;

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/daftarlapor/daftarlapor.module": [
		334,
		14
	],
	"../pages/done1/done1.module": [
		335,
		2
	],
	"../pages/done2/done2.module": [
		336,
		1
	],
	"../pages/editprofil/editprofil.module": [
		337,
		13
	],
	"../pages/home/home.module": [
		338,
		12
	],
	"../pages/login/login.module": [
		339,
		11
	],
	"../pages/pengaturan/pengaturan.module": [
		340,
		10
	],
	"../pages/profil/profil.module": [
		341,
		9
	],
	"../pages/register/register.module": [
		342,
		8
	],
	"../pages/signup/signup.module": [
		343,
		7
	],
	"../pages/special/special.module": [
		344,
		6
	],
	"../pages/tab1/tab1.module": [
		345,
		5
	],
	"../pages/tab2/tab2.module": [
		346,
		4
	],
	"../pages/tab3/tab3.module": [
		347,
		0
	],
	"../pages/tabs/tabs.module": [
		348,
		3
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 173;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPage = /** @class */ (function () {
    function ItemDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
    }
    ItemDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-item-details',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\item-details\item-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button menuToggle *ngIf="!selectedItem">\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Item Details</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center *ngIf="selectedItem">\n    {{selectedItem.title}}\n    <ion-icon [name]="selectedItem.icon"></ion-icon>\n  </h3>\n  <h4 text-center *ngIf="selectedItem">\n    You navigated here from <b>{{selectedItem.title}}</b>\n  </h4>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\item-details\item-details.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ItemDetailsPage);
    return ItemDetailsPage;
}());

//# sourceMappingURL=item-details.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(250);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(329);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(330);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__firebase_credentials__ = __webpack_require__(331);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_hello_ionic_hello_ionic__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_item_details_item_details__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_list_list__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_tab1_tab1__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_tab2_tab2__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_special_special__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_daftarlapor_daftarlapor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_pengaturan_pengaturan__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_profil_profil__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_editprofil_editprofil__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import { Geolocation } from '@ionic-native/geolocation';











//import { Done1Page } from '../pages/done1/done1';
//import { Done2Page } from '../pages/done2/done2';






//import { Subscription } from 'rxjs/Subscription';
// const firebaseAuth = {
//   apiKey: "AIzaSyBs0IMZvD4iPdh7fiAocL3KlFRgBp1xcwM",
//   authDomain: "swms-1556079497175.firebaseapp.com",
//   databaseURL: "https://swms-1556079497175.firebaseio.com",
//   projectId: "swms-1556079497175",
//   storageBucket: "",
//   messagingSenderId: "810902154105"
// };
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tab2_tab2__["a" /* Tab2Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profil_profil__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editprofil_editprofil__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_special_special__["a" /* SpecialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                //Done1Page,
                //Done2Page,
                __WEBPACK_IMPORTED_MODULE_20__pages_daftarlapor_daftarlapor__["a" /* DaftarlaporPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pengaturan_pengaturan__["a" /* PengaturanPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/daftarlapor/daftarlapor.module#DaftarlaporPageModule', name: 'DaftarlaporPage', segment: 'daftarlapor', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/done1/done1.module#Done1PageModule', name: 'Done1Page', segment: 'done1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/done2/done2.module#Done2PageModule', name: 'Done2Page', segment: 'done2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/editprofil/editprofil.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'editprofil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pengaturan/pengaturan.module#PengaturanPageModule', name: 'PengaturanPage', segment: 'pengaturan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profil/profil.module#ProfilPageModule', name: 'ProfilePage', segment: 'profil', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/special/special.module#SpecialPageModule', name: 'SpecialPage', segment: 'special', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab1/tab1.module#Tab1PageModule', name: 'Tab1Page', segment: 'tab1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab2/tab2.module#Tab2PageModule', name: 'Tab2Page', segment: 'tab2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab3/tab3.module#Tab3PageModule', name: 'Tab3Page', segment: 'tab3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                //Subscription,
                __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_8__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_hello_ionic_hello_ionic__["a" /* HelloIonicPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_item_details_item_details__["a" /* ItemDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_profil_profil__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_editprofil_editprofil__["a" /* EditProfilePage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_tab1_tab1__["a" /* Tab1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_tab2_tab2__["a" /* Tab2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_special_special__["a" /* SpecialPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
                //Done1Page,
                //Done2Page,
                __WEBPACK_IMPORTED_MODULE_20__pages_daftarlapor_daftarlapor__["a" /* DaftarlaporPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_pengaturan_pengaturan__["a" /* PengaturanPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_login_login__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tab2_tab2__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_special_special__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

//import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
// import { ListPage } from '../pages/list/list';

//import { SignupPage } from '../pages/signup/signup';
//import { HomePage } from '../pages/home/home';
//import { Register } from '../pages/register/register';



//import { Done1Page } from '../pages/done1/done1';
//import { Done2Page } from '../pages/done2/done2';


var MyApp = /** @class */ (function () {
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_login_login__["a" /* LoginPage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Lapor Sampah', component: __WEBPACK_IMPORTED_MODULE_3__pages_tab1_tab1__["a" /* Tab1Page */] },
            { title: 'Panggil Petugas', component: __WEBPACK_IMPORTED_MODULE_4__pages_tab2_tab2__["a" /* Tab2Page */] },
            { title: 'Pengaturan', component: __WEBPACK_IMPORTED_MODULE_5__pages_special_special__["a" /* SpecialPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\app\app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n        <ion-navbar>\n\n            \n      <ion-title>Menu</ion-title>\n        </ion-navbar>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 331:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyBs0IMZvD4iPdh7fiAocL3KlFRgBp1xcwM",
    authDomain: "swms-1556079497175.firebaseapp.com",
    databaseURL: "https://swms-1556079497175.firebaseio.com",
    projectId: "swms-1556079497175",
    storageBucket: "",
    messagingSenderId: "810902154105"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelloIonicPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HelloIonicPage = /** @class */ (function () {
    function HelloIonicPage() {
    }
    HelloIonicPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-hello-ionic',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\hello-ionic\hello-ionic.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Hello Ionic</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n  <h3>Welcome to Smart Waste Management System app!</h3>\n\n  <p>\n    This starter project is our way of helping you get a functional app running in record time.\n  </p>\n  <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p>\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\hello-ionic\hello-ionic.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], HelloIonicPage);
    return HelloIonicPage;
}());

//# sourceMappingURL=hello-ionic.js.map

/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_item_details__ = __webpack_require__(228);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage.prototype.itemTapped = function (event, item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__item_details_item_details__["a" /* ItemDetailsPage */], {
            item: item
        });
    };
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My List</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

//# sourceMappingURL=data-diri.interface.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//import { DaftarlaporPage } from '../daftarlapor/daftarlapor';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    // public user : string;
    // public password : string;
    function LoginPage(alertCtrl, fire, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.alert = function (message) {
        this.alertCtrl.create({
            title: 'Info!',
            subTitle: message,
            buttons: ['OK']
        }).present();
    };
    LoginPage.prototype.doSignup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage.prototype.doLogin = function () {
        var _this = this;
        if (this.uname.value == "petugas" && this.password.value == "petugas123") {
            this.fire.auth.signInWithEmailAndPassword(this.uname.value + '@gmail.com', this.password.value)
                .then(function (data) {
                console.log('got data ', data);
                _this.alert('Petugas berhasil masuk!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
            });
        }
        else {
            this.fire.auth.signInWithEmailAndPassword(this.uname.value, this.password.value)
                .then(function (data) {
                console.log('got data ', data);
                _this.alert('Berhasil masuk!');
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
            })
                .catch(function (error) {
                console.log('got an error ', error);
                _this.alert(error.message);
            });
            console.log('Would register user with ', this.uname.value, this.password.value);
        }
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('username'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "uname", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\login\login.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      SWMS <br/> Smart Waste Management System\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <img src ="../assets/logoswms.png"/>\n  <ion-infinite-scroll threshold="100px" id="infinite-scroll"></ion-infinite-scroll>\n  <ion-card>\n  <ion-item>\n    <ion-label color = "primary" position="stacked">Nama Pengguna</ion-label>\n    <ion-input  placeholder="Masukan nama pengguna" #username ></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label color = "primary" position="stacked">Kata Sandi</ion-label>\n    <ion-input  type="password" placeholder="Masukan kata sandi" #password></ion-input>\n  </ion-item>\n\n  <!-- <ion-list>\n    <ion-item>\n      <ion-label color = "primary">Masuk Sebagai</ion-label>\n      <ion-select [(ngModel)]="signinas">\n        <ion-option value="pelapor">Pelapor</ion-option>\n        <ion-option value="petugas">Petugas</ion-option>\n      </ion-select>\n    </ion-item>\n  </ion-list> -->\n\n  <p text-right no-lines>\n  <a class="anchorColor" >Lupa Kata Sandi?</a>\n  </p>\n\n  <button block ion-button shape = round size= small expand="full" (click)="doLogin()">Masuk</button>\n\n  <p text-left no-lines>\n      <a class="anchorColor" (click)="doSignup()">Buat Akun</a>\n  </p>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], HomePage.prototype, "nav", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\home\home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>SWMS</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Selamat datang di aplikasi Smart Waste Management System!</h3>\n\n  <p>\n    Ayo segera laporkan sampah yang menumpuk agar segera dibersihkan petugas.\n  </p>\n  <!-- <p>\n    Follow along on the tutorial section of the Ionic docs!\n  </p> -->\n</ion-content>\n\n      \n\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__daftarlapor_daftarlapor__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pengaturan_pengaturan__ = __webpack_require__(123);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { LoginPage } from '../login/login';
//import { HomePage } from '../home/home';
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.daftarlaporPage = __WEBPACK_IMPORTED_MODULE_2__daftarlapor_daftarlapor__["a" /* DaftarlaporPage */];
        this.settingPage = __WEBPACK_IMPORTED_MODULE_3__pengaturan_pengaturan__["a" /* PengaturanPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tabs\tabs.html"*/'<ion-tabs>\n<ion-tab [root]="daftarlaporPage" tabTitle="Daftar Laporan Sampah" tabIcon ="list-box" ></ion-tab>\n<ion-tab [root]="settingPage" tabTitle="Pengaturan" tabIcon ="settings" ></ion-tab>\n\n</ion-tabs>'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\tabs\tabs.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_data_diri_data_diri_interface__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_data_diri_data_diri_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__models_data_diri_data_diri_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__editprofil_editprofil__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { Tab1Page } from '../pages/tab1/tab1';


/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = /** @class */ (function () {
    function ProfilePage(navCtrl, navParams, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.dataDiriItemRef$ = this.database.list("profilee");
        //this.dataDiriRef$.subscribe(x => console.log(x));
    }
    ProfilePage.prototype.GoToEditProfile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__editprofil_editprofil__["a" /* EditProfilePage */], { dataDiriId: __WEBPACK_IMPORTED_MODULE_3__models_data_diri_data_diri_interface__["dataDiriItem"].$key });
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profil',template:/*ion-inline-start:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\profil\profil.html"*/'<!--\n  Generated template for the DaftarlaporPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Profil Kamu</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <ion-item *ngFor="let item of dataDiriItemRef$ | async">\n      <h2>Nama: {{item.Nama}}</h2>\n      <h2>Nomor Telepon: {{item.Phone}}</h2>\n      <h2>Alamat: {{item.Alamat}}</h2>\n    </ion-item>\n  </ion-list>\n\n  <button block ion-button shape = "round" size= "medium" (click)="GoToEditProfile()">Edit Profil</button>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Ervan S\Documents\fix\RPL\src\pages\profil\profil.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object])
    ], ProfilePage);
    return ProfilePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=profil.js.map

/***/ })

},[229]);
//# sourceMappingURL=main.js.map