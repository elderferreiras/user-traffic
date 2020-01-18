import React from 'react'
import { Chart } from 'react-charts'

const ConversionsChart = () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 1',
                data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            }
        ],
        []
    );

    const getSeriesStyle = React.useCallback(
        series => ({
            color: 'black'
        }),
        []
    );

    const axes = React.useMemo(
        () => [
            {primary: true, type: 'linear', position: 'bottom', show: false},
            {type: 'linear', position: 'left', show: false}
        ],
        []
    );

    return (
        <div className="chart-container">
            <Chart data={data} axes={axes} getSeriesStyle={getSeriesStyle} tooltip/>
            <div className="chart-footer">
                Conversions 4/12 - 4/30
            </div>
        </div>
    )
};

export default ConversionsChart;
