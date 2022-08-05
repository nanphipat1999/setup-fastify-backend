import { axApp } from '@app/ax_endpoint';

describe('test POST /api/ax-endpoint', () =>
    test('should post response status = 200', async () => {
        const response = await axApp.inject({
            method: 'POST',
            url: '/api/ax-endpoint',
            payload: {
                booking_name: 'test_e2e',
            },
        });
        const res = await response.json();

        expect(response.statusCode).toEqual(200);
        expect(res.response).toEqual('y');
    }));
