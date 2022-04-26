import { Group, Avatar, Text } from "@mantine/core";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../Firebase/env.firebase";
import { Comment } from "../../Types/Comment";

interface Props {
  comment: Comment;
}

export function ViewComment(props: Props) {
  const { comment } = props;

  const [userImg, setUserImg] = useState("");

  useEffect(() => {
    async function getUserName() {
      const docRef = doc(db, "user", comment.user || "");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUserImg(docSnap.data().profileImg);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getUserName();
  }, [comment.user]);

  return (
    <>
      <Group pl={18}>
        <Avatar src={userImg} alt="it's me" />
        <Text size="md">{comment.content} </Text>
      </Group>
    </>
  );
}
