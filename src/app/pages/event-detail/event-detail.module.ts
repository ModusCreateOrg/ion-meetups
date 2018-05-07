import { NgModule } from '@angular/core';
import { EventDetailPage } from './event-detail.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([{ path: '', component: EventDetailPage, outlet: 'events' }])
  ],
  declarations: [EventDetailPage],
  entryComponents: [EventDetailPage]
})
export class EventDetailModule { }
