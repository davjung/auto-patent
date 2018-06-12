import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CalculationsPage } from './calculations';

@NgModule({
  declarations: [
    CalculationsPage,
  ],
  imports: [
    IonicPageModule.forChild(CalculationsPage),
  ],
  exports: [
    CalculationsPage
  ]
})
export class CalculationsPageModule {}
