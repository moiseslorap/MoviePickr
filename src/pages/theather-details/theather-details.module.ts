import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheatherDetailsPage } from './theather-details';

@NgModule({
  declarations: [
    TheatherDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TheatherDetailsPage),
  ],
})
export class TheatherDetailsPageModule {}
