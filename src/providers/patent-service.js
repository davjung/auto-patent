var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import * as firebase from "firebase";
import { Patent } from '../models/patent';
var PatentService = (function () {
    function PatentService() {
    }
    PatentService.prototype.getApplicationInfo = function (num) {
        return firebase.database().ref().child('patents2').orderByChild('Application Number').equalTo(num).once("value").then(function (snapshot) {
            var parentPatent;
            snapshot.forEach(function (itemSnapshot) {
                parentPatent = itemSnapshot.key;
            });
            return parentPatent;
        });
    };
    PatentService.prototype.getPatentInfo = function (num) {
        return firebase.database().ref('/patents2/' + num).once('value').then(function (snapshot) {
            if (snapshot.val() === null) {
                var p = new Patent();
                p.not_in_database = true;
                return p;
            }
            else {
                var p = new Patent();
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
        });
    };
    return PatentService;
}());
PatentService = __decorate([
    Injectable()
], PatentService);
export { PatentService };
;
//# sourceMappingURL=patent-service.js.map