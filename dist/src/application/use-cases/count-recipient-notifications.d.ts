import { NotificationsRepository } from '@application/repositories/notifications-repository';
interface ICountRecipientNotificationRequest {
    recipientId: string;
}
type TCountRecipientNotificationResponse = {
    count: number;
};
export declare class CountRecipientNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: ICountRecipientNotificationRequest): Promise<TCountRecipientNotificationResponse>;
}
export {};
