import { User } from "./User";

export interface Post {
  id: string;
  title: string;
  tags: string[];
  content: string;
  image: string;
  preview: string;
  createdUser: User;
}

const tempUser: User = {
  bio: "bio",
  name: "Brendan",
  posts: [],
  profileImg:
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
};

export const tempPosts: Post[] = [
  {
    id: "1",
    title: "post 1",
    tags: ["Other"],
    content: "This is where the content will be displayed",
    image:
      "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
    preview: "This should be a catchy tagline for people to click on your tag",
    createdUser: tempUser,
  },
];
