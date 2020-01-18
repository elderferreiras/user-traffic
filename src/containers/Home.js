import React, { useEffect } from 'react';
import * as actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
    console.log('------------- home --------------');
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUsers())
    }, [dispatch]);

    console.log(users);
    return (
        <div>
            <p>Hello world!</p>
            <p>{users.length}</p>
        </div>
    );
};

export default Home;
