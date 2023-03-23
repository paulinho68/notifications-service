import { Notification as NotificationPrisma } from '@prisma/client';
import { Notification } from '@application/entities/notification/notification';
import { Content } from '@application/entities/content/content';
export class PrismaNotificationMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt
    }
  }
  static toDomain(notification: NotificationPrisma): Notification {
    return new Notification({
      category: notification.category,
      content: new Content(notification.content),
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt
    }, notification.id)
  }
}