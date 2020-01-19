export const updateObject = (oldObject, updatedProperties = {}) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const getHexadecimalColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
};

export const parseCurrency = (num) => {
    return '$' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
};

export const getDate = (fullDate) => {
    let date = new Date(fullDate);

    if (Number.isNaN(date.getMonth())) {
        let arr = fullDate.split(/[- :]/);
        date = new Date(arr[0], arr[1] - 1, arr[2], arr[3], arr[4], arr[5]);
    }

    return date;
};
