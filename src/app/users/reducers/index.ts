import { User } from './../models/user';
import * as userActions from '../actions/index.service';

/*
    STATE INTERFACE
*/
export interface UsersList {
    users: Array<User>;
    allUsers: Array<User>;
    sortAsc: boolean
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
        users: [],
        sortAsc: false
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
            const matchedUsers = filterUserByName(state.allUsers, payload);
            return {...state, users: matchedUsers};

        case userActions.SORT_USERS_BY_STARS:
            state.sortAsc= !state.sortAsc;
            const sortedUsers = SortUsersByStars(state.users, state.sortAsc);
        return {...state, users: sortedUsers};

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

function SortUsersByStars(users: User[], asc: boolean) {
    if (asc === true) {
        users.sort((a, b) => (a.stars < b.stars) ? -1 : 1);
    } else {
        users.sort((a, b) => (a.stars > b.stars) ? -1 : 1);
    }
    return users;
}

/*
  STATE SELECTORS
*/

export const getAllUsers = (appState) => appState.users.list.users;

export const getAsc = (appState) => appState.users.list.sortAsc;
