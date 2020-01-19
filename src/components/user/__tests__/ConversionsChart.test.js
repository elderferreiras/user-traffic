import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ConversionsChart from '../ConversionsChart';
import { LineChart } from 'recharts';

configure({adapter: new Adapter()});

describe('<ConversionsChart/>', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<ConversionsChart/>);
    });

    it('should not render <LineChart/>', () => {
        expect(wrapper.find(LineChart)).toHaveLength(0);
        expect(wrapper.find('.chart-no-data')).toHaveLength(1);
    });

    it('it render <LineChart/>', () => {
        wrapper.setProps({
            conversionsPerDay: {
                data: [
                    {name: '3/8/2013', conversions: 45},
                    {name: '3/9/2013', conversions: 34},
                    {name: '3/10/2013', conversions: 12},
                    {name: '3/11/2013', conversions: 33},
                    {name: '3/12/2013', conversions: 41},
                ],
            }
        });

        expect(wrapper.find(LineChart)).toHaveLength(1);
        expect(wrapper.find('.chart-no-data')).toHaveLength(0);
    });
});
