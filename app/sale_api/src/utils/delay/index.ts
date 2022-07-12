export function randomDelayInMs(maxDelanInSec?: number): number {
    const minMs = 1;

    maxDelanInSec = maxDelanInSec < minMs ? 2 : maxDelanInSec;

    return (Math.random() * (maxDelanInSec - minMs) + minMs) * 1000;
}
