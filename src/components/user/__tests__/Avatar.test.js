import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../Avatar';
import { Image } from 'semantic-ui-react';

configure({adapter: new Adapter()});

describe('<Avatar/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Avatar/>);
    });

    it('should render an empty div', () => {
        expect(wrapper.find('.avatar-initials').exists()).toEqual(true);
        expect(wrapper.find('.avatar-initials').children()).toHaveLength(0);
    });

    it('should not render an image', () => {
        wrapper.setProps({
            avatar: ""
        });

        expect(wrapper.find('div.avatar')).toHaveLength(1);
    });

    it('should render an image', () => {
        wrapper.setProps({
            avatar: "https://picsum.photos/200/300"
        });

        expect(wrapper.find(Image)).toHaveLength(1);
    });

    it('should render user\'s first name initial', () => {
        wrapper.setProps({
            avatar: "",
            name: "Joe Doe"
        });

        expect(wrapper.find('.avatar-initials').children()).toHaveLength(1);
        expect(wrapper.contains(<div className="avatar-initials">J</div>)).toEqual(true);
    });
});

