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
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder } from '@angular/forms';
import { PatentService } from '../../providers/patent-service';
import { BasicPatentDetailPage } from '../basic-patent-detail/basic-patent-detail';
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
                    _this.searchPatent();
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
                number = this.patentForm.value.patentnumber;
                if (number.includes('/')) {
                    this.getApplicationNumber(number);
                }
                else {
                    this.load(number);
                }
                return [2 /*return*/];
            });
        });
    };
    HomePage.prototype.searchPatent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.navCtrl.push(BasicPatentDetailPage, { patent: this.patent_info });
                return [2 /*return*/];
            });
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Component({
        selector: 'page-home',
        templateUrl: 'home.html',
        providers: [PatentService]
    }),
    __metadata("design:paramtypes", [NavController,
        AuthProvider,
        FormBuilder,
        PatentService,
        AlertController,
        Platform])
], HomePage);
export { HomePage };
//# sourceMappingURL=home.js.map