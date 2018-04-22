import { Component, OnInit } from '@angular/core';
import { IonicPage, ViewController, NavParams } from 'ionic-angular';
import { User, UserProvider } from '../../providers/user/user';

import 'rxjs/add/operator/first';
/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'users-page'
})
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {
  users: Array<User>;
  eventName: string;

  constructor(
    public viewCtrl: ViewController,
    public navParams: NavParams,
    private userService: UserProvider
  ) {
    this.loadUsers();
  }

  ngOnInit() {}

  ionViewDidLoad() {}

  loadUsers() {
    this.userService
      .list()
      .first()
      .subscribe(users => {
        this.users = users;
      });
  }

  toggleSelected(user) {
    user.selected = !user.selected;
  }

  cancel() {
    this.viewCtrl.dismiss();
  }

  createEvent() {
    const event = {
      name: this.eventName,
      attendees: this.users.filter(u => u.selected)
    };
    this.viewCtrl.dismiss(event);
  }
}
