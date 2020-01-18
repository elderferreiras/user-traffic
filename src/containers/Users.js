import React, { useEffect } from 'react';
import * as actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from 'semantic-ui-react'
import User from '../components/user/User';

const Users = () => {
    const users = useSelector(state => state.usersReducer.users);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUsers())
    }, [dispatch]);

    return (
        <Grid stackable centered>
            {users.map(user => (

                <Grid.Column key={user.id} computer={4} mobile={8} tablet={6} >
                    <User {...user}/>
                </Grid.Column>
            ))}
        </Grid>
    );
};

export default Users;
