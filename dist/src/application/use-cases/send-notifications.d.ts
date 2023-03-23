import { NotificationsRepository } from '../repositories/notifications-repository';
import { Notification } from '@application/entities/notification/notification';
interface ISendNotificationRequest {
    recipientId: string;
    content: string;
    category: string;
}
interface SendNotificationResponse {
    notification: Notification;
}
export declare class SendNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: ISendNotificationRequest): Promise<SendNotificationResponse>;
}
export {};
