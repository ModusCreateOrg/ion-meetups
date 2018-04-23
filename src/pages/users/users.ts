import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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

  constructor(
    public navCtrl: NavController,
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

  userSelected(user: User) {
    this.navCtrl.push('user-detail-page', { user });
  }
}
