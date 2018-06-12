import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PatentDetailsPage } from './patent-details';

@NgModule({
  declarations: [
    PatentDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(PatentDetailsPage),
  ],
})
export class PatentDetailsPageModule {}
