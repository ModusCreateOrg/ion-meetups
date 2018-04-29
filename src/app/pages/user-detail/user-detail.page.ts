import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserItem } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.page.html',
    styleUrls: ['./user-detail.page.scss'],
})
export class UserDetailPage {
  $user: Observable<UserItem>;
  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) { }

  ionViewWillEnter() {
    const userEmail = this.route.snapshot.paramMap.get('userEmail');
    this.$user = this.userService.getUserByEmail(userEmail);
  }

}
