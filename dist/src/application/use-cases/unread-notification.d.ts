import { NotificationsRepository } from '@application/repositories/notifications-repository';
interface IUnreadNotificationRequest {
    notificationId: string;
}
type TUnreadNotificationResponse = void;
export declare class UnreadNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: IUnreadNotificationRequest): Promise<TUnreadNotificationResponse>;
}
export {};
