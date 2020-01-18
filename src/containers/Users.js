import React, { useEffect, useState, Fragment } from 'react';
import * as actions from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react'
import User from '../components/user/User';
import Loading from '../components/ui/Loading';
import Error from '../components/ui/Error';
import UsersPagination from '../components/ui/UsersPagination';

const Users = () => {
    const users = useSelector(state => state.usersReducer.users);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.loading);
    const total = useSelector(state => state.usersReducer.total);
    const fetched = useSelector(state => state.usersReducer.fetched);

    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUsers(limit, offset))
    }, [dispatch, limit, offset]);

    useEffect(() => {
        setOffset((page - 1) * limit);
    }, [page, limit]);

    let content = <Loading/>;

    if (!loading) {
        content = (
            <Fragment>
                <Grid columns={3} centered stackable>
                    {users.map(user => (
                        <Grid.Column key={user.id}>
                            <User {...user}/>
                        </Grid.Column>
                    ))}
                </Grid>
                <Divider/>
                <UsersPagination
                    page={page}
                    setPage={setPage}
                    offset={offset}
                    total={total}
                    fetched={fetched}
                    limit={limit}/>
            </Fragment>
        );
    }

    if (error) {
        content = <Error/>;
    }

    return content;
};

export default Users;
