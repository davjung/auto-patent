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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
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
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { PatentService } from '../../providers/patent-service';
import { BasicPatentDetailPage } from '../basic-patent-detail/basic-patent-detail';
import { HomePage } from '../home/home';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';
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
    }
    PatentDetailsPage.prototype.returnHome = function () {
        this.navCtrl.setRoot(HomePage);
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
        this.navCtrl.push(BasicPatentDetailPage, { patent: this.patent_info_copy_TD });
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
        this.pdfObj = pdfMake.createPdf(docDefinition);
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
    IonicPage(),
    Component({
        selector: 'page-patent-details',
        templateUrl: 'patent-details.html',
        providers: [PatentService]
    }),
    __metadata("design:paramtypes", [NavController, NavParams, PatentService, Platform, File, FileOpener])
], PatentDetailsPage);
export { PatentDetailsPage };
//# sourceMappingURL=patent-details.js.map