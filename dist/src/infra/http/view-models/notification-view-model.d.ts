import { Notification } from '@application/entities/notification/notification';
export declare class NotificationViewModel {
    static toHttp(notification: Notification): {
        id: string;
        content: string;
        category: string;
        recipientId: string;
    };
}
