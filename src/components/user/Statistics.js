import React, { Fragment } from 'react';

const Statistics = (props) => {
    return (
        <Fragment>
            <div className="statistic">
                <span className="value orange">2,204</span>
                <span className="label">impressions</span>
            </div>
            <div className="statistic">
                <span className="value blue">3,322</span>
                <span className="label">conversions</span>
            </div>
            <div className="statistic revenue">
                <span className="value green">$53,982</span>
            </div>
        </Fragment>
    );
};

export default Statistics;
