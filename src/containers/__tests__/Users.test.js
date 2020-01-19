import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as API from '../../services/api.service';
import Users from '../Users';
import User from '../../components/user/User';
import Loading from '../../components/ui/Loading';
import Error from '../../components/ui/Error';

const mockStore = configureMockStore([thunk]);
configure({adapter: new Adapter()});

describe('<Users/>', () => {
    it('should render users grid with 0 users', () => {
        const store = mockStore({
            usersReducer: {
                users: [],
                loading: false,
                error: false,
                total: 0,
                fetched: 0
            }
        });

        const props = {
            limit: 12,
            offset: 0,
            total: 0,
            page: 1
        };

        const wrapper = mount(
            <Provider store={store}>
                <Users {...props}/>
            </Provider>
        );

        expect(wrapper.find(Error).exists()).toEqual(false);
        expect(wrapper.find(Loading).exists()).toEqual(false);
        expect(wrapper.find(User)).toHaveLength(0);
    });

    it('should render users grid with 12 users', () => {
        const response = API.allUsers();

        const store = mockStore({
            usersReducer: {
                users: response.users,
                loading: false,
                error: false,
                total: response.total,
                fetched: response.fetched
            }
        });

        const props = {
            limit: 12,
            offset: 0,
            page: 1
        };

        const wrapper = mount(
            <Provider store={store}>
                <Users {...props}/>
            </Provider>
        );

        expect(wrapper.find(Error).exists()).toEqual(false);
        expect(wrapper.find(Loading).exists()).toEqual(false);
        expect(wrapper.find(User)).toHaveLength(12);
    });

    it('should not render users because it is loading', () => {
        const store = mockStore({
            usersReducer: {
                users: [],
                loading: true,
                error: null,
                total: 0,
                fetched: 0
            }
        });

        const props = {
            limit: 12,
            offset: 0,
            page: 1
        };

        const wrapper = mount(
            <Provider store={store}>
                <Users {...props}/>
            </Provider>
        );

        expect(wrapper.find(Loading).exists()).toEqual(true);
        expect(wrapper.find(User)).toHaveLength(0);
    });

    it('should not render because there\'s an error', () => {
        const store = mockStore({
            usersReducer: {
                users: [],
                loading: false,
                error: true,
                total: 0,
                fetched: 0
            }
        });

        const props = {
            limit: 12,
            offset: 0,
            page: 1
        };

        const wrapper = mount(
            <Provider store={store}>
                <Users {...props}/>
            </Provider>
        );

        expect(wrapper.find(Error).exists()).toEqual(true);
        expect(wrapper.find(User)).toHaveLength(0);
    });
});
