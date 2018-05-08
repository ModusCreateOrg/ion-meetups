import { User } from './user.model';

export interface Event {
  id: string | number;
  attendees: Array<User>;
  image: string;
  name: string;
}
