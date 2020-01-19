import React, { Fragment } from 'react';
import { parseCurrency } from '../../utility/utility';

const Statistics = (props) => {
    return (
        <Fragment>
            <div className="statistic">
                <span className="value orange">{props.impressionsTotal.toLocaleString()}</span>
                <span className="label">{props.impressionsTotal === 1? "impression" : "impressions"}</span>
            </div>
            <div className="statistic">
                <span className="value blue">{props.conversionsTotal.toLocaleString()}</span>
                <span className="label">{props.conversionsTotal === 1? "conversion" : "conversions"}</span>
            </div>
            <div className="statistic revenue">
                <span className="value green">{parseCurrency(props.revenue)}</span>
            </div>
        </Fragment>
    );
};

export default Statistics;
