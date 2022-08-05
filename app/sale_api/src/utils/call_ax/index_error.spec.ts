import got from 'got';

import { callAx } from '.';

jest.mock('got');

describe('unit test call ax', () =>
    test('should get result form got client', (done) => {
        (got.post as jest.Mock).mockImplementation(() => {
            return {
                json: jest.fn().mockRejectedValue({ response: 'n' }),
            };
        });
        callAx('unit test', (error, result) => {
            expect(error).not.toBeNull();
            expect(result).toEqual('n');

            done();
        });
    }));
