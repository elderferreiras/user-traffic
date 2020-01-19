import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Statistics from '../Statistics';

configure({adapter: new Adapter()});

describe('<Statistics/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Statistics/>);
    });

    it('should render all three statistics with values == 0', () => {
        expect(wrapper.find('.statistic')).toHaveLength(3);
        expect(wrapper.find('.value').at(0).html()).toEqual('<span class="value orange">0</span>');
        expect(wrapper.find('.value').at(1).html()).toEqual('<span class="value blue">0</span>');
        expect(wrapper.find('.value').at(2).html()).toEqual('<span class="value green">$0</span>');
    });

    it('should render all three statistics values >= 0', () => {
        wrapper.setProps({
            impressionsTotal: 937,
            conversionsTotal: 276,
            revenue: 14490,
        });

        expect(wrapper.find('.value').at(0).html()).toEqual('<span class="value orange">937</span>');
        expect(wrapper.find('.value').at(1).html()).toEqual('<span class="value blue">276</span>');
        expect(wrapper.find('.value').at(2).html()).toEqual('<span class="value green">$14,490</span>');
    });

    it('should render plural label for values !== 1', () => {
        wrapper.setProps({
            impressionsTotal: 0
        });

        expect(wrapper.find('.label').at(0).html()).toEqual('<span class="label">impressions</span>');
    });

    it('should render singular label for values == 1', () => {
        wrapper.setProps({
            impressionsTotal: 1
        });

        expect(wrapper.find('.label').at(0).html()).toEqual('<span class="label">impression</span>');
    });
});
