import { getDoc, doc } from "firebase/firestore";
import { db } from "../Firebase/env.firebase";

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
