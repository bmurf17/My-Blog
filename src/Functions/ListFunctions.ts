import { collection, addDoc } from "firebase/firestore";
import { db } from "../Firebase/env.firebase";

const listCollectionRef = collection(db, "list");

export async function addList(
  createdUser: string,
  image: string,
  name: string
) {
  await addDoc(listCollectionRef, {
    name: name,
    image: image,
    owningUser: createdUser,
    posts: [],
  });
}
