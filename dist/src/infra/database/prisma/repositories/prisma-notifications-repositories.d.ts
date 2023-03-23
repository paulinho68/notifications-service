import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';
import { PrismaService } from '../prisma.service';
export declare class PrismaNotificationsRepository implements NotificationsRepository {
    private prismaService;
    constructor(prismaService: PrismaService);
    findById(notificationId: string): Promise<Notification | null>;
    findManyByRecipientId(recipientId: string): Promise<Notification[]>;
    countByRecipientId(recipientId: string): Promise<number>;
    create(notification: Notification): Promise<void>;
    save(notification: Notification): Promise<void>;
}
