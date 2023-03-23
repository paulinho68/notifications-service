import { Notification } from '@application/entities/notification/notification';
import { NotificationsRepository } from '@application/repositories/notifications-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository {

  public notifications: Notification[] = [];

  async create(notification: Notification): Promise<void> {
    this.notifications.push(notification);
  }

  async findById(notificationId: string): Promise<Notification | null> {
    const notification = this.notifications.find(notification => notification.id === notificationId);
    if (!notification) {
      return null;
    }
    return notification;
  }

  async countByRecipientId(recipientId: string): Promise<number> {
    return this.notifications.filter(notification => notification.recipientId === recipientId).length
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    return this.notifications.filter(notification => notification.recipientId === recipientId)
  }

  async save(notificationUpdated: Notification): Promise<void> {
    const notificationIndex = this.notifications.findIndex(notification => notification.id === notificationUpdated.id)
    this.notifications[notificationIndex] = notificationUpdated;
  }
}
