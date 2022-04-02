import { Post } from "./Post";

export interface User {
  profileImg: string;
  name: string;
  bio: string;
  posts: Post[];
}
