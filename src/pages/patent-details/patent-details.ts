import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { Patent } from '../../models/patent';
import { PatentService } from '../../providers/patent-service';
import { BasicPatentDetailPage } from '../basic-patent-detail/basic-patent-detail'
import { HomePage } from '../home/home';

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

import { File } from '@ionic-native/file';
import { FileOpener } from '@ionic-native/file-opener';


@IonicPage()
@Component({
  selector: 'page-patent-details',
  templateUrl: 'patent-details.html',
  providers: [PatentService]
})
export class PatentDetailsPage {

  patent_info: Patent;
  patent_info_display: Patent;
  patent_info_copy_TD: Patent;
  TDcheck = false;

  pdfObj = null;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private patentService: PatentService,
    private plt: Platform,
    private file: File,
    private fileOpener: FileOpener) {
    this.patent_info = navParams.get("patent")
    this.checkTDPatent();
    this.savePatentSearch();
  }

  returnHome(){
  	this.navCtrl.setRoot(HomePage);
  }

  async savePatentSearch(){
    this.patentService.savePatentInfo(this.patent_info.patent_number);
  }

  async checkTDPatent(): Promise<void>{
    let num = this.patent_info.terminal_disclaimers_pt;
    this.patentService.getPatentInfo(num).then((property) => {
      this.patent_info_copy_TD = property;
      if (this.patent_info_copy_TD.patent_number != undefined){
        this.TDcheck = true;
      }
      this.patent_info_display = this.patent_info;
    })
  }

  tdPagePush(){
    this.navCtrl.push(BasicPatentDetailPage, {patent: this.patent_info_copy_TD})
  }

  createPdf() {
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
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    this.downloadPdf()
  }

  downloadPdf() {
    if (this.plt.is('cordova')) {
      this.pdfObj.getBuffer((buffer) => {
        var blob = new Blob([buffer], { type: 'application/pdf' });

        // Save the PDF to the data Directory of our App
        this.file.writeFile(this.file.dataDirectory, 'myletter.pdf', blob, { replace: true }).then(fileEntry => {
          // Open the PDf with the correct OS tools
          this.fileOpener.open(this.file.dataDirectory + 'myletter.pdf', 'application/pdf');
        })
      });
    } else {
      // On a browser simply use download!
      this.pdfObj.download();
    }
  }

}
