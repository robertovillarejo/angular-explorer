import { Injectable } from '@angular/core';
import { Store, Action } from '@ngrx/store';
import { User } from '../models/user';

/*
  ACTION CONSTANTS
*/
export const LOAD_USERS = '[Users] Load';
export const LOAD_USERS_SUCCESS = '[Users] Load Complete';

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

  constructor(private store: Store<any>) { }

  async fetchAllUsers() {
    this.store.dispatch(new LoadUsers());
    this.store.dispatch(new LoadUsersSuccess(this.users));
  }

}
