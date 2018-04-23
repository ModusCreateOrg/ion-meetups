import { NgModule } from '@angular/core';
import { EventDetailPage } from './event-detail.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    RouterModule.forChild([{ path: '', component: EventDetailPage, outlet: 'events' }])
  ],
  declarations: [EventDetailPage],
  entryComponents: [EventDetailPage]
})
export class EventDetailModule { }
