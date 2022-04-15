import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase/env.firebase";
import { Post } from "../Types/Post";

const postCollectionRef = collection(db, "post");

export async function addPost(post: Post) {
  await addDoc(postCollectionRef, {
    title: post.title,
    preview: post.preview,
    content: post.content,
    tags: post.tags,
    comments: post.comments,
    createdUser: "enHSg3bM7UwCnGP5BnoA",
    image: post.image,
  });
}
