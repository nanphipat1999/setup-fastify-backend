import { inspect } from 'util';

import { createAxBooking } from '.';

jest.mock('../mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(new Error('error'), { affectedRows: 0 });
        }),
    },
}));

describe('unit test create database', () =>
    test('should get affectRows result form put ax endpoint', (done) => {
        createAxBooking('unit test', (error, result) => {
            expect(error).not.toBeNull();
            expect(inspect(error)).toMatch('put ax error');
            expect(result).toEqual(0);

            done();
        });
    }));
