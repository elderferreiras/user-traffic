export const updateObject = (oldObject, updatedProperties = {}) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const getHexadecimalColor = () => {
    return '#' + Math.random().toString(16).substr(-6);
};
