import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { User } from '../models/user';
import { HttpClient } from '@angular/common/http';

/*
  ACTION CONSTANTS
*/
export const LOAD_USERS = '[Users] Load';
export const LOAD_USERS_SUCCESS = '[Users] Load Complete';
export const SEARCH_USER_SUCCESS = '[Users] Search Complete';
export const SORT_USERS_BY_STARS = '[Users] Sorted By Stars';

/*
  ACTION CREATORS
*/
export class LoadUsers implements Action {
  readonly type = LOAD_USERS;
}

export class LoadUsersSuccess implements Action {
  readonly type = LOAD_USERS_SUCCESS;
  constructor(public payload: Array<User>) {}
}

export class SearchUserSuccess implements Action {
  readonly type = SEARCH_USER_SUCCESS;
  constructor(public payload: string) {}
}

export class SortByStars implements Action {
  readonly type = SORT_USERS_BY_STARS;
  constructor() {}
}

@Injectable()
export class IndexService {

  users = [
    {
      name: "Roberto Villarejo",
      stars: 5
    },
    {
      name: "Lluvia Gama",
      stars: 3
    }
  ];

  constructor(private store: Store<any>, private http: HttpClient) { }

  async fetchAllUsers() {
    this.store.dispatch(new LoadUsers());
    const query = {
      selector: {
        _id: { '$gt': 0}
      }
    };
    const body: any = await this.http.post('http://portales.infotec.com.mx:8080/stars/_find', query).toPromise();
    this.store.dispatch(new LoadUsersSuccess(body.docs));
  }

  async searchByUserName(username: string) {
    this.store.dispatch(new SearchUserSuccess(username));
  }

  sortByStars() {
    this.store.dispatch(new SortByStars());
  }

}
