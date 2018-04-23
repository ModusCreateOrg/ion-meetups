import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UserItem } from '../models/user';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://randomuser.me/api/?results=50&seed=modus';
  constructor(private http: HttpClient) { }

  /**
   * @author Ahsan Ayaz
   * @desc Returns the users from the randomuser api
   */
  getUsers(): Observable<Array<UserItem>> {
    return this.http.get<{results: Array<UserItem>}>(this.apiUrl)
      .pipe(
        map(response => response.results)
      );
  }
}
