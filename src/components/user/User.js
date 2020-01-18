import React from 'react';
import { Grid, Card, Popup } from 'semantic-ui-react'
import Statistics from './Statistics';
import ConversionsChart from './ConversionsChart';
import Avatar from './Avatar';

const User = (props) => {
    return (
        <Card className="user-card">
            <Card.Content className="user-container">
                <Avatar {...props}/>
                <Card.Header>{props.name}</Card.Header>

                <Card.Meta className="user-occupation" data-content={props.occupation}>
                    <Popup
                        trigger={<span>{props.occupation}</span>}
                        content={props.occupation}
                        position='top center'
                    />
                </Card.Meta>
                <Card.Description>
                    <Grid divided='vertically'>
                        <Grid.Row columns={2}>
                            <Grid.Column>
                                <ConversionsChart {...props}/>
                            </Grid.Column>
                            <Grid.Column className="statistics-container">
                                <Statistics {...props}/>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Description>
            </Card.Content>
        </Card>
    );
};

export default User;
