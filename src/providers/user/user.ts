import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserItem } from '../../models/user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class UserProvider {
  apiUrl = 'https://randomuser.me/api/?results=50&seed=modus';
  users: Array<UserItem> = [];
  constructor(private http: HttpClient) { }

  /**
   * @author Ahsan Ayaz, Akash Agrawal
   * @desc Returns the users from the randomuser api
   */
  getUsers(): Observable<Array<UserItem>> {
    if (this.users.length) {
      return of(this.users);
    } else {
      return this.http.get<{results: Array<UserItem>}>(this.apiUrl)
      .pipe(
        map(response => {
          // caching the data for later usage
          this.users = response.results;
          return response.results;
        })
      );
    }
  }

  getUserByEmail(email: string): Observable<UserItem> {
    return this.getUsers()
      .pipe(
        map((users => {
          const matchedUsers = users.filter(user => (user.email === email));
          return matchedUsers[0];
        }))
      );
  }
}
