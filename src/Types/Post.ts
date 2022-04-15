import { Comment, tempComment } from "./Comment";

export interface Post {
  id: string;
  title: string;
  tags: string[];
  content: string;
  image: string;
  preview: string;
  comments: Comment[];
  createdUser: string;
  dateAdded: Date;
}

export const tempPost: Post = {
  id: "1",
  title: "post 1",
  tags: ["Other"],
  content: "This is where the content will be displayed",
  image:
    "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
  preview: "This should be a catchy tagline for people to click on your tag",
  comments: [tempComment],
  createdUser: "enHSg3bM7UwCnGP5BnoA",
  dateAdded: new Date(),
};

export const tempPosts: Post[] = [tempPost];
