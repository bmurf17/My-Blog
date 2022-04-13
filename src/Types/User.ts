import { Post } from "./Post";

export interface User {
  id: string;
  profileImg: string;
  name: string;
  bio: string;
  posts: Post[];
  following: User[];
}

export const tempUser: User = {
  id: "1",
  bio: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  name: "Brendan",
  posts: [],
  profileImg:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
  following: [],
};

export const tempUsers: User[] = [tempUser];
