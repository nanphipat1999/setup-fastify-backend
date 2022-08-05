import { app } from '@app/sale_api';

it('test POST /api/booking', () =>
    test('should post response status = 200', async () => {
        const response = await app.inject({
            method: 'POST',
            url: '/api/booking',
            payload: {
                booking_name: 'test_e2e',
            },
        });
        const res = await response.json();

        expect(response.statusCode).toEqual(200);
        expect(res.response).toHaveLength(4);
    }));
