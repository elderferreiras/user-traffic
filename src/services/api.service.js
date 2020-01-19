import USERS from '../data/users';
import LOGS from '../data/logs';
import { LogType } from '../enums/LogType';
import * as _ from 'lodash';
import { getDate } from '../utility/utility';


/**
 * Return a user with statistics calculated.
 * @param limit
 * @param offset
 * @param sort
 * @returns {{total: *, users: *, fetched: *}}
 */
export const allUsers = (limit = 12, offset = 0, sort = "") => {
    let scanAfterStats = false;

    // If filtering by name, or no filter is set, then order the whole dataset
    if (sort.length) {
        if (sort === 'name') {
            USERS.sort((a, b) => {
                return a.name.split(" ").shift().localeCompare(b.name.split(" ").shift())
            });
        } else {
            //If filtering by any other field, then wait to filter after stats are calculated
            scanAfterStats = true;
        }
    } else {
        USERS.sort((a, b) => b.id - a.id);
    }

    let users = [];

    if (scanAfterStats) {
        const allUsers = USERS.map(user => {
            return addUserStatistics(user);
        }).sort((a, b) => b[sort] - a[sort]);

        users = _.drop(allUsers, offset).slice(0, limit);
    } else {
        try {
            users = _.drop(USERS, offset).slice(0, limit).map(user => {
                return addUserStatistics(user);
            });
        } catch (err) {
            window.alert(err.message);
        }
    }


    return {
        users: users,
        fetched: users.length,
        total: USERS.length
    };
};

/**
 * Return user with statistics.
 * @param user
 * @returns {{conversionsPerDay: *, revenue: *, conversionsTotal: *, impressionsTotal: *}}
 */
function addUserStatistics(user) {
    const userLogs = LOGS.filter(log => log.user_id === user.id);
    const impressionsTotal = getImpressionsTotal(userLogs);
    const conversionsTotal = getConversionsTotal(userLogs);
    const revenue = getTotalRevenue(userLogs);
    const conversionsPerDay = getConversionsPerDay(userLogs);

    return {
        ...user,
        impressionsTotal,
        conversionsTotal,
        revenue,
        conversionsPerDay
    }
}

/**
 * Return user's total impressions.
 * @param userLogs
 * @returns {*}
 */
export const getImpressionsTotal = (userLogs) => {
    return userLogs.filter(log => log.type === LogType.IMPRESSION).length;
};

/**
 * Return user's total conversions.
 * @param userLogs
 * @returns {*}
 */
export const getConversionsTotal = (userLogs) => {
    return userLogs.filter(log => log.type === LogType.CONVERSION).length.toLocaleString();
};

/**
 * Return user's total revenue.
 * @param userLogs
 * @returns {*}
 */
export const getTotalRevenue = (userLogs) => {
    let total = 0.0;

    for (let log of userLogs) {
        total += log.revenue;
    }

    return total;
};

/**
 * Return conversions per day.
 * @param userLogs
 * @returns {{data: *, range: {from: *, to: *}}}
 */
export const getConversionsPerDay = (userLogs) => {
    const totalPerDay = {};

    //Count conversions by date
    for (let log of userLogs) {
        let date = getDate(log.time);
        let hash = `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

        if (totalPerDay[hash] === undefined) {
            totalPerDay[hash] = 0;
        }

        totalPerDay[hash]++;
    }

    //Parse the data to be read by recharts
    const totalPerDayArray = Object.keys(totalPerDay).sort();

    const data = totalPerDayArray.map(key => {
        return {
            name: key,
            conversions: totalPerDay[key]
        }
    });

    //Get from and to date for a user
    let from = totalPerDayArray.shift();
    from = from.substring(0, from.length - 5);

    let to = totalPerDayArray[totalPerDayArray.length - 1];
    to = to.substring(0, to.length - 5);

    return {
        data,
        range: {
            from,
            to
        }
    };
};
