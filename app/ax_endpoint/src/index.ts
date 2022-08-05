import fastify from 'fastify';
import { bindNodeCallback } from 'rxjs';

import { createAxBooking } from './utils/insert_ax';
import { connection } from './utils/mysql_connection';

const axApp = fastify({
    logger: true,
});

axApp.get('/api/health', (_req, res) => {
    res.status(200).send({ message: 'ok' });
});

axApp.get('/api/ax-endpoint', (_req, res) => {
    connection.query('SELECT * FROM `ax_booking`', function (_err, results, _fields) {
        res.status(200).send(results);
    });
});

axApp.post<{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Body: {
        booking_name: string;
    };
}>(
    '/api/ax-endpoint',
    {
        schema: {
            body: {
                type: 'object',
                properties: {
                    booking_name: { type: 'string' },
                },
                required: ['booking_name'],
            },
        },
    },
    (req, res) => {
        const { booking_name: bookingName } = req.body;

        bindNodeCallback(createAxBooking)(bookingName).subscribe({
            next: (result) => {
                console.log('ax affectedRows result =>', result);
                res.status(200).send({ response: 'y' });
            },
            error: () => {
                res.status(500).send({ response: 'n' });
            },
        });
    },
);

export { axApp };
