import { bindNodeCallback, of, mergeMap, zip, Observable } from 'rxjs';

import { createBooking } from '../..//utils/insert_database';
import { notifyBooking } from '../..//utils/notification';
import { updateBooking } from '../..//utils/update_database';
import { callAx } from '../../utils/call_ax';

type IBooking = Observable<[number, number, string, string]>;

export function integrateBooking(): IBooking {
    return bindNodeCallback(createBooking)('integrate').pipe(
        mergeMap((databaseResult) => {
            const signalAx = bindNodeCallback(callAx)('integrate').pipe(
                mergeMap((axResult) => bindNodeCallback(updateBooking)(databaseResult, axResult)),
            );

            return zip([
                of(databaseResult),
                signalAx,
                bindNodeCallback(notifyBooking)('email'),
                bindNodeCallback(notifyBooking)('sms'),
            ]);
        }),
    );
}
