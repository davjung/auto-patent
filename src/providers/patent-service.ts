import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from "firebase";
import { Patent } from '../models/patent';
import { AuthProvider } from './auth/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';

@Injectable()
export class PatentService {

  patentRef = firebase.database().ref().child('patents2');

  constructor(private authData: AuthProvider, private db: AngularFireDatabase) {}

  addPatent(pt: Patent) {
    this.patentRef.child(pt.patent_number).set(pt);
  }

  getApplicationInfo(num){
      return this.patentRef.orderByChild('Application Number').equalTo(num).once("value").then((snapshot) => {

         let parentPatent: any;
         snapshot.forEach(function(itemSnapshot){
             parentPatent = itemSnapshot.key
         })
         return parentPatent;
      });
   }


  getUserId() {
    return this.authData.getFirebaseId();
  }

  async savePatentInfo(num) {
    return firebase.database().ref('/userProfile/').child(this.getUserId()).child("Patent Numbers").child(num).set(true);
  }

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

  async getPatentInfo(num){
    return firebase.database().ref('/patents2/' + num).once('value').then((snapshot) => {
      if (snapshot.val() === null){
        let p = new Patent();
        p.not_in_database = true;
        return p;
      }
      else {
        let p = new Patent();
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

     })
  }



}
