import React from 'react';
import { Menu, Container, Image } from 'semantic-ui-react';
import logo from '../../assets/images/logo64.png';

const SiteMenu = () => {
    return (
        <Menu fixed='top' inverted>
            <Container>
                <Menu.Item as='a' header>
                    <Image className="logo" size='mini' src={logo}/>
                    User Traffic
                </Menu.Item>
            </Container>
        </Menu>
    );
};

export default SiteMenu;
