import { createBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(null, { insertId: 1 });
        }),
    },
}));

describe('unit test create database', () =>
    test('should get affectRows result form put database', (done) => {
        createBooking('unit test', (error, result) => {
            expect(error).toBeNull();
            expect(result).toEqual(1);

            done();
        });
    }));
