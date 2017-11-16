import { User } from './../models/user';
import * as userActions from '../actions/index.service';

/*
    STATE INTERFACE
*/
export interface UsersList {
    users: Array<User>;
}

export interface UserDetail {
    selectedUser: User;
}

/*
    STATE REDUCERS
*/
export const DEFAULT_STATE = {
    LIST: {
        users: []
    },
    DETAIL: {
        selectedUser: null
    }
}

export function listReducer(state = DEFAULT_STATE.LIST, { type, payload }): UsersList {
    switch(type) {
        case userActions.LOAD_USERS_SUCCESS:
            return {...state, users: payload};

        default:
            return state;
    }
}

export function detailReducer(state = DEFAULT_STATE.DETAIL, {type, payload }): UserDetail {
    switch(type) {
        default:
            return state;
    }
}

export const reducers = {
    list: listReducer,
    detail: detailReducer
}

/*
  STATE SELECTORS
*/

export const getAllUsers = (appState) => appState.users.list.users;
