import { Component } from '@angular/core';
import {
  ModalController,
  IonicPage,
  NavController,
  NavParams
} from 'ionic-angular';

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
    private modalCtrl: ModalController
  ) {}

  ionViewDidLoad() {}

  createEvent() {
    const usersModal = this.modalCtrl.create('users-page');
    usersModal.onDidDismiss(event => {
      if (!event) return;

      event.id = Date.now();
      this.events.push(event);
    });
    usersModal.present();
  }

  eventSelected(event) {
    const usersModal = this.modalCtrl.create('users-page', {
      event: Object.assign({}, event)
    });
    usersModal.onDidDismiss(event => {
      if (!event) return;

      const index = this.events.findIndex(ev => ev.id === event.id);
      this.events.splice(index, 1, event);
    });
    usersModal.present();
  }
}
