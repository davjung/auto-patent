var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PatentDetailsPage } from '../patent-details/patent-details';
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
        this.navCtrl.push(PatentDetailsPage, { patent: this.patent_info });
    };
    return PaymentPage;
}());
PaymentPage = __decorate([
    Component({
        selector: 'page-list',
        templateUrl: 'payment.html'
    }),
    __metadata("design:paramtypes", [NavController, NavParams])
], PaymentPage);
export { PaymentPage };
//# sourceMappingURL=payment.js.map