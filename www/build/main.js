webpackJsonp([5],{

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patent_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basic_patent_detail_basic_patent_detail__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake__ = __webpack_require__(829);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts__ = __webpack_require__(830);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__ = __webpack_require__(453);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







__WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default.a.vfs = __WEBPACK_IMPORTED_MODULE_6_pdfmake_build_vfs_fonts___default.a.pdfMake.vfs;


var PatentDetailsPage = (function () {
    function PatentDetailsPage(navCtrl, navParams, patentService, plt, file, fileOpener) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patentService = patentService;
        this.plt = plt;
        this.file = file;
        this.fileOpener = fileOpener;
        this.TDcheck = false;
        this.pdfObj = null;
        this.patent_info = navParams.get("patent");
        this.checkTDPatent();
        this.savePatentSearch();
    }
    PatentDetailsPage.prototype.returnHome = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__home_home__["a" /* HomePage */]);
    };
    PatentDetailsPage.prototype.savePatentSearch = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.patentService.savePatentInfo(this.patent_info.patent_number);
                return [2 /*return*/];
            });
        });
    };
    PatentDetailsPage.prototype.checkTDPatent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var num;
            return __generator(this, function (_a) {
                num = this.patent_info.terminal_disclaimers_pt;
                this.patentService.getPatentInfo(num).then(function (property) {
                    _this.patent_info_copy_TD = property;
                    if (_this.patent_info_copy_TD.patent_number != undefined) {
                        _this.TDcheck = true;
                    }
                    _this.patent_info_display = _this.patent_info;
                });
                return [2 /*return*/];
            });
        });
    };
    PatentDetailsPage.prototype.tdPagePush = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__basic_patent_detail_basic_patent_detail__["a" /* BasicPatentDetailPage */], { patent: this.patent_info_copy_TD });
    };
    PatentDetailsPage.prototype.createPdf = function () {
        var docDefinition = {
            content: [
                { text: 'Patent Application ' + this.patent_info_display.application_number, style: 'header' },
                { text: new Date().toTimeString(), alignment: 'right' },
                { text: 'Patent Number:', style: 'subheader' },
                { text: this.patent_info_display.patent_number },
                { text: 'Type of Patent:', style: 'subheader' },
                { text: this.patent_info_display.patent_type },
                { text: 'PCT Priority:', style: 'subheader' },
                { text: this.patent_info_display.pct_priority },
                { text: 'Filing Date of Patent:', style: 'subheader' },
                { text: this.patent_info_display.patent_filing },
                { text: 'Grant Date of Patent:', style: 'subheader' },
                { text: this.patent_info_display.patent_grant },
                { text: 'To date, maintenance fees timely paid:', style: 'subheader' },
                { text: this.patent_info_display.maintenance_fees },
                { text: 'Does Patent Claim any Domestic Benefit:', style: 'subheader' },
                { text: this.patent_info_display.domestic_benefit },
                { text: 'If any Domestic Benefit, Earlist Effective Filing Date:', style: 'story' },
                { text: this.patent_info_display.domestic_benefit_eff_date },
                { text: 'Terminal Disclaimer:', style: 'subheader' },
                { text: this.patent_info_display.terminal_disclaimers },
                { text: 'If any Terminal Disclaimers earliest TD-based expiration date:', style: 'story' },
                { text: this.patent_info_display.terminal_disclaimers_td },
                { text: 'If any Terminal Disclaimers, related Patent Number:', style: 'story' },
                { text: this.patent_info_display.terminal_disclaimers_pt },
                { text: 'How much 154 PTA is the patent entitled to (days):', style: 'subheader' },
                { text: this.patent_info_display.pta_154 },
                { text: 'How much 156 PTE is the patent entitled to (days):', style: 'subheader' },
                { text: this.patent_info_display.pte_156 },
                { text: 'Original Expiration Date:', style: 'subheader' },
                { text: this.patent_info_display.og_expiration_date },
                { text: 'Adjuted Patent Expiration Date:', style: 'subheader' },
                { text: this.patent_info_display.adjusted_patent_expiration },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                },
                subheader: {
                    fontSize: 12,
                    bold: true,
                    margin: [0, 15, 0, 0]
                },
                story: {
                    italic: true,
                    bold: true,
                    alignment: 'left',
                    width: '100%',
                }
            }
        };
        this.pdfObj = __WEBPACK_IMPORTED_MODULE_5_pdfmake_build_pdfmake___default.a.createPdf(docDefinition);
        this.downloadPdf();
    };
    PatentDetailsPage.prototype.downloadPdf = function () {
        var _this = this;
        if (this.plt.is('cordova')) {
            this.pdfObj.getBuffer(function (buffer) {
                var blob = new Blob([buffer], { type: 'application/pdf' });
                // Save the PDF to the data Directory of our App
                _this.file.writeFile(_this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(function (fileEntry) {
                    // Open the PDf with the correct OS tools
                    _this.fileOpener.open(_this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
                });
            });
        }
        else {
            // On a browser simply use download!
            this.pdfObj.download();
        }
    };
    return PatentDetailsPage;
}());
PatentDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-patent-details',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/patent-details/patent-details.html"*/'\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title> Detailed Patent Information </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n<ion-card>\n  <ion-card-content>\n  Disclaimer: Everything displayed on this site shall be regarded as general information and in no way should it be interpreted as legal advice. You should contact an attorney directly regarding your own situation. Note that an attorney-client relationship will only be established after we’ve established that there is no conflict of interest.\n  </ion-card-content>\n\n</ion-card>\n\n<div *ngIf="patent_info_display !== undefined">\n  <ion-card>\n    <ion-card-content>\n\n      <ion-row>\n        <ion-col col-6>\n           <strong> Patent Number: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info_display.patent_number}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Application Number </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.application_number}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n           <strong> Type of Patent: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info_display.patent_type}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> PCT Priority: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.pct_priority}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Filing Date of Patent: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.patent_filing}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Grant Date of Patent: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.patent_grant}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> To date, maintenance fees timely paid: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.maintenance_fees}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Does Patent Claim Any Domestic Benefit: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.domestic_benefit}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-1 col-5>\n          <strong> If any domestic benefit, earliest effective filing date: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.domestic_benefit_eff_date}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Terminal Disclaimers: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.terminal_disclaimers}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-1 col-5>\n          <strong> If any Terminal Disclaimers, earliest TD-based expiration date: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.terminal_disclaimers_td}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col offset-1 col-5>\n          <strong> If any Terminal Disclaimers, related patent number: </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info_display.terminal_disclaimers_pt}} <button style="color:blue;" *ngIf = "TDcheck === true" (click)="tdPagePush()"> <ion-icon name="search"> </ion-icon> </button>\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> How much 154 PTA is the patent entitled to (days): </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.pta_154}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> How much 156 PTE is the patent entitled to (days): </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.pte_156}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Original Expiration Date:  </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.og_expiration_date}}\n        </ion-col>\n      </ion-row>\n\n      <ion-row>\n        <ion-col col-6>\n          <strong> Adjusted Patent Expiration Date:  </strong>\n        </ion-col>\n        <ion-col col-2>\n          {{patent_info.adjusted_patent_expiration}}\n        </ion-col>\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card>\n\n  <ion-row>\n      <ion-col>\n        <button  ion-button block type="submit" (click)="returnHome()"> Return Home </button>\n      </ion-col>\n      <ion-col>\n        <button ion-button full (click)="createPdf()">Create PDF</button>\n      </ion-col>\n  </ion-row>\n\n\n\n\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/patent-details/patent-details.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_patent_service__["a" /* PatentService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_patent_service__["a" /* PatentService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_opener__["a" /* FileOpener */]])
], PatentDetailsPage);

//# sourceMappingURL=patent-details.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/basic-patent-detail/basic-patent-detail.module": [
		857,
		4
	],
	"../pages/login/login.module": [
		860,
		1
	],
	"../pages/past-patent-searches/past-patent-searches.module": [
		859,
		3
	],
	"../pages/patent-details/patent-details.module": [
		858,
		2
	],
	"../pages/reset-password/reset-password.module": [
		861,
		0
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
webpackAsyncContext.id = 223;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patent_details_patent_details__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentPage = (function () {
    function PaymentPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.icons = [''];
        //'wifi', 'beer', 'football', 'basketball', 'paper-plane',
        //'american-football', 'boat', 'bluetooth', 'build'];
        this.patent_info = navParams.get("patent");
        this.items = [];
        var titles = ["Visa-   *0000", "PayPal"];
        var dates = ["", "", ""];
        for (var i = 0; i < titles.length; i++) {
            this.items.push({
                title: titles[i],
                note: dates[i],
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    PaymentPage.prototype.itemTapped = function (event, item) {
    };
    PaymentPage.prototype.confirm = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__patent_details_patent_details__["a" /* PatentDetailsPage */], { patent: this.patent_info });
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-list',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/payment/payment.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Payment</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 style="padding-left:45px;">\n    Payment Methods\n  </h3>\n  <ion-list>\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n      <ion-icon name="{{item.icon}}" item-left></ion-icon>\n      {{item.title}}\n      <div class="item-note" item-right>\n        {{item.note}}\n      </div>\n    </button>\n  </ion-list>\n  <a style="padding-left:45px;">\n    Add a payment method\n  </a>\n\n  <ion-row>\n    <ion-col offset-4 col-4>\n     <button  ion-button block type="submit" (click)="confirm()"> Confirm </button>\n    </ion-col>\n</ion-row>\n\n    \n</ion-content>\n\n\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/payment/payment.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
], PaymentPage);

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculationsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_patent_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basic_patent_detail_basic_patent_detail__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__ = __webpack_require__(495);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






// import { FirebaseListObservable } from 'angularfire2/database-deprecated';
// import firebase from 'firebase/app';

var CalculationsPage = (function () {
    function CalculationsPage(navCtrl, navParams, formBuilder, patentService, db, patserv) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patentService = patentService;
        this.db = db;
        this.patserv = patserv;
        this.pt = {
            key: '',
            application_number: '',
            patent_type: '',
            patent_filing: '',
            patent_grant: '',
            maintenance_fees: '',
            pct_priority: '',
            domestic_benefit: '',
            domestic_benefit_eff_date: '',
            terminal_disclaimers: '',
            terminal_disclaimers_td: '',
            terminal_disclaimers_pt: '',
            pta_154: 0,
            pte_156: 0,
            og_expiration_date: '',
            adjustment_days: 0,
            adjusted_patent_expiration: '',
            patent_number: '',
            not_in_database: false,
        };
        this.patentRef$ = this.db.list('/patentsList/');
        this.patent_info = navParams.get("patent");
        this.patentCalcForm = formBuilder.group({
            appnumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            patentnumber: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].maxLength(7)
            ])),
            patenttype: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            filing: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            grant: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            td: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            tdtype: [''],
            mainfees: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            reexam: [''],
            pta: [''],
            pte: [''],
            domben: new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].compose([
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required,
            ])),
            db_eefd: [''],
            td_ed: [''],
            td_pn: [''],
        });
    }
    CalculationsPage.prototype.calcPatent = function (pt) {
        pt.og_expiration_date = this.normalizeDate(this.findOG(pt));
        pt.adjustment_days = pt.pta_154 + pt.pte_156;
        pt.adjusted_patent_expiration = this.normalizeDate(this.findNew(pt));
        pt.not_in_database = false;
        this.patserv.addPatent(pt);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__basic_patent_detail_basic_patent_detail__["a" /* BasicPatentDetailPage */], { patent: pt });
    };
    CalculationsPage.prototype.findOG = function (p) {
        var filing = p.patent_filing;
        if (p.domestic_benefit_eff_date) {
            if (p.domestic_benefit_eff_date < p.patent_filing) {
                filing = p.domestic_benefit_eff_date;
            }
        }
        if (p.patent_type == "Design") {
            console.log("Patent Type: Design");
            if (filing > "2015-05-13") {
                return this.addYear(p.patent_grant, 15);
            }
            else {
                return this.addYear(p.patent_grant, 14);
            }
        }
        else if (p.patent_type == "Utility") {
            console.log("Patent Type: Utility");
            if (p.patent_number < 5000000) {
                return "Expired - Utility Patents < 5,000,000 expired before Aug 10, 2010"; //expired before Aug 10, 2010
            }
        }
        else {
            console.log("Patent Type: Plant");
        }
        if (filing > "1995-06-08") {
            return this.addYear(filing, 20);
        }
        else if (filing < "1978-06-07") {
            return "Expired"; // expired
        }
        else {
            var a = this.addYear(p.patent_grant, 17);
            var b = this.addYear(filing, 20);
            if (a > b) {
                return a;
            }
            else {
                return b;
            }
        }
    };
    CalculationsPage.prototype.findNew = function (p) {
        var newDate = p.og_expiration_date;
        if (newDate.charAt(0) == "E") {
            return newDate;
        }
        if (p.terminal_disclaimers_td) {
            if (p.terminal_disclaimers_td < newDate) {
                console.log("Terminal disclaimer override. Old expiration date: " + newDate + ". New date: " + p.terminal_disclaimers_td);
                newDate = p.terminal_disclaimers_td;
            }
        }
        var ptapte = Number(p.pta_154) + Number(p.pte_156);
        console.log("PTA/PTE is: " + ptapte);
        console.log("Expiration date before PTA/PTE: " + newDate);
        newDate = this.addDay(newDate, ptapte);
        console.log("Expiration date after PTA/PTE: " + newDate);
        if (p.maintenance_fees == "No") {
            console.log("Did not pay maintenance fees.");
            return 0;
        }
        else {
            return newDate;
        }
    };
    CalculationsPage.prototype.addYear = function (date, years) {
        var d = new Date(date);
        var e = __WEBPACK_IMPORTED_MODULE_6_moment___default()(d);
        var year = Number(d.getFullYear()) + Number(years);
        var month = d.getMonth();
        var day = Number(d.getDate()) + 1;
        var c = new Date(year, month, day);
        console.log(e);
        console.log(year);
        console.log(month);
        console.log(day);
        console.log(c);
        return c;
    };
    CalculationsPage.prototype.addDay = function (date, days) {
        var d = new Date(date);
        var year = d.getFullYear();
        var month = d.getMonth();
        var day = Number(d.getDate()) + Number(days) + 1;
        console.log("d, days, yr, month, day = ");
        console.log(d);
        console.log("days to add by: " + days);
        console.log("orig days: " + d.getDate());
        console.log("new days: " + day);
        var c = new Date(year, month, day);
        return c;
    };
    CalculationsPage.prototype.normalizeDate = function (date) {
        console.log("Original date: " + date);
        var d = new Date(date);
        var year = d.getFullYear().toString();
        var month = (Number(d.getMonth()) + 1).toString();
        var day = d.getDate().toString();
        if (month.length == 1) {
            month = "0" + month;
        }
        if (day.length == 1) {
            day = "0" + day;
        }
        var a = year + "-" + month + "-" + day;
        console.log("Normalized date: " + a);
        return a;
    };
    return CalculationsPage;
}());
CalculationsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-calculations',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/calculations/calculations.html"*/'<!--\n  Generated template for the CalculationsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Calculations</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-header>\n      <strong>\n        Your patent was not found in our database. To manually calculate your expiration date, please fill out the form below.\n      </strong>\n    </ion-card-header>\n\n    <div class="positionInfo">\n      <ion-card-content>\n        <form [formGroup]="patentCalcForm" (submit)="calcPatent(pt)" novalidate>\n\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="appnumber" type="string" placeholder="Application Number" [(ngModel)]="pt.application_number">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="patentnumber" type="patentnumber" placeholder="Patent Number" [(ngModel)]="pt.patent_number">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-datetime formControlName="filing" placeholder="Filing Date" displayFormat="MMM DD, YYYY" min="1940-01-01" max="2018-12-31" [(ngModel)]="pt.patent_filing"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-datetime formControlName="grant" placeholder="Grant Date" displayFormat="MMM DD, YYYY" min="1940-01-01" max="2018-12-31" [(ngModel)]="pt.patent_grant"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              Type of Patent:\n            </ion-col>\n            <ion-col>\n              <ion-segment formControlName="patenttype" [(ngModel)]="pt.patent_type">\n                <ion-segment-button value="Utility">\n                  Utility\n                </ion-segment-button>\n                <ion-segment-button value="Plant">\n                  Plant\n                </ion-segment-button>\n                <ion-segment-button value="Design">\n                  Design\n                </ion-segment-button>\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n\n          <!-- only if utility patent -->\n          <!-- we want date of expiration, change to paid each fee -->\n          <ion-row>\n            <ion-col>\n              All maintenance fees paid within 6 months after deadline?\n            </ion-col>\n            <ion-col>\n              <ion-segment formControlName="mainfees" [(ngModel)]="pt.maintenance_fees">\n                <ion-segment-button value="Yes">\n                  Yes\n                </ion-segment-button>\n                <ion-segment-button value="No">\n                  No\n                </ion-segment-button>\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              Terminal Disclaimer?\n            </ion-col>\n            <ion-col>\n              <ion-segment formControlName="td" [(ngModel)]="pt.terminal_disclaimers">\n                <ion-segment-button value="Yes">\n                  Yes\n                </ion-segment-button>\n                <ion-segment-button value="No">\n                  No\n                </ion-segment-button>\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              If yes, earliest TD based expiration date? (Parent/assigned expiration date)\n            </ion-col>\n            <ion-col col-5>\n              <ion-item>\n                <ion-datetime formControlName="td_ed" placeholder="Date" displayFormat="MMM DD, YYYY" min="1940-01-01" max="2018-12-31" [(ngModel)]="pt.terminal_disclaimers_td"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              If yes, related parent patent number?\n            </ion-col>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="td_pn" type="patentnumber" placeholder="Parent patent number" [(ngModel)]="pt.terminal_disclaimers_pt"></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n\n          <!-- change so that you can choose one or both or neither -->\n\n          <!-- show only if filing date >= may 29 2000 -->\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="pta" type="number" placeholder="PTA days, if applicable" [(ngModel)]="pt.pta_154">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="pte" type="number" placeholder="PTE days, if applicable" [(ngModel)]="pt.pte_156">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              Does patent claim any domestic benefit?\n            </ion-col>\n            <ion-col>\n              <ion-segment formControlName="domben" [(ngModel)]="pt.domestic_benefit">\n                <ion-segment-button value="Yes">\n                  Yes\n                </ion-segment-button>\n                <ion-segment-button value="No">\n                  No\n                </ion-segment-button>\n              </ion-segment>\n            </ion-col>\n          </ion-row>\n\n          <ion-row>\n            <ion-col>\n              If yes, what is the earliest effective filing date?\n            </ion-col>\n            <ion-col col-5>\n              <ion-item>\n                <ion-datetime formControlName="db_eefd" placeholder="EEFD" displayFormat="MMM DD, YYYY" min="1940-01-01" max="2018-12-31" [(ngModel)]="pt.domestic_benefit_eff_date"></ion-datetime>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n\n\n\n          <button ion-button icon-only type="submit" class="submit" outline>\n            <ion-icon name="search"></ion-icon>\n          </button>\n        </form>\n\n        <!-- {{pt | json}} -->\n\n        <ion-label> <strong> Estimated Expiration Date: </strong>\n          {{patent_info.adjusted_patent_expiration}}\n        </ion-label>\n\n        <ion-label class="positionDetailedInfoText">\n           If you want to see more detailed info, please pay here:\n        </ion-label>\n\n        <!-- <button class="payNow" *ngIf="patent_info !== undefined && patent_info.not_in_database === false" ion-button block type="submit" (click)="seeMoreInfo()"> Pay Now </button> -->\n\n      </ion-card-content>\n    </div>\n\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/calculations/calculations.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_3__providers_patent_service__["a" /* PatentService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_patent_service__["a" /* PatentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_patent_service__["a" /* PatentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__providers_patent_service__["a" /* PatentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_patent_service__["a" /* PatentService */]) === "function" && _f || Object])
], CalculationsPage);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=calculations.js.map

/***/ }),

/***/ 502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PastPatentSearchesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patent_service__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



/**
 * Generated class for the PastPatentSearchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PastPatentSearchesPage = (function () {
    function PastPatentSearchesPage() {
    }
    return PastPatentSearchesPage;
}());
PastPatentSearchesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-past-patent-searches',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/past-patent-searches/past-patent-searches.html"*/'<!--\n  Generated template for the PastPatentSearchesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>View Your Past Searches </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/past-patent-searches/past-patent-searches.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_patent_service__["a" /* PatentService */]]
    })
], PastPatentSearchesPage);

//# sourceMappingURL=past-patent-searches.js.map

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(504);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(508);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(851);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_patent_details_patent_details__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_basic_patent_detail_basic_patent_detail__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_past_patent_searches_past_patent_searches__ = __webpack_require__(502);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_calculations_calculations__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_patent_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__firebase_credentials__ = __webpack_require__(852);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_database_deprecated__ = __webpack_require__(495);
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
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_patent_details_patent_details__["a" /* PatentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_basic_patent_detail_basic_patent_detail__["a" /* BasicPatentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_past_patent_searches_past_patent_searches__["a" /* PastPatentSearchesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_calculations_calculations__["a" /* CalculationsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/basic-patent-detail/basic-patent-detail.module#BasicPatentDetailPageModule', name: 'BasicPatentDetailPage', segment: 'basic-patent-detail', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/patent-details/patent-details.module#PatentDetailsPageModule', name: 'PatentDetailsPage', segment: 'patent-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/past-patent-searches/past-patent-searches.module#PastPatentSearchesPageModule', name: 'PastPatentSearchesPage', segment: 'past-patent-searches', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/reset-password/reset-password.module#ResetPasswordPageModule', name: 'ResetPasswordPage', segment: 'reset-password', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_17__firebase_credentials__["a" /* FIREBASE_CREDENTIALS */]),
            __WEBPACK_IMPORTED_MODULE_18_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_patent_details_patent_details__["a" /* PatentDetailsPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_basic_patent_detail_basic_patent_detail__["a" /* BasicPatentDetailPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_payment_payment__["a" /* PaymentPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_past_patent_searches_past_patent_searches__["a" /* PastPatentSearchesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_calculations_calculations__["a" /* CalculationsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_9__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_file_opener__["a" /* FileOpener */],
            // FirebaseProvider
            __WEBPACK_IMPORTED_MODULE_15__providers_patent_service__["a" /* PatentService */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Patent; });
var Patent = (function () {
    function Patent() {
    }
    return Patent;
}());

//# sourceMappingURL=patent.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PatentService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_patent__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__ = __webpack_require__(495);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var PatentService = (function () {
    function PatentService(authData, db) {
        this.authData = authData;
        this.db = db;
        this.patentRef = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref().child('patents2');
    }
    PatentService.prototype.addPatent = function (pt) {
        this.patentRef.child(pt.patent_number).set(pt);
    };
    PatentService.prototype.getApplicationInfo = function (num) {
        return this.patentRef.orderByChild('Application Number').equalTo(num).once("value").then(function (snapshot) {
            var parentPatent;
            snapshot.forEach(function (itemSnapshot) {
                parentPatent = itemSnapshot.key;
            });
            return parentPatent;
        });
    };
    PatentService.prototype.getUserId = function () {
        return this.authData.getFirebaseId();
    };
    PatentService.prototype.savePatentInfo = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/userProfile/').child(this.getUserId()).child("Patent Numbers").child(num).set(true)];
            });
        });
    };
    // fetchPastPatentList(){
    //   return firebase.database().ref('/userProfile/' + this.getUserId() + "/Patent Numbers").once('value').then((snapshot) => {
    //     if (snapshot.val() === null){
    //       console.log("hi")
    //     }
    //     else {
    //       let that = this;
    //       let patent_array: any;
    //       patent_array = Object.keys(snapshot.val())
    //       // console.log(patent_array[0])
    //       patent_array.forEach(function(patent){
    //         let p = new Patent();
    //         p = that.getPatentInfo(patent)
    //         console.log(p.application_number)
    //       })
    //       return patent_array;
    //     }
    //   })
    // }
    PatentService.prototype.getPatentInfo = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, __WEBPACK_IMPORTED_MODULE_2_firebase__["database"]().ref('/patents2/' + num).once('value').then(function (snapshot) {
                        if (snapshot.val() === null) {
                            var p = new __WEBPACK_IMPORTED_MODULE_3__models_patent__["a" /* Patent */]();
                            p.not_in_database = true;
                            return p;
                        }
                        else {
                            var p = new __WEBPACK_IMPORTED_MODULE_3__models_patent__["a" /* Patent */]();
                            var info = snapshot.val();
                            p.application_number = info["Application Number"];
                            p.patent_number = info["Patent Number"];
                            p.patent_type = info["Patent Type"];
                            p.patent_filing = info["Patent Filing Date"];
                            p.patent_grant = info["Patent Grant Date"];
                            p.maintenance_fees = info["Maintenance Fees"];
                            p.pct_priority = info["PCT Priority"];
                            p.domestic_benefit = info["Domestic Benefit"];
                            p.domestic_benefit_eff_date = info["Domestic Benefit Effective Date"];
                            p.terminal_disclaimers = info["Terminal Disclaimer"];
                            p.terminal_disclaimers_td = info["Terminal Disclaimer Earliest TD Date"];
                            p.terminal_disclaimers_pt = info["Terminal Disclaimer Related PN"];
                            p.pta_154 = info["PTA 154"];
                            p.pte_156 = info["PTE 156"];
                            p.og_expiration_date = info["Original Expiration Date"];
                            p.adjustment_days = info["Adjustment Days"];
                            p.adjusted_patent_expiration = info["Adjusted Expiration Date"];
                            p.not_in_database = false;
                            return p;
                        }
                    })];
            });
        });
    };
    return PatentService;
}());
PatentService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__auth_auth__["a" /* AuthProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__auth_auth__["a" /* AuthProvider */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_angularfire2_database_deprecated__["a" /* AngularFireDatabase */]) === "function" && _b || Object])
], PatentService);

var _a, _b;
//# sourceMappingURL=patent-service.js.map

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BasicPatentDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_patent_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__payment_payment__ = __webpack_require__(228);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the BasicPatentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BasicPatentDetailPage = (function () {
    function BasicPatentDetailPage(navCtrl, navParams, patentService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.patentService = patentService;
        this.patent_info = navParams.get("patent");
    }
    BasicPatentDetailPage.prototype.seeMoreInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__payment_payment__["a" /* PaymentPage */], { patent: this.patent_info });
                return [2 /*return*/];
            });
        });
    };
    return BasicPatentDetailPage;
}());
BasicPatentDetailPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-basic-patent-detail',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/basic-patent-detail/basic-patent-detail.html"*/'\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Basic Info </ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-label *ngIf="patent_info !== undefined && patent_info.not_in_database === true">\n      <ion-card-header>\n        <strong>  Patent isn\'t in database </strong>\n      </ion-card-header>\n    </ion-label>\n\n    <ion-card-header *ngIf="patent_info !== undefined && patent_info.not_in_database === false">\n      <strong>\n        Basic Info about your Patent:\n      </strong>\n    </ion-card-header>\n\n    <div class="positionInfo">\n      <ion-card-content>\n        <ion-label>\n          <strong> Application Number : </strong>\n            {{patent_info.application_number}}\n        </ion-label>\n\n        <ion-label> <strong> Patent Number: </strong> {{patent_info.patent_number}} </ion-label>\n\n        <ion-label> <strong> Estimated Expiration Date: </strong> {{patent_info.adjusted_patent_expiration}} </ion-label>\n\n        <ion-label class="positionDetailedInfoText">\n           If you want to see more detailed info, please pay here:\n        </ion-label>\n\n      <button class="payNow" ion-button block type="submit" (click)="seeMoreInfo()"> Pay Now </button>\n\n      </ion-card-content>\n    </div>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/basic-patent-detail/basic-patent-detail.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__providers_patent_service__["a" /* PatentService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_patent_service__["a" /* PatentService */]])
], BasicPatentDetailPage);

//# sourceMappingURL=basic-patent-detail.js.map

/***/ }),

/***/ 828:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 328,
	"./af.js": 328,
	"./ar": 329,
	"./ar-dz": 330,
	"./ar-dz.js": 330,
	"./ar-kw": 331,
	"./ar-kw.js": 331,
	"./ar-ly": 332,
	"./ar-ly.js": 332,
	"./ar-ma": 333,
	"./ar-ma.js": 333,
	"./ar-sa": 334,
	"./ar-sa.js": 334,
	"./ar-tn": 335,
	"./ar-tn.js": 335,
	"./ar.js": 329,
	"./az": 336,
	"./az.js": 336,
	"./be": 337,
	"./be.js": 337,
	"./bg": 338,
	"./bg.js": 338,
	"./bm": 339,
	"./bm.js": 339,
	"./bn": 340,
	"./bn.js": 340,
	"./bo": 341,
	"./bo.js": 341,
	"./br": 342,
	"./br.js": 342,
	"./bs": 343,
	"./bs.js": 343,
	"./ca": 344,
	"./ca.js": 344,
	"./cs": 345,
	"./cs.js": 345,
	"./cv": 346,
	"./cv.js": 346,
	"./cy": 347,
	"./cy.js": 347,
	"./da": 348,
	"./da.js": 348,
	"./de": 349,
	"./de-at": 350,
	"./de-at.js": 350,
	"./de-ch": 351,
	"./de-ch.js": 351,
	"./de.js": 349,
	"./dv": 352,
	"./dv.js": 352,
	"./el": 353,
	"./el.js": 353,
	"./en-au": 354,
	"./en-au.js": 354,
	"./en-ca": 355,
	"./en-ca.js": 355,
	"./en-gb": 356,
	"./en-gb.js": 356,
	"./en-ie": 357,
	"./en-ie.js": 357,
	"./en-il": 358,
	"./en-il.js": 358,
	"./en-nz": 359,
	"./en-nz.js": 359,
	"./eo": 360,
	"./eo.js": 360,
	"./es": 361,
	"./es-do": 362,
	"./es-do.js": 362,
	"./es-us": 363,
	"./es-us.js": 363,
	"./es.js": 361,
	"./et": 364,
	"./et.js": 364,
	"./eu": 365,
	"./eu.js": 365,
	"./fa": 366,
	"./fa.js": 366,
	"./fi": 367,
	"./fi.js": 367,
	"./fo": 368,
	"./fo.js": 368,
	"./fr": 369,
	"./fr-ca": 370,
	"./fr-ca.js": 370,
	"./fr-ch": 371,
	"./fr-ch.js": 371,
	"./fr.js": 369,
	"./fy": 372,
	"./fy.js": 372,
	"./gd": 373,
	"./gd.js": 373,
	"./gl": 374,
	"./gl.js": 374,
	"./gom-latn": 375,
	"./gom-latn.js": 375,
	"./gu": 376,
	"./gu.js": 376,
	"./he": 377,
	"./he.js": 377,
	"./hi": 378,
	"./hi.js": 378,
	"./hr": 379,
	"./hr.js": 379,
	"./hu": 380,
	"./hu.js": 380,
	"./hy-am": 381,
	"./hy-am.js": 381,
	"./id": 382,
	"./id.js": 382,
	"./is": 383,
	"./is.js": 383,
	"./it": 384,
	"./it.js": 384,
	"./ja": 385,
	"./ja.js": 385,
	"./jv": 386,
	"./jv.js": 386,
	"./ka": 387,
	"./ka.js": 387,
	"./kk": 388,
	"./kk.js": 388,
	"./km": 389,
	"./km.js": 389,
	"./kn": 390,
	"./kn.js": 390,
	"./ko": 391,
	"./ko.js": 391,
	"./ky": 392,
	"./ky.js": 392,
	"./lb": 393,
	"./lb.js": 393,
	"./lo": 394,
	"./lo.js": 394,
	"./lt": 395,
	"./lt.js": 395,
	"./lv": 396,
	"./lv.js": 396,
	"./me": 397,
	"./me.js": 397,
	"./mi": 398,
	"./mi.js": 398,
	"./mk": 399,
	"./mk.js": 399,
	"./ml": 400,
	"./ml.js": 400,
	"./mn": 401,
	"./mn.js": 401,
	"./mr": 402,
	"./mr.js": 402,
	"./ms": 403,
	"./ms-my": 404,
	"./ms-my.js": 404,
	"./ms.js": 403,
	"./mt": 405,
	"./mt.js": 405,
	"./my": 406,
	"./my.js": 406,
	"./nb": 407,
	"./nb.js": 407,
	"./ne": 408,
	"./ne.js": 408,
	"./nl": 409,
	"./nl-be": 410,
	"./nl-be.js": 410,
	"./nl.js": 409,
	"./nn": 411,
	"./nn.js": 411,
	"./pa-in": 412,
	"./pa-in.js": 412,
	"./pl": 413,
	"./pl.js": 413,
	"./pt": 414,
	"./pt-br": 415,
	"./pt-br.js": 415,
	"./pt.js": 414,
	"./ro": 416,
	"./ro.js": 416,
	"./ru": 417,
	"./ru.js": 417,
	"./sd": 418,
	"./sd.js": 418,
	"./se": 419,
	"./se.js": 419,
	"./si": 420,
	"./si.js": 420,
	"./sk": 421,
	"./sk.js": 421,
	"./sl": 422,
	"./sl.js": 422,
	"./sq": 423,
	"./sq.js": 423,
	"./sr": 424,
	"./sr-cyrl": 425,
	"./sr-cyrl.js": 425,
	"./sr.js": 424,
	"./ss": 426,
	"./ss.js": 426,
	"./sv": 427,
	"./sv.js": 427,
	"./sw": 428,
	"./sw.js": 428,
	"./ta": 429,
	"./ta.js": 429,
	"./te": 430,
	"./te.js": 430,
	"./tet": 431,
	"./tet.js": 431,
	"./tg": 432,
	"./tg.js": 432,
	"./th": 433,
	"./th.js": 433,
	"./tl-ph": 434,
	"./tl-ph.js": 434,
	"./tlh": 435,
	"./tlh.js": 435,
	"./tr": 436,
	"./tr.js": 436,
	"./tzl": 437,
	"./tzl.js": 437,
	"./tzm": 438,
	"./tzm-latn": 439,
	"./tzm-latn.js": 439,
	"./tzm.js": 438,
	"./ug-cn": 440,
	"./ug-cn.js": 440,
	"./uk": 441,
	"./uk.js": 441,
	"./ur": 442,
	"./ur.js": 442,
	"./uz": 443,
	"./uz-latn": 444,
	"./uz-latn.js": 444,
	"./uz.js": 443,
	"./vi": 445,
	"./vi.js": 445,
	"./x-pseudo": 446,
	"./x-pseudo.js": 446,
	"./yo": 447,
	"./yo.js": 447,
	"./zh-cn": 448,
	"./zh-cn.js": 448,
	"./zh-hk": 449,
	"./zh-hk.js": 449,
	"./zh-tw": 450,
	"./zh-tw.js": 450
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 828;

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(494);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(95);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp({
            apiKey: "AIzaSyAkymEgRb0qwVk8REHi3ypnoPmkD6q8eOM",
            authDomain: "determinator-29910.firebaseapp.com",
            databaseURL: "https://determinator-29910.firebaseio.com",
            projectId: "determinator-29910",
            storageBucket: "determinator-29910.appspot.com",
            messagingSenderId: "942290296826"
        });
        var unsubscribe = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (!user) {
                _this.rootPage = 'LoginPage';
                unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
                unsubscribe();
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    ;
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('content'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */])
], MyApp.prototype, "_NAV", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/app/app.html"*/'\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CREDENTIALS; });
var FIREBASE_CREDENTIALS = {
    apiKey: "AIzaSyAkymEgRb0qwVk8REHi3ypnoPmkD6q8eOM",
    authDomain: "determinator-29910.firebaseapp.com",
    databaseURL: "https://determinator-29910.firebaseio.com",
    projectId: "determinator-29910",
    storageBucket: "determinator-29910.appspot.com",
    messagingSenderId: "942290296826"
};
//# sourceMappingURL=firebase.credentials.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var AuthProvider = (function () {
    function AuthProvider() {
    }
    AuthProvider.prototype.loginUser = function (email, password) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signInWithEmailAndPassword(email, password);
    };
    AuthProvider.prototype.signupUser = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                                .auth()
                                .createUserWithEmailAndPassword(email, password)];
                    case 1:
                        newUser = _a.sent();
                        return [4 /*yield*/, __WEBPACK_IMPORTED_MODULE_1_firebase___default.a
                                .database()
                                .ref("/userProfile/" + newUser.uid + "/email")
                                .set(email)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, newUser];
                    case 3:
                        error_1 = _a.sent();
                        throw error_1;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    AuthProvider.prototype.resetPassword = function (email) {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().sendPasswordResetEmail(email);
    };
    AuthProvider.prototype.getFirebaseId = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().currentUser.uid;
    };
    AuthProvider.prototype.logoutUser = function () {
        return __WEBPACK_IMPORTED_MODULE_1_firebase___default.a.auth().signOut();
    };
    return AuthProvider;
}());
AuthProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], AuthProvider);

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_patent_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basic_patent_detail_basic_patent_detail__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__calculations_calculations__ = __webpack_require__(229);
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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var HomePage = (function () {
    function HomePage(navCtrl, authProvider, formBuilder, patentService, alertCtrl, platform) {
        this.navCtrl = navCtrl;
        this.authProvider = authProvider;
        this.patentService = patentService;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.patentForm = formBuilder.group({
            patentnumber: ['']
        });
    }
    HomePage.prototype.logOut = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.authProvider.logoutUser()];
                    case 1:
                        _a.sent();
                        this.navCtrl.setRoot('LoginPage');
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.load = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.patentService.getPatentInfo(num).then(function (property) {
                    _this.patent_info = property;
                    if (!_this.patent_info.not_in_database) {
                        _this.searchPatent();
                    }
                    else {
                        _this.gotoCalculations(num);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getApplicationNumber = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.patentService.getApplicationInfo(num).then(function (property) {
                    _this.load(property);
                });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.getPatent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var number;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.patentForm.value.patentnumber];
                    case 1:
                        number = _a.sent();
                        if (number.includes('/')) {
                            this.getApplicationNumber(number);
                        }
                        else {
                            this.load(number);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // pastSearches(){
    //   this.navCtrl.push(PastPatentSearchesPage)
    // }
    HomePage.prototype.searchPatent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__basic_patent_detail_basic_patent_detail__["a" /* BasicPatentDetailPage */], { patent: this.patent_info });
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.gotoCalculations = function (num) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__calculations_calculations__["a" /* CalculationsPage */], { patent: this.patent_info });
                return [2 /*return*/];
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/David/Desktop/AutoPatent/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>De<strong>TERMINATOR</strong> </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logOut()">\n        <ion-icon name="log-out"> </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card>\n      <ion-card-header text-center> <strong>\n        Welcome to DeTERMINATORs Patent Expiration Date Calculator!\n      </strong> </ion-card-header>\n    </ion-card>\n\n    <div class="positionCalculationCard">\n      <ion-card>\n        <ion-card-content>\n          To use our calculation software, please make sure your patent has been granted.\n        </ion-card-content>\n\n        <ion-list>\n          <ion-card-content> Choose the type of search: </ion-card-content>\n          <div class="positionCheckBox">\n            <ion-item>\n              <ion-label> Application Number </ion-label>\n              <ion-checkbox></ion-checkbox>\n            </ion-item>\n\n            <ion-item>\n              <ion-label> Patent Number </ion-label>\n              <ion-checkbox></ion-checkbox>\n            </ion-item>\n          </div>\n        </ion-list>\n\n        <form [formGroup]="patentForm" (submit)="getPatent()" novalidate>\n          <ion-row>\n            <ion-col col-5>\n              <ion-item>\n                <ion-input formControlName="patentnumber" type="patentnumber" placeholder="Input Patent/Application Number here">\n                </ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col>\n              <button ion-button icon-only type="submit" class="submit" outline>\n                <ion-icon name="search"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-row>\n        </form>\n\n        <ion-card-content>\n          If you would like to find out more about our calculation software, please check out our <a href="#" class="button button-outline button-positive align-landing-page" onclick="window.open(\'https://mariaweinmann2018.wixsite.com/determinator\', \'_system\', \'location=yes\');" > Home Page</a>\n        </ion-card-content>\n\n        <!-- <button ion-button type="submit" class="submit" outline (click)="pastSearches()">\n              Past Searches\n        </button> -->\n\n      </ion-card>\n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/David/Desktop/AutoPatent/src/pages/home/home.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__providers_patent_service__["a" /* PatentService */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_auth_auth__["a" /* AuthProvider */],
        __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_patent_service__["a" /* PatentService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[503]);
//# sourceMappingURL=main.js.map