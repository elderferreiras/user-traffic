import * as actionTypes from '../actions/action-types';
import { updateObject } from '../../utility/utility';
import User from '../../classes/User';

const initialState = {
    users: [],
    loading: false,
    error: false
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return fetchUsersState(state);
        case actionTypes.FETCH_USERS_SUCCESS:
            return fetchUsersSuccess(state, action);
        case actionTypes.FETCH_USERS_FAIL:
            return fetchUsersFail(state);
        default:
            return state;
    }
};

const fetchUsersState = (state) => {
    return updateObject(state, {
        loading: true,
        error: null
    });
};

const fetchUsersSuccess = (state, action) => {
    let users = state.users.concat(action.payload.users.map(user => new User(user)));

    return updateObject(state, {
        users: users,
        loading: false,
        error: null
    });
};

const fetchUsersFail = (state, action) => {
    return updateObject(state,{
        loading: false,
        error: action.payload.error
    });
};




export default userReducer;
