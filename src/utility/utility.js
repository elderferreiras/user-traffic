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
