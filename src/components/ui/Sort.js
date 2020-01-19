import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const options = [
    {key: 1, text: 'By Name', value: 'name'},
    {key: 2, text: 'By Impressions', value: 'impressionsTotal'},
    {key: 3, text: 'By Conversions', value: 'conversionsTotal'},
    {key: 4, text: 'By Revenue', value: 'revenue'},
];

const Sort = (props) => {
    return (
        <Dropdown className="sorting" clearable options={options} selection placeholder="Sort" onChange={props.sorted}/>
    );
};

export default Sort;
