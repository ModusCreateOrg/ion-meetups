import { Component } from '@angular/core';
import {
  ModalController,
  IonicPage,
  AlertController,
  NavController,
  NavParams
} from 'ionic-angular';

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
  events = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private modalCtrl: ModalController,
    private alertCtrl: AlertController,
    private eventsService: EventsProvider
  ) {
    this.events = this.eventsService.events;
  }

  ionViewDidLoad() {}

  createEvent() {
    const usersModal = this.modalCtrl.create('edit-event-page');
    usersModal.onDidDismiss(event => {
      if (!event) return;

      event.id = Date.now();
      this.eventsService.add(event);
      this.events = this.eventsService.events;
    });
    usersModal.present();
  }

  eventSelected(event) {
    const usersModal = this.modalCtrl.create('edit-event-page', {
      event: Object.assign({}, event)
    });
    usersModal.onDidDismiss(event => {
      if (!event) return;

      this.eventsService.update(event);
      this.events = this.eventsService.events;
    });
    usersModal.present();
  }

  deleteEvent(event) {
    this.eventsService.remove(event);
    this.events = this.eventsService.events;
  }

  confirmDelete(event) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: `${event.name} will be permanently deleted.`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.deleteEvent(event);
          }
        }
      ]
    });
    confirm.present();
  }
}
