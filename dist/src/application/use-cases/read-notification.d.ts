import { NotificationsRepository } from '@application/repositories/notifications-repository';
interface IReadNotificationRequest {
    notificationId: string;
}
type TReadNotificationResponse = void;
export declare class ReadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: IReadNotificationRequest): Promise<TReadNotificationResponse>;
}
export {};
