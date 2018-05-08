import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { User, Event } from '../../models';
import { getRandomInt } from '../../utils';

import 'rxjs/add/operator/first';

@IonicPage({
  name: 'edit-event-page'
})
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html'
})
export class EditEventPage implements OnInit {
  users: Array<User>;
  event: Event;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private userService: UserProvider
  ) {
    this.event = this.navParams.get('event') || {};
    this.loadUsers();
  }

  ngOnInit() {}

  ionViewDidLoad() {}

  loadUsers() {
    this.userService
      .list()
      .first()
      .subscribe(users => {
        /* If event already has attendees, mark them selected */
        if (this.event.attendees && this.event.attendees.length) {
          users = users.map(user => {
            user.selected =
              this.event.attendees.filter(u => u.email === user.email).length >
              0;
            return user;
          });
        }

        this.users = users;
      });
  }

  toggleSelected(user) {
    user.selected = !user.selected;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  saveEvent() {
    this.event.attendees = this.users.filter(u => u.selected);
    this.event.image =
      this.event.image ||
      `https://picsum.photos/355/250/?image=${getRandomInt(0, 1085)}`;
    this.viewCtrl.dismiss(this.event);
  }
}
