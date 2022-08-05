import { ResultSetHeader } from 'mysql2';

import { connection } from '../mysql_connection';

export interface AsAxData {
    booking_name: string;
}

export type AsInsertCallback = (error: null | Error, value: number) => void;

function createAxBooking(data: string, cb: AsInsertCallback): void {
    const postData: AsAxData = {
        booking_name: data,
    };

    const sql = `INSERT INTO ax_booking (ax_name) VALUES ('${postData.booking_name}');`;

    connection.query<ResultSetHeader>(sql, function (err, results, _fields) {
        const error = err ? new Error('put ax error') : null;

        cb(error, results.affectedRows);
    });
}

export { createAxBooking };
