import { Component } from '@angular/core';
import {
  ModalController,
  IonicPage,
  ActionSheetController,
  NavController,
  NavParams,
  Platform
} from 'ionic-angular';

import { EventsProvider } from '../../providers/events/events';
import { Observable } from 'rxjs/Observable';
import { EventItem } from '../../models/event';
import { EventManageModes } from '../../constants/event-manage-modes';

@IonicPage({
  name: 'events-page'
})
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  $events: Observable<Array<EventItem>>;
  manageModes = EventManageModes;
  isAndroidDevice: boolean;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eventService: EventsProvider,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private platform: Platform
  ) { }

  ionViewDidLoad() {
    this.$events = this.eventService.getEvents();
    this.isAndroidDevice = this.platform.is('android');
  }

  goToEventDetail(event: EventItem) {
    console.log(event);
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Triggers upon clicking on an event or on the plus sign at the top
   * @param mode - sets the mode when the manage event modal is opened (Create/Edit)
   * @param event - null if the mode is create, or the event which is to be edited/updated
   */
  manageEvent(activeMode, event?: EventItem) {
    const manageEventModal = this.modalCtrl.create('manage-event-page', {event});

    manageEventModal.present();
    manageEventModal.onDidDismiss((event: EventItem) => {
      if (event) {
        this.eventService.addEvent(event);
      };
    });
  }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Shows action sheet for the event.
   * View Event, Edit Event, Delete Event
   */
  showEventActions(event: EventItem) {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Manage your event',
      buttons: [
        {
          text: 'View',
          icon: this.isAndroidDevice ? 'eye' : '',
          handler: () => {
            this.navCtrl.push('event-detail-page', {
              eventId: event.id
            })
          }
        },
        {
          text: 'Edit',
          icon: this.isAndroidDevice ? 'create' : '',
          handler: () => {
            this.manageEvent(this.manageModes.Edit, event);
          }
        },
        {
          text: 'Delete',
          icon: this.isAndroidDevice ? 'trash' : '',
          role: 'destructive',
          handler: () => {
            this.eventService.deleteEvent(event);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          icon: this.isAndroidDevice ? 'close' : '',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    actionSheet.present();
  }
}
