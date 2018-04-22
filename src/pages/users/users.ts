import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User, UserProvider } from '../../providers/user/user';
import { Observable } from 'rxjs/Observable';
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
  users: Observable<Array<User>>;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userService: UserProvider
  ) {}

  ngOnInit() {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
    this.users = this.userService.list();
  }
}
