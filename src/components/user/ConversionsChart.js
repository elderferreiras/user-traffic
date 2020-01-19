import React, { Fragment } from 'react';
import { LineChart, Line, YAxis } from 'recharts';

const ConversionsChart = (props) => {
    const data = props.conversionsPerDay && props.conversionsPerDay.data ? props.conversionsPerDay.data : [];
    const range = props.conversionsPerDay && props.conversionsPerDay.range ? props.conversionsPerDay.range : {};

    let lineChart = <p className="chart-no-data">No data available.</p>;

    if (data.length) {
        lineChart = (
            <Fragment>
                <LineChart width={150} height={50} data={data}>
                    <Line type="monotone" dataKey="conversions" stroke="#000000" strokeWidth={1} dot={false}/>
                    <YAxis type="number" domain={['dataMin', 'dataMax']} hide={true}/>
                </LineChart>

                <div className="chart-footer">
                    Conversions {range.from} - {range.to}
                </div>
            </Fragment>
        );
    }

    return (
        <div className="chart-container">
            {lineChart}
        </div>
    );
};

export default ConversionsChart;
