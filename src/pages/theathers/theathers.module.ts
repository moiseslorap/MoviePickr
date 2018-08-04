import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TheathersPage } from './theathers';

@NgModule({
  declarations: [
    TheathersPage,
  ],
  imports: [
    IonicPageModule.forChild(TheathersPage),
  ],
})
export class TheathersPageModule {}
