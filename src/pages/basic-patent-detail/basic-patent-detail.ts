import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patent } from '../../models/patent';
import { PatentService } from '../../providers/patent-service';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';
/**
 * Generated class for the BasicPatentDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-basic-patent-detail',
  templateUrl: 'basic-patent-detail.html',
  providers: [PatentService]
})
export class BasicPatentDetailPage {


  patent_info: Patent;
  constructor(public navCtrl: NavController, public navParams: NavParams, private patentService: PatentService) {
    this.patent_info = navParams.get("patent")
  }

  async seeMoreInfo(): Promise<void> {
    this.navCtrl.push(PaymentPage, {patent: this.patent_info})
  }



}
