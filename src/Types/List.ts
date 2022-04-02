import { Post } from "./Post";
import { User } from "./User";

export interface List {
  name: string;
  posts: Post[];
  owningUser: User;
}
