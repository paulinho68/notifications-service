import { SendNotification } from '@application/use-cases/send-notifications';
import { CreateNotificationBody } from '../dtos/create-notification-body';
import { CancelNotification } from '@application/use-cases/cancel-notifications';
import { ReadNotification } from '@application/use-cases/read-notification';
import { CountRecipientNotification } from '@application/use-cases/count-recipient-notifications';
import { GetRecipientNotification } from '@application/use-cases/get-recipient-notifications';
import { UnreadNotification } from '@application/use-cases/unread-notification';
export declare class NotificationsController {
    private sendNotification;
    private cancelNotification;
    private readNotification;
    private unreadNotification;
    private countRecipientNotification;
    private getRecipientNotification;
    constructor(sendNotification: SendNotification, cancelNotification: CancelNotification, readNotification: ReadNotification, unreadNotification: UnreadNotification, countRecipientNotification: CountRecipientNotification, getRecipientNotification: GetRecipientNotification);
    countFromRecipientId(recipientId: string): Promise<number>;
    getFromRecipientId(recipientId: string): Promise<{
        id: string;
        content: string;
        category: string;
        recipientId: string;
    }[]>;
    read(id: string): Promise<void>;
    unread(id: string): Promise<void>;
    cancel(id: string): Promise<void>;
    create(body: CreateNotificationBody): Promise<{
        notification: {
            id: string;
            content: string;
            category: string;
            recipientId: string;
        };
    }>;
}
