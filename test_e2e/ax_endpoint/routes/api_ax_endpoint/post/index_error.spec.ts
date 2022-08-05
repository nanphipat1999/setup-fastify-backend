import { axApp } from '@app/ax_endpoint';

afterAll(() => {
    jest.resetModules();
});

jest.mock('@app/ax_endpoint/lib/utils/mysql_connection', () => ({
    connection: {
        end: jest.fn(),
        query: jest.fn((_sql, cb) => {
            cb(new Error('error'), { affectedRows: 0 });
        }),
    },
}));

describe('test POST /api/ax-endpoint', () =>
    test('should post response status = 500', async () => {
        const response = await axApp.inject({
            method: 'POST',
            url: '/api/ax-endpoint',
            payload: {
                booking_name: 'test_e2e',
            },
        });
        const res = await response.json();

        expect(response.statusCode).toEqual(500);
        expect(res.response).toEqual('n');
    }));
