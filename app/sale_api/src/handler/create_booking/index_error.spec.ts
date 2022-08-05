import { lastValueFrom } from 'rxjs';

import { notifyBooking } from '../..//utils/notification';

import { integrateBooking } from '.';

jest.mock('../../utils/notification');

describe('integrate test create booking', () =>
    test('should get Error form create booking', async () => {
        (notifyBooking as jest.Mock).mockImplementation((_sendType, cb) => {
            cb(new Error('send error'), undefined);
        });
        await expect(lastValueFrom(integrateBooking())).rejects.toThrow(/send error/);
    }));
