import { Text, Image, Space } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../Firebase/env.firebase";
import { Post } from "../../Types/Post";
import { AddComment } from "./AddComment";
import { ViewComment } from "./ViewComment";

interface Props {
  posts: Post[];
}

export function ViewBlog(props: Props) {
  const { posts } = props;

  const params = useParams();
  const id = params.id;
  const [userName, setUser] = useState("");

  const post = posts.find((temp) => {
    return temp.id === id;
  });

  useEffect(() => {
    async function getUserName() {
      const docRef = doc(db, "user", post?.createdUser || "");

      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data().name);
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }

    getUserName();
  });

  return (
    <>
      <Text size="xl" align="center" weight={"bold"}>
        {post?.title}
      </Text>
      <Text size="md" align="center">
        By {userName}
      </Text>
      <Image src={post?.image} alt="blog picture" />
      <Space h="md" />
      <RichTextEditor
        readOnly
        value={post?.content || ""}
        onChange={function (value: string): void {
          console.log("This should never happen since it is read only");
        }}
      />
      <Space h="md" />
      <AddComment />
      {post?.comments.map((comment) => {
        return (
          <div key={comment.id}>
            <Space h="sm" />
            <ViewComment comment={comment} />
          </div>
        );
      })}
    </>
  );
}
