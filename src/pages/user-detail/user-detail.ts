import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../providers/user/user';

/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage({
  name: 'user-detail-page'
})
@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html'
})
export class UserDetailPage {
  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.user = this.navParams.get('user');

    if (!this.user) {
      throw new Error('No value present for parameter "user"');
    }
  }

  get name() {
    if (!this.user) return '';

    return `${this.user.name.first} ${this.user.name.last}`;
  }
}
