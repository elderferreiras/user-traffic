import * as actionTypes from '../actions/action-types';
import { updateObject } from '../../utility/utility';
import User from '../../classes/User';

const initialState = {
    users: [],
    total: 0,
    fetched: 0,
    loading: false,
    error: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return fetchUsersStart(state);
        case actionTypes.FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(state, action);
        case actionTypes.FETCH_USERS_FAIL:
            return fetchUsersFail(state);
        default:
            return state;
    }
};

const fetchUsersStart = (state) => {
    return updateObject(state, {
        loading: true,
        error: null,
        total: 0,
        fetched: 0
    });
};

const fetchUsersSuccess = (state, action) => {
    let users = action.payload.users.map(user => new User(user));

    return updateObject(state, {
        users: users,
        total: action.payload.total,
        fetched: action.payload.fetched,
        loading: false,
        error: null
    });
};

const fetchUsersFail = (state, action) => {
    return updateObject(state,{
        loading: false,
        error: action.payload.error,
        total: 0,
        fetched: 0
    });
};




export default userReducer;
