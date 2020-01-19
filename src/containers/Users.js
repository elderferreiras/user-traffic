import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { Grid, Divider } from 'semantic-ui-react'
import User from '../components/user/User';
import Loading from '../components/ui/Loading';
import Error from '../components/ui/Error';
import SitePagination from '../components/ui/SitePagination';

const Users = (props) => {
    const users = useSelector(state => state.usersReducer.users);
    const loading = useSelector(state => state.usersReducer.loading);
    const error = useSelector(state => state.usersReducer.error);
    const total = useSelector(state => state.usersReducer.total);
    const fetched = useSelector(state => state.usersReducer.fetched);

    let content = <Loading/>;

    if (!loading) {
        content = (
            <Fragment>
                <Grid columns={3} stackable>
                    {users.map(user => (
                        <Grid.Column key={user.id}>
                            <User {...user}/>
                        </Grid.Column>
                    ))}
                </Grid>
                <Divider/>
                <SitePagination
                    page={props.page}
                    setPage={props.setPage}
                    offset={props.offset}
                    total={total}
                    fetched={fetched}
                    limit={props.limit}/>
            </Fragment>
        );
    }

    if (error) {
        content = <Error/>;
    }

    return content;
};

export default Users;
