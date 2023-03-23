import { Notification as NotificationPrisma } from '@prisma/client';
import { Notification } from '@application/entities/notification/notification';
export declare class PrismaNotificationMapper {
    static toPrisma(notification: Notification): {
        id: string;
        category: string;
        content: string;
        recipientId: string;
        readAt: Date | null | undefined;
        createdAt: Date;
    };
    static toDomain(notification: NotificationPrisma): Notification;
}
