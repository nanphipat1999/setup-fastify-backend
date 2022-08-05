import { ResultSetHeader } from 'mysql2';

import { connection } from '../../utils/mysql_connection';

export interface AsUpdateData {
    booking_id: number;
    booking_status_name: 'y' | 'n';
}

export type AsUpdateCallback = (error: null | Error, value: number) => void;

function updateBooking(id: number, name: 'y' | 'n', cb: AsUpdateCallback): void {
    const postData: AsUpdateData = {
        booking_id: id,
        booking_status_name: name,
    };

    const sql = `INSERT INTO booking_status (booking_id,booking_status_name) VALUES ('${postData.booking_id}','${postData.booking_status_name}');`;

    connection.query<ResultSetHeader>(sql, function (err, results, _fields) {
        const error = err ? new Error('update database error') : null;

        cb(error, results.affectedRows);
    });
}

export { updateBooking };
