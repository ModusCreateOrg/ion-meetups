import { UserItem } from './user';

export interface EventItem {
    name: string;
    description?: string;
    attendees: Array<UserItem>;
}
