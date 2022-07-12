import { randomDelayInMs } from '.';

test('should get randome delay in ms between 1000..4000', () => {
    const delayInMs = randomDelayInMs(4);

    expect(delayInMs).toBeGreaterThanOrEqual(1000);
    expect(delayInMs).toBeLessThanOrEqual(4000);
});
