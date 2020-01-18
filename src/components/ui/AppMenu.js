import React from 'react';
import Logo from '../../../src/assets/images/logo512.png'
import {
    Image,
    Menu,
} from "semantic-ui-react";

const AppMenu = (props) => {
    return (
        <Menu fixed="top" inverted>
            <Menu.Item>
                <Image size="mini" src={Logo} />
            </Menu.Item>
        </Menu>
    );
};

export default AppMenu;
