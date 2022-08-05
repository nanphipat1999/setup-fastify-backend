import got from 'got';

export type AsCallAxCallback = (error: null | Error, value: 'y' | 'n') => void;

export interface AsResponseData {
    response: 'y' | 'n';
}

function callAx(bookingName: string, cb: AsCallAxCallback): void {
    got.post('http://127.0.0.1:4001/api/ax-endpoint', {
        json: {
            booking_name: bookingName,
        },
    })
        .json()
        .then((value: AsResponseData) => cb(null, value.response))
        .catch((err: AsResponseData) => cb(new Error('call ax error'), err.response));
}

export { callAx };
