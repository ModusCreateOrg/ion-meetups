export interface User {
  name: { title: string; first: string; last: string };
  gender: string;
  email: string;
  selected?: boolean;
}
