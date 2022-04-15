import {
  addDoc,
  collection,
  getDocs,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
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

export async function loadPosts() {
  const q = query(postCollectionRef);

  const thePosts = await getDocs(q);
  const temp: Post[] = thePosts.docs.map((doc) => {
    console.log(doc);
    const post: Post = {
      id: doc.id,
      title: doc.data().title,
      comments: doc.data().comments,
      content: doc.data().content,
      createdUser: doc.data().createdUser,
      dateAdded: doc.data().dateAdded,
      image: doc.data().image,
      preview: doc.data().preview,
      tags: doc.data().tags,
    };
    return post;
  });

  console.log(temp);
  return temp;
}
