import { Post, tempPost } from "./Post";
import { tempUser, User } from "./User";

export interface List {
  id: string;
  name: string;
  posts: Post[];
  owningUser: User;
  image: string;
}

export const tempList: List[] = [
  {
    id: "1",
    name: "temp List",
    posts: [tempPost],
    owningUser: tempUser,
    image:
      "https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg",
  },
];
