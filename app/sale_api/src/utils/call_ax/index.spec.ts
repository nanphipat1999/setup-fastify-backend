import got from 'got';

import { callAx } from '.';

jest.mock('got');

describe('unit test call ax', () =>
    test('should get result form got client', (done) => {
        (got.post as jest.Mock).mockImplementation(() => {
            return {
                json: jest.fn().mockResolvedValue({ response: 'y' }),
            };
        });
        callAx('unit test', (error, result) => {
            expect(error).toBeNull();
            expect(result).toEqual('y');

            done();
        });
    }));
