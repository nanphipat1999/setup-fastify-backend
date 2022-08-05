import { lastValueFrom } from 'rxjs';

import { integrateBooking } from '.';

describe('integrate test create booking', () =>
    test('should get array result form create booking', async () => {
        const result = await lastValueFrom(integrateBooking());

        expect(result).toHaveLength(4);
        expect(typeof result[0]).toEqual('number');
        expect(typeof result[1]).toEqual('number');
        expect(typeof result[2]).toEqual('string');
        expect(typeof result[3]).toEqual('string');

        expect(result[0]).not.toBeNull();
        expect(result[1]).not.toBeNull();
        expect(result[2]).not.toBeNull();
        expect(result[3]).not.toBeNull();
    }));
