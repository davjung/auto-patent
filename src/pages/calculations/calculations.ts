import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Patent } from '../../models/patent';
import { PatentService } from '../../providers/patent-service';
import { HomePage } from '../home/home';
import { BasicPatentDetailPage } from '../basic-patent-detail/basic-patent-detail';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AngularFireList } from 'angularfire2/database';

// import { FirebaseListObservable } from 'angularfire2/database-deprecated';
// import firebase from 'firebase/app';
import moment from 'moment';



@Component({
  selector: 'page-calculations',
  templateUrl: 'calculations.html',
  providers: [PatentService]
})
export class CalculationsPage {
  public patentCalcForm: FormGroup;
  patent_info: Patent;

  pt: Patent = {
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
  }
  patentRef$: FirebaseListObservable<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    formBuilder: FormBuilder,
    private patentService: PatentService,
    private db: AngularFireDatabase,
    private patserv: PatentService
  ) {
    this.patentRef$ = this.db.list('/patentsList/');
    this.patent_info = navParams.get("patent");
    this.patentCalcForm = formBuilder.group({
      appnumber: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      patentnumber: new FormControl('', Validators.compose([
		      Validators.required,
          Validators.maxLength(7)
	    ])),
      patenttype: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      filing: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      grant: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      td: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      tdtype: [''],
      mainfees: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      reexam: [''],
      pta: [''],
      pte: [''],
      domben: new FormControl('', Validators.compose([
		      Validators.required,
	    ])),
      db_eefd: [''],
      td_ed: [''],
      td_pn: [''],
    });
  }

  calcPatent(pt: Patent) {
    pt.og_expiration_date = this.normalizeDate(this.findOG(pt));
    pt.adjustment_days = pt.pta_154 + pt.pte_156;
    pt.adjusted_patent_expiration = this.normalizeDate(this.findNew(pt));
    pt.not_in_database = false;

    this.patserv.addPatent(pt);
    this.navCtrl.push(BasicPatentDetailPage, {patent: pt})
  }

  findOG(p) {
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
    else if (p.patent_type == "Utility"){
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
      else{
        return b;
      }
    }
  }

  findNew(p) {
    var newDate = p.og_expiration_date;
    if (newDate.charAt(0) == "E" ) {
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
      console.log("Did not pay maintenance fees.")
      return 0;
    }
    else {
      return newDate;
    }
  }


  addYear(date, years) {
    var d = new Date(date);
    var e = moment(d);

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
  }
  addDay(date, days) {
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
  }

  normalizeDate(date) {
    console.log("Original date: " + date);
    var d  = new Date(date);
    var year = d.getFullYear().toString();
    var month = (Number(d.getMonth()) + 1).toString();
    var day = d.getDate().toString();

    if (month.length == 1) {month = "0" + month;}
    if (day.length == 1) {day = "0" + day;}


    var a = year + "-" + month + "-" + day;
    console.log("Normalized date: " + a);
    return a;
  }


}
