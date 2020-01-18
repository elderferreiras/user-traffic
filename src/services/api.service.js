import USERS from '../data/users';
import LOGS from '../data/logs';
import { LogType } from '../enums/LogType';
import { parseCurrency } from '../utility/utility';

/**
 * Return a user with statistics calculated.
 * @param limit
 * @param offset
 * @returns {Promise<*>}
 */
export const allUsers = async (limit = 20, offset = 0) => {
    return await USERS.slice(offset, limit).map(user => {
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
    });
};

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
    return userLogs.filter(log => log.type === LogType.CONVERSION).length;
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

    return parseCurrency(total);
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
        let date = new Date(log.time);
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
