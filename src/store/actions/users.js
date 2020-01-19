import * as API from '../../services/api.service';
import * as actionTypes from './action-types';

export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    };
};

export const fetchUsersSuccess = ({users, fetched, total}) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        payload: {
            users,
            fetched,
            total,
        }
    };
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        payload: {
            error
        }
    };
};

export const fetchUsers = (limit = 12, offset = 0, sort = "") => {
    return (dispatch) => {
        dispatch(fetchUsersStart());

        try {
            const response = API.allUsers(limit, offset, sort);
            dispatch(fetchUsersSuccess(response));
        } catch (error) {
            dispatch(fetchUsersFail(error))
        }
    }
};
