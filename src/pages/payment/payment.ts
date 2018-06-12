import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Patent } from '../../models/patent';
import { PatentDetailsPage } from '../patent-details/patent-details';

@Component({
  selector: 'page-list',
  templateUrl: 'payment.html'
})
export class PaymentPage {
  icons: string[];
  items: Array<{title: string, note: string, icon: string}>;
  patent_info: Patent;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams) {
    this.icons = ['']
    //'wifi', 'beer', 'football', 'basketball', 'paper-plane',
    //'american-football', 'boat', 'bluetooth', 'build'];
    this.patent_info = navParams.get("patent")
    this.items = [];
    var titles = ["Visa-   *0000", "PayPal"]
    var dates = ["", "",""]
    for(let i = 0; i < titles.length; i++) {
      this.items.push({
        title: titles[i],
        note: dates[i],
        icon: this.icons[Math.floor(Math.random() * this.icons.length)]
      });
    }
  }

  itemTapped(event, item) {
  }

  confirm(){
  	this.navCtrl.push(PatentDetailsPage, {patent: this.patent_info})
  }
}
