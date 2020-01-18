import React from 'react';
import { LineChart, Line } from 'recharts';

const ConversionsChart = (props) => {
    return (
        <div className="chart-container">
            <LineChart width={150} height={50} data={props.conversionsPerDay.data}>
                <Line type="monotone" dataKey="conversions" stroke="#000000" strokeWidth={1} dot={false}/>
            </LineChart>
            <div className="chart-footer">
                Conversions {props.conversionsPerDay.range.from} - {props.conversionsPerDay.range.to}
            </div>
        </div>
    );
};

export default ConversionsChart;
