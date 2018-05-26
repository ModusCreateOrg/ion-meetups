import { UserItem } from './user';
import { SafeResourceUrl } from '@angular/platform-browser';

export interface EventItem {
    id?: number;
    name: string;
    description?: string;
    attendees: Array<UserItem>;
    image?: string;
    imageSafe?: SafeResourceUrl;
}
