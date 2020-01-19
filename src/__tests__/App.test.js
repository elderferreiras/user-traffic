import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../App';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import Users from '../containers/Users';

configure({adapter: new Adapter()});

const mockStore = configureMockStore([thunk]);
configure({adapter: new Adapter()});

describe('<App/>', () => {
  it('should load users grid', () => {
    const store = mockStore({
      usersReducer: {
        users: [],
        loading: false,
        error: false,
        total: 0,
        fetched: 0
      }
    });

    const wrapper = mount(
        <Provider store={store}>
          <App/>
        </Provider>
    );

    expect(wrapper.find(Users)).toHaveLength(1);
  });
});
