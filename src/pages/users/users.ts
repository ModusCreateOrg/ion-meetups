import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
import { UserItem } from '../../models/user';

@IonicPage({
  name: 'users-page'
})
@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage implements OnInit {
  $users: Observable<Array<UserItem>>;
  constructor(
    private userService: UserProvider,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    // get the users from the backend server
    this.$users = this.userService.getUsers();
  }

  showUserDetail(user: UserItem) {
    this.navCtrl.push('user-detail-page', {userEmail: user.email});
  }
}
