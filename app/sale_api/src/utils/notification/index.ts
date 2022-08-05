import { SNSClient, PublishCommand } from '@aws-sdk/client-sns';

export type AsNotifyCallback = (error: null | Error, value: string) => void;

const client = new SNSClient({ region: 'ap-southeast-1' });

function notifyBooking(send: string, cb: AsNotifyCallback): void {
    if (!send) {
        return cb(new Error('send error'), undefined);
    }

    const input = {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        Message: 'some message',
        // eslint-disable-next-line @typescript-eslint/naming-convention
        TopicArn: 'arn:aws:sns:ap-southeast-1:111111111111:MyTopic',
    };

    const command = new PublishCommand(input);

    client
        .send(command)
        .then((_value) => {
            cb(null, 'send success');
        })
        .catch((_err) => {
            cb(null, 'send error');
        });
}

export { notifyBooking };
