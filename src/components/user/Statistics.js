import React, { Fragment } from 'react';
import { parseCurrency } from '../../utility/utility';

const Statistics = (props) => {
    let impressionsTotal = props.impressionsTotal? props.impressionsTotal : 0;
    let conversionsTotal = props.conversionsTotal? props.conversionsTotal : 0;
    let revenue = props.revenue? props.revenue : 0;

    return (
        <Fragment>
            <div className="statistic">
                <span className="value orange">{impressionsTotal.toLocaleString()}</span>
                <span className="label">{impressionsTotal === 1? "impression" : "impressions"}</span>
            </div>
            <div className="statistic">
                <span className="value blue">{conversionsTotal.toLocaleString()}</span>
                <span className="label">{conversionsTotal === 1? "conversion" : "conversions"}</span>
            </div>
            <div className="statistic revenue">
                <span className="value green">{parseCurrency(revenue)}</span>
            </div>
        </Fragment>
    );
};

export default Statistics;
