import { Component } from '@angular/core';
import { NavController, Platform, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patent } from '../../models/patent';
import { PatentService } from '../../providers/patent-service';
import { PatentDetailsPage } from '../patent-details/patent-details';
import { PaymentPage } from '../payment/payment';
import { BasicPatentDetailPage } from '../basic-patent-detail/basic-patent-detail';
import { PastPatentSearchesPage } from '../past-patent-searches/past-patent-searches';
import { CalculationsPage } from '../calculations/calculations';
import firebase from 'firebase/app';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [PatentService]
})
export class HomePage {
  public patentForm: FormGroup;
  patent_info: Patent;
  constructor(
    public navCtrl: NavController,
    public authProvider: AuthProvider,
    formBuilder: FormBuilder,
    private patentService: PatentService,
    private alertCtrl: AlertController,
    private platform: Platform
  ) {
      this.patentForm = formBuilder.group({
      patentnumber: ['']
    });
  }

  async logOut(): Promise<void> {
    await this.authProvider.logoutUser();
    this.navCtrl.setRoot('LoginPage');
  }

  async load(num) {
    this.patentService.getPatentInfo(num).then((property) => {
      this.patent_info = property;
      if (!this.patent_info.not_in_database){
        this.searchPatent();
      }
      else {
        this.gotoCalculations(num);
      }
    })
  }

  async getApplicationNumber(num) {
    this.patentService.getApplicationInfo(num).then((property) => {
      this.load(property)
    })

  }


  async getPatent(): Promise<void> {
      const number = await this.patentForm.value.patentnumber;
      if (number.includes('/')){
        this.getApplicationNumber(number)
      }
      else {
        this.load(number);
      }
  }

  // pastSearches(){
  //   this.navCtrl.push(PastPatentSearchesPage)
  // }

  async searchPatent(): Promise<void> {
    this.navCtrl.push(BasicPatentDetailPage, {patent: this.patent_info})
  }

  async gotoCalculations(num): Promise<void> {
    this.navCtrl.push(CalculationsPage, {patent: this.patent_info});
  }


}
