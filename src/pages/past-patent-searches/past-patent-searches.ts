import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Patent } from '../../models/patent';
import { PatentService } from '../../providers/patent-service';
import { HomePage } from '../home/home';
import { PaymentPage } from '../payment/payment';

/**
 * Generated class for the PastPatentSearchesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-past-patent-searches',
  templateUrl: 'past-patent-searches.html',
  providers: [PatentService]

})
export class PastPatentSearchesPage {

  // patent_info: any;
  // patent_array: any;
  // constructor(public navCtrl: NavController, public navParams: NavParams, private patentService: PatentService) {
  //   this.load()
  // }

  // load(){
  //  this.patentService.fetchPastPatentList().then((patents) => {
  // 		this.patent_array = patents;
  //   });

  // }

}

