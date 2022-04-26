import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/env.firebase";

const commentCollectionRef = collection(db, "comment");

export async function addComment(
  content: string,
  postID: string,
  userID: string
) {
  await addDoc(commentCollectionRef, {
    content: content,
    post: postID,
    user: userID,
  });
}
