import { createBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(new Error('error'), { insertId: undefined });
        }),
    },
}));

describe('unit test create database', () =>
    test('should get affectRows result form put database', (done) => {
        createBooking('unit test', (error, _result) => {
            expect(error).not.toBeNull();

            done();
        });
    }));
