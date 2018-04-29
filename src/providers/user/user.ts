import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User {
  name: { title: string; first: string; last: string };
  gender: string;
  email: string;
  selected?: boolean;
}

const RANDOM_USERS_SEED = 'modus';
const RANDOM_USRS_LIMIT = 50;

@Injectable()
export class UserProvider {
  _usersCache: Array<User>;

  constructor(public http: HttpClient) {}

  list(options = { limit: RANDOM_USRS_LIMIT }): Observable<Array<User>> {
    if (this._usersCache) return Observable.of(this._usersCache);

    return this.http
      .get(
        `https://randomuser.me/api/?results=${
          options.limit
        }&seed=${RANDOM_USERS_SEED}`
      )
      .map((resp: { info: any; results: Array<User> }) => resp.results)
      .map((users: Array<User>) => {
        this._usersCache = users;
        return users;
      });
  }
}
