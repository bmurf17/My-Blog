import { addDoc, collection, deleteDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/env.firebase";
import { Post } from "../Types/Post";
import { removePostFromArray } from "./UserFunctions";

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

export async function deletePost(post: Post) {
  const postDoc = doc(postCollectionRef, post.id);

  removePostFromArray(post.createdUser, post.id);

  await deleteDoc(postDoc);
}
