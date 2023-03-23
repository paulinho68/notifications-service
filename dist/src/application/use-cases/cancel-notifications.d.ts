import { NotificationsRepository } from '@application/repositories/notifications-repository';
interface ICancelNotificationRequest {
    notificationId: string;
}
type TCancelNotificationResponse = void;
export declare class CancelNotification {
    private notificationsRepository;
    constructor(notificationsRepository: NotificationsRepository);
    execute(request: ICancelNotificationRequest): Promise<TCancelNotificationResponse>;
}
export {};
