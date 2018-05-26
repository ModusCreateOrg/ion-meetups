import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { UserItem } from '../../models/user';
import { UserProvider } from '../../providers/user/user';

@IonicPage({
  name: 'user-detail-page'
})
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
  $user: Observable<UserItem>;
  constructor(
    private navParams: NavParams,
    private userService: UserProvider
  ) { }

  ionViewWillEnter() {
    const userEmail = this.navParams.get('userEmail');
    this.$user = this.userService.getUserByEmail(userEmail);
  }
}
