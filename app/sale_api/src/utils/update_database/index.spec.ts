import { updateBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(null, { affectedRows: 1 });
        }),
    },
}));

describe('unit test create database', () =>
    test('should get affectRows result form put database', (done) => {
        updateBooking(1, 'y', (error, result) => {
            expect(error).toBeNull();
            expect(result).toEqual(1);

            done();
        });
    }));
