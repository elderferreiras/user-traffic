import * as API from '../../services/api.service';
import * as actionTypes from './action-types';

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: {
            users: users
        }
    };
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    };
};

export const fetchUsers = (limit = 20, offset = 0) => {
    return (dispatch) => {
        dispatch(fetchUsersStart());

        API.allUsers(limit, offset).then(response => {
            dispatch(fetchUsersSuccess(response));
        }).catch(error => {
            dispatch(fetchUsersFail(error))
        });
    }
};
