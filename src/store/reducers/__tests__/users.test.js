import users from '../users';
import * as actionTypes from '../../actions/action-types';
import * as API from '../../../services/api.service';

describe('users reducer', () => {
    it('should return the initial state', () => {
        expect(users(undefined, {})).toEqual({
            users: [],
            total: 0,
            fetched: 0,
            loading: false,
            error: false
        });
    });

    it('should return the state in loading mode', () => {
        const initialState = {
            users: [],
            total: 0,
            fetched: 0,
            loading: false,
            error: false
        };

        const action = {
            type: actionTypes.FETCH_USERS_START
        };

        expect(users(initialState, action)).toEqual({
            users: [],
            total: 0,
            fetched: 0,
            loading: true,
            error: false
        });
    });

    it('should return the state in error mode', () => {
        const initialState = {
            users: [],
            total: 0,
            fetched: 0,
            loading: false,
            error: false
        };

        const error = new Error('An error occurred!');

        const action = {
            type: actionTypes.FETCH_USERS_FAIL,
            payload: {
                error: error
            }
        };

        expect(users(initialState, action)).toEqual({
            users: [],
            total: 0,
            fetched: 0,
            loading: false,
            error: error
        });
    });

    it('should return the state in success mode', () => {
        const initialState = {
            users: [],
            total: 0,
            fetched: 0,
            loading: false,
            error: false
        };

        const response = API.allUsers();

        const action = {
            type: actionTypes.FETCH_USERS_SUCCESS,
            payload: {
                users: response.users,
                total: response.total,
                fetched: response.fetched,
            }
        };

        expect(users(initialState, action)).toEqual({
            users: response.users,
            total: response.total,
            fetched: response.fetched,
            loading: false,
            error: false
        });
    });
});
