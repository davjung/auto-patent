import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PastPatentSearchesPage } from './past-patent-searches';

@NgModule({
  declarations: [
    PastPatentSearchesPage,
  ],
  imports: [
    IonicPageModule.forChild(PastPatentSearchesPage),
  ],
})
export class PastPatentSearchesPageModule {}
