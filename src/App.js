import React, { Fragment, useEffect, useState } from 'react';
import './App.scss';
import { Container, Divider } from 'semantic-ui-react'
import Users from './containers/Users';
import Footer from './components/ui/Footer';
import SiteHeader from './components/ui/SiteHeader';
import { useDispatch } from 'react-redux';
import * as actions from './store/actions';
import SiteMenu from './components/ui/SiteMenu';

function App() {
    const [sortBy, setSortBy] = useState("");
    const [limit, setLimit] = useState(12);
    const [offset, setOffset] = useState(0);
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.fetchUsers(limit, offset, sortBy))
    }, [dispatch, limit, offset, sortBy]);

    useEffect(() => {
        setOffset((page - 1) * limit);
    }, [page, limit]);

    const sortHandler = (event, {value}) => {
        setSortBy(value);
    };

    return (
        <Fragment>
            <div className="users-list-container">
                <SiteMenu/>
                <SiteHeader sorted={sortHandler}/>
                <Container className="user-list">
                    <Divider/>
                    <Users limit={limit} offset={offset} page={page} setPage={setPage}/>
                </Container>
                <Footer/>
            </div>
        </Fragment>
    );
}

export default App;
