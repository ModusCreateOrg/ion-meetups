import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { User, UserProvider } from '../../providers/user/user';

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
  event: { name; id; attendees };

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private userService: UserProvider
  ) {
    this.loadUsers();
    this.event = this.navParams.get('event') || {};
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
    this.viewCtrl.dismiss(this.event);
  }
}
