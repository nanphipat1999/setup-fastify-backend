import { ResultSetHeader } from 'mysql2';

import { connection } from '../../utils/mysql_connection';

export interface AsCreateData {
    booking_name: string;
}

export type AsInsertCallback = (error: null | Error, value: number) => void;

function createBooking(data: string, cb: AsInsertCallback): void {
    const postData: AsCreateData = {
        booking_name: data,
    };

    const sql = `INSERT INTO booking_list (booking_name) VALUES ('${postData.booking_name}');`;

    connection.query<ResultSetHeader>(sql, function (err, results, _fields) {
        const error = err ? err : null;

        cb(error, results.insertId);
    });
}

export { createBooking };
