import { createAxBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(null, { affectedRows: 1 });
        }),
    },
}));

describe('unit test create ax booking', () =>
    test('should get affectRows result form put ax endpoint', (done) => {
        createAxBooking('unit test', (error, result) => {
            expect(error).toBeNull();
            expect(result).toEqual(1);

            done();
        });
    }));
