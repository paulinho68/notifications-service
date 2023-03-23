import { Replace } from '@helpers/Replace';
import { Content } from '../content/content';
export interface INotificationProps {
    recipientId: string;
    content: Content;
    category: string;
    readAt?: Date | null;
    canceledAt?: Date;
    createdAt: Date;
}
export declare class Notification {
    private _id;
    private props;
    constructor(props: Replace<INotificationProps, {
        createdAt?: Date;
        canceledAt?: Date;
    }>, id?: string);
    get id(): string;
    set content(content: Content);
    get content(): Content;
    set recipientId(recipientId: string);
    get recipientId(): string;
    set category(category: string);
    get category(): string;
    read(): void;
    unread(): void;
    get readAt(): INotificationProps['readAt'];
    get canceledAt(): INotificationProps['canceledAt'];
    cancel(): void;
    set createdAt(createdAt: Date);
    get createdAt(): Date;
}
