import React, { Fragment } from 'react';
import './App.scss';
import { Container, Divider } from 'semantic-ui-react'
import Users from './containers/Users';

function App() {
    return (
        <Fragment>
            <Container>
                <Divider/>
                <Users/>
            </Container>
        </Fragment>
    );
}

export default App;
