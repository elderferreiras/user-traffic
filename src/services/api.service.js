import USERS from '../data/users';

export const allUsers = async (limit = 20, offset = 0) => {
    return await USERS.slice(offset, limit);
};
