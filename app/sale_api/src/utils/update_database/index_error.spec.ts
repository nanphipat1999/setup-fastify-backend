import { updateBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(new Error('error'), { affectedRows: 0 });
        }),
    },
}));

describe('unit test create database', () =>
    test('should get affectRows result form put database', (done) => {
        updateBooking(1, 'n', (error, result) => {
            expect(error).not.toBeNull();
            expect(result).toEqual(0);

            done();
        });
    }));
