import { User as FirebaseUser } from "@firebase/auth";
import {
  getDoc,
  doc,
  updateDoc,
  collection,
  query,
  where,
  getDocs,
  addDoc,
} from "firebase/firestore";
import { db } from "../Firebase/env.firebase";
import { User } from "../Types/User";

export async function loadUser(uid: string) {
  const docRef = doc(db, "user", uid);

  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
}

export async function updateUserProfile(user: User) {
  const newFields = {
    bio: user.bio,
    name: user.name,
    profileImg: user.profileImg,
  };

  const userDoc = doc(db, "user", user.id);

  await updateDoc(userDoc, newFields);
}

export async function addUserToDB(user: FirebaseUser) {
  const usersCollectionRef = collection(db, "user");

  const q = query(usersCollectionRef, where("authUID", "==", user.uid));

  const querySnapshot = await getDocs(q);

  if (querySnapshot.size === 0) {
    const theUser = {
      authUID: user.uid,
      name: user.displayName,
      profileImg: user.photoURL,
      bio: "Please enter a bio when you get a chance",
      following: [],
      posts: [],
    };

    await addDoc(usersCollectionRef, theUser);
  }
}
