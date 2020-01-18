import React, { Fragment } from 'react';
import './App.scss';
import { Container, Divider } from 'semantic-ui-react'
import Users from './containers/Users';
import Footer from './components/ui/Footer';

function App() {
    return (
        <Fragment>
            <div className="users-list-container">
            <Container className="user-list">
                <Divider/>
                <Users/>
            </Container>
            <Footer/>
            </div>
        </Fragment>
    );
}

export default App;
