import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BasicPatentDetailPage } from './basic-patent-detail';

@NgModule({
  declarations: [
    BasicPatentDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(BasicPatentDetailPage),
  ],
})
export class BasicPatentDetailPageModule {}
