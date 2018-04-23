import { NgModule } from '@angular/core';
import { EventListPage } from './event-list.page';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: EventListPage, outlet: 'events' }])
  ],
  declarations: [EventListPage, ManageEventComponent],
  entryComponents: [EventListPage, ManageEventComponent]
})
export class EventListModule { }
