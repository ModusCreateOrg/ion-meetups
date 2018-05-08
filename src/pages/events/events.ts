import { Component } from '@angular/core';
import {
  ModalController,
  IonicPage,
  ActionSheetController,
  NavController,
  NavParams
} from 'ionic-angular';

import { Event } from '../../models';

import { EventsProvider } from '../../providers/events/events';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'events-page'
})
@Component({
  selector: 'page-events',
  templateUrl: 'events.html'
})
export class EventsPage {
  events: Array<Event> = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private actionSheetCtrl: ActionSheetController,
    private eventsService: EventsProvider
  ) {
    this.events = this.eventsService.events;
  }

  ionViewDidLoad() {}

  presentEventActions(event: Event) {
    const actionSheet = this.actionSheetCtrl.create({
      title: `${event.name}`,
      buttons: [
        {
          text: 'View',
          handler: () => this.viewEvent(event)
        },
        {
          text: 'Edit',
          handler: () => this.editEvent(event)
        },
        {
          text: 'Delete',
          role: 'destructive',
          handler: () => this.deleteEvent(event)
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });
    actionSheet.present();
  }

  createEvent() {
    const usersModal = this.modalCtrl.create('edit-event-page');
    usersModal.onDidDismiss((event: Event) => {
      if (!event) return;

      event.id = Date.now();
      this.eventsService.add(event);
      this.events = this.eventsService.events;
    });
    usersModal.present();
  }

  viewEvent(event) {
    this.navCtrl.push('event-detail-page', { event });
  }

  editEvent(event: Event) {
    const usersModal = this.modalCtrl.create('edit-event-page', {
      event: Object.assign({}, event)
    });
    usersModal.onDidDismiss((event: Event) => {
      if (!event) return;

      this.eventsService.update(event);
      this.events = this.eventsService.events;
    });
    usersModal.present();
  }

  deleteEvent(event: Event) {
    this.eventsService.remove(event);
    this.events = this.eventsService.events;
  }
}
