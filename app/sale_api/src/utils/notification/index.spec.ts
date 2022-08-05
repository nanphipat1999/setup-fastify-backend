import { notifyBooking } from '.';

describe('unit test send notify', () =>
    test('should get result form aws sdk', (done) => {
        notifyBooking('sms', (error, result) => {
            expect(error).toBeNull();
            expect(result).toEqual('send error');

            done();
        });
    }));
