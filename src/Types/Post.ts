import { User } from "./User";

export interface Post {
  title: string;
  tags: string[];
  content: string;
  createdUser: User;
}
