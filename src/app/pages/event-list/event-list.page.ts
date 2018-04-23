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
    console.log(event);
  }

  /**
   * @author Ahsan Ayaz
   * @desc Triggers upon clicking on an event or on the plus sign at the top
   * @param mode - sets the mode when the manage event modal is opened (Create/Edit)
   * @param event - null if the mode is create, or the event which is to be edited/updated
   */
  manageEvent(mode, event?: EventItem) {
    this.eventService.$activeEventSource.next(event);
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
