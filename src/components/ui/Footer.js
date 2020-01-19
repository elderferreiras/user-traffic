import React from 'react';
import { Segment, Container, Header } from 'semantic-ui-react'

const Footer = () => {
    const fullYear = (new Date()).getFullYear();

    return (
        <Segment className="footer" inverted vertical>
            <Container textAlign='center'>
                <Header inverted as='h4' content={`Elder Patten Ferreira ${fullYear}`}/>
            </Container>
        </Segment>
    );
};

export default Footer;
