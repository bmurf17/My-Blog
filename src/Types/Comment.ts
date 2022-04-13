import { tempUser, User } from "./User";

export interface Comment {
  id: string;
  user: User;
  content: string;
}

export const tempComment: Comment = {
  id: "1",
  user: tempUser,
  content: "A comment on the post",
};

export const tempComments: Comment[] = [tempComment];
