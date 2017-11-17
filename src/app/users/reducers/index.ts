import { User } from './../models/user';
import * as userActions from '../actions/index.service';

/*
    STATE INTERFACE
*/
export interface UsersList {
    users: Array<User>;
    allUsers: Array<User>;
}

export interface UserDetail {
    selectedUser: User;
}

/*
    STATE REDUCERS
*/
export const DEFAULT_STATE = {
    LIST: {
        allUsers: [],
        users: []
    },
    DETAIL: {
        selectedUser: null
    }
}

export function listReducer(state: UsersList = DEFAULT_STATE.LIST, { type, payload }): UsersList {
    switch(type) {
        case userActions.LOAD_USERS_SUCCESS:
            return {...state, allUsers: payload, users: payload};

        case userActions.SEARCH_USER_SUCCESS:
            if (payload === "") {
                return {...state, users: state.allUsers};
            }
            const matchedUsers = state.allUsers.filter(function(element, index, array) {
                if (element.name === payload) {
                    return element;
                }
            });
            return {...state, users: matchedUsers};

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
    FUNCTIONS
*/

function filterUserByName(users: Array<User>, name: string): User[] {
    const _name = name.toLocaleLowerCase();
    return users.filter(u => u.name.toLocaleLowerCase().includes(_name));
}

/*
  STATE SELECTORS
*/

export const getAllUsers = (appState) => appState.users.list.users;
