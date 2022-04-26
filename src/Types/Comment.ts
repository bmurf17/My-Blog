import { tempUser, User } from "./User";

export interface Comment {
  id: string;
  user: string;
  content: string;
  post: string;
}

export const tempComment: Comment = {
  id: "1",
  user: "Temp User Id",
  content: "A comment on the post",
  post: "Fake post Id",
};

export const tempComments: Comment[] = [tempComment];
