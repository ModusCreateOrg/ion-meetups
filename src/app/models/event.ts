import { UserItem } from './user';

export interface EventItem {
    id?: number;
    name: string;
    description?: string;
    attendees: Array<UserItem>;
}
