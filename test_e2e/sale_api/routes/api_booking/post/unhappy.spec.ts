import { inspect } from 'util';

import { app } from '@app/sale_api';
import { notifyBooking } from '@app/sale_api/lib/utils/notification';

afterAll(() => {
    jest.resetModules();
});

jest.mock('@app/sale_api/lib/utils/notification');

it('test POST /api/booking success error', () =>
    test('should post response status = 500', async () => {
        (notifyBooking as jest.Mock).mockImplementation((_sendType, cb) => {
            cb(new Error('send error'), undefined);
        });
        const response = await app.inject({
            method: 'POST',
            url: '/api/booking',
            payload: {
                booking_name: 'test_e2e',
            },
        });
        const res = await response.json();

        expect(response.statusCode).toEqual(500);
        expect(inspect(res.response)).toMatch('error');
    }));

it('test POST /api/booking not found error', () =>
    test('should post response status = 400', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/booking',
            payload: {
                booking_name: undefined,
            },
        });

        console.log(response);

        expect(response.statusCode).toEqual(400);
    }));
