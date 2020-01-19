import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import User from '../User';
import Avatar from '../Avatar';
import ConversionsChart from '../ConversionsChart';
import Statistics from '../Statistics';

configure({adapter: new Adapter()});

describe('<User/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<User/>);
    });

    it('should have <Avatar>, <ConversionsChart>, and <Statistics>', () => {
        expect(wrapper.find(Avatar)).toHaveLength(1);
        expect(wrapper.find(ConversionsChart)).toHaveLength(1);
        expect(wrapper.find(Statistics)).toHaveLength(1);
    });

    it('should have no name or occupation', () => {
        expect(wrapper.find('.user-container').children().at(1).html()).toEqual('<div class="header"></div>');
        expect(wrapper.find('.user-occupation').children().first().html()).toEqual('<span></span>');
    });

    it('should have name and occupation', () => {
        wrapper.setProps({
            name: "Joe Doe",
            occupation: "Astronaut"
        });

        expect(wrapper.find('.user-container').children().at(1).html()).toEqual('<div class="header">Joe Doe</div>');
        expect(wrapper.find('.user-occupation').children().first().html()).toEqual('<span>Astronaut</span>');
    });
});
