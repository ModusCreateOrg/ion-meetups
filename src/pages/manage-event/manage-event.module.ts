import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManageEventPage } from './manage-event';

@NgModule({
  declarations: [
    ManageEventPage,
  ],
  imports: [
    IonicPageModule.forChild(ManageEventPage),
  ],
})
export class ManageEventPageModule {}
