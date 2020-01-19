import * as API from '../api.service';

describe('api service', () => {
    it('should return 12 users with total and fetched variables', () => {
        const result = API.allUsers(12);
        expect(result).toHaveProperty('users');
        expect(result).toHaveProperty('total');
        expect(result).toHaveProperty('fetched');
    });

    it('should return a user with statistics calculated', () => {
        const result = API.allUsers(1);
        const user = result.users.shift();

        expect(user).toHaveProperty('impressionsTotal');
        expect(user).toHaveProperty('conversionsTotal');
        expect(user).toHaveProperty('revenue');
        expect(user).toHaveProperty('conversionsPerDay');
    });
});
