import { inspect } from 'util';

import { notifyBooking } from '.';

describe('unit test send notify', () =>
    test('should get result form aws sdk', (done) => {
        notifyBooking(undefined, (error, result) => {
            expect(error).not.toBeNull();
            expect(inspect(error)).toMatch('send error');
            expect(result).toBeUndefined();

            done();
        });
    }));
