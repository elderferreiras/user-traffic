import React from 'react';
import { Container, Grid, Header } from 'semantic-ui-react'
import Sort from './Sort';

const SiteHeader = (props) => {
    return (
        <Container>
            <Grid stackable>
                <Grid.Column width={16}>
                    <Sort {...props}/>
                </Grid.Column>
            </Grid>
        </Container>
    );
};

export default SiteHeader;
