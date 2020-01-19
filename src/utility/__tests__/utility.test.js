import * as utils from '../utility';

describe('utility', () => {
    it('should return Date object', () => {
        const parsedDate = utils.getDate('2013-04-16 07:20:32');
        const date = new Date('2013-04-16 07:20:32');

        expect(parsedDate.getFullYear()).toEqual(date.getFullYear());
        expect(parsedDate.getDay()).toEqual(date.getDay());
        expect(parsedDate.getMonth()).toEqual(date.getMonth());
    });

    it('should return an hexadecimal color', () => {
        expect(utils.getHexadecimalColor()).toEqual(expect.stringMatching(/#[a-fA-F0-9]{6}/));
    });

    it('should return a merged object', () => {
        expect(utils.updateObject({
            loading: false
        }, {
            error: false
        })).toEqual({
            loading: false,
            error: false
        });
    });

    it('should return a string in currency format', () => {
        expect(utils.parseCurrency(1000)).toEqual('$1,000');
    });
});
