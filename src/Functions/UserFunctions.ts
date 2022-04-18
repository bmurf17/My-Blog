import { getDoc, doc, updateDoc } from "firebase/firestore";
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
  console.log();
  const newFields = {
    bio: user.bio,
    name: user.name,
    profileImg: user.profileImg,
  };

  const userDoc = doc(db, "user", user.id);

  await updateDoc(userDoc, newFields);
}
