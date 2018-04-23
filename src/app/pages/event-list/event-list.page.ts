import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { EventItem } from '../../models/event';
import { Observable } from 'rxjs/internal/Observable';
import { ModalController } from '@ionic/angular';
import { ManageEventComponent } from './manage-event/manage-event.component';
import { EventManageModes } from './event-manage-modes';

@Component({
    selector: 'app-event-list',
    templateUrl: './event-list.page.html',
    styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  $events: Observable<Array<EventItem>>;
  manageModes = EventManageModes;
  constructor(
    private eventService: EventService,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    this.$events = this.eventService.getEvents();
  }

  goToEventDetail(event: EventItem) {
    // this.router.navigate();
    console.log(event);
  }

  manageEvent(mode, event?: EventItem) {
    this.modalCtrl.create({
      component: ManageEventComponent,
      componentProps: {
        mode,
        event
      }
    })
    .then(modal => {
      modal.present();
      return modal.onDidDismiss();
    })
    .then(data => {
      console.log(data);
    });
  }

}
