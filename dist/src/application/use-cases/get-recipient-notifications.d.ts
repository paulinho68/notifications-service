import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
interface IGetRecipientNotificationRequest {
    recipientId: string;
}
type TGetRecipientNotificationResponse = {
    notifications: Notification[];
};
export declare class GetRecipientNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: IGetRecipientNotificationRequest): Promise<TGetRecipientNotificationResponse>;
}
export {};
