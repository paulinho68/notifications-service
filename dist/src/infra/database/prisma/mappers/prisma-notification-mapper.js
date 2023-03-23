"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaNotificationMapper = void 0;
const notification_1 = require("../../../../application/entities/notification/notification");
const content_1 = require("../../../../application/entities/content/content");
class PrismaNotificationMapper {
    static toPrisma(notification) {
        return {
            id: notification.id,
            category: notification.category,
            content: notification.content.value,
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        };
    }
    static toDomain(notification) {
        return new notification_1.Notification({
            category: notification.category,
            content: new content_1.Content(notification.content),
            recipientId: notification.recipientId,
            readAt: notification.readAt,
            createdAt: notification.createdAt
        }, notification.id);
    }
}
exports.PrismaNotificationMapper = PrismaNotificationMapper;
//# sourceMappingURL=prisma-notification-mapper.js.map