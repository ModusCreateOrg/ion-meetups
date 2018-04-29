import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserItem } from '../../models/user';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Component({
    selector: 'app-user-list',
    templateUrl: './user-list.page.html',
    styleUrls: ['./user-list.page.scss'],
})
export class UserListPage implements OnInit {
  $users: Observable<Array<UserItem>>;
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    // get the users from the backend server
    this.$users = this.userService.getUsers();
  }

  showUserDetail(user: UserItem) {
    this.router.navigateByUrl(`tabs/(users:user-detail/${user.email}`);
  }

}
