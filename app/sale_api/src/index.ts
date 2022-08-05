import fastify from 'fastify';
import { bindNodeCallback, of, mergeMap, zip } from 'rxjs';

import { callAx } from './utils/call_ax';
// import { callAx, notification, putDataBase, updateDatabase } from './handler/create_booking/api';
import { createBooking } from './utils/insert_database';
import { connection } from './utils/mysql_connection';
import { notifyBooking } from './utils/notification';
import { updateBooking } from './utils/update_database';

const app = fastify({
    logger: true,
});

app.get('/api/health', (_req, res) => {
    res.status(200).send({ message: 'ok' });
});

app.get('/api/booking', (_req, res) => {
    connection.query('SELECT * FROM `booking_list`', function (_err, results, _fields) {
        res.status(200).send(results);
    });
});

app.post<{
    // eslint-disable-next-line @typescript-eslint/naming-convention
    Body: {
        booking_name: string;
    };
}>(
    '/api/booking',
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

        bindNodeCallback(createBooking)(bookingName)
            .pipe(
                mergeMap((databaseResult) => {
                    const signalAx = bindNodeCallback(callAx)(bookingName).pipe(
                        mergeMap((axResult) =>
                            bindNodeCallback(updateBooking)(databaseResult, axResult),
                        ),
                    );

                    return zip([
                        of(databaseResult),
                        signalAx,
                        bindNodeCallback(notifyBooking)('email'),
                        bindNodeCallback(notifyBooking)('sms'),
                    ]);
                }),
            )
            .subscribe({
                next: (result) => {
                    console.log('result =>', result);
                    res.status(200).send({ response: result });
                },
                error: () => {
                    res.status(500).send({ response: 'error' });
                },
            });
    },
);

export { app };
