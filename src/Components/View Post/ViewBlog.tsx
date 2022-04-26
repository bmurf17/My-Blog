import { Text, Image, Space, Group, Tooltip, Button } from "@mantine/core";
import RichTextEditor from "@mantine/rte";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { db } from "../../Firebase/env.firebase";
import { Post, tempPost } from "../../Types/Post";
import { AddComment } from "./AddComment";
import { Comment } from "../../Types/Comment";
import { ViewComment } from "./ViewComment";
import { deletePost } from "../../Functions/PostFunctions";

interface Props {
  posts: Post[];
}

export function ViewBlog(props: Props) {
  const { posts } = props;

  const params = useParams();
  const id = params.id;

  const user = useContext(UserContext);
  const [userName, setUser] = useState("");
  const [comments, setComments] = useState<Comment[]>([]);

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
  }, [post?.createdUser]);

  useEffect(() => {
    async function getComments() {
      const commentCollectionRef = collection(db, "comment");

      const q = query(commentCollectionRef, where("post", "==", post?.id));

      const querySnapshot = await getDocs(q);

      const listOfComments: Comment[] = querySnapshot.docs.map((doc) => {
        const temp: Comment = {
          id: doc.id,
          content: doc.data().content,
          post: doc.data().post,
          user: doc.data().user,
        };

        return temp;
      });
      setComments(listOfComments);
    }

    getComments();
  }, [post?.id]);

  const handleDelete = () => {
    deletePost(post || tempPost);
  };

  return (
    <>
      <Text size="xl" align="center" weight={"bold"}>
        {post?.title}
      </Text>
      <Group position="center">
        <Text size="md" align="center">
          By {userName}
        </Text>
        {user.id === post?.createdUser ? (
          <Tooltip label="This will delete your post">
            <Button<typeof Link> component={Link} to="/" onClick={handleDelete}>
              Delete
            </Button>
          </Tooltip>
        ) : (
          <> </>
        )}
      </Group>

      <div style={{ width: "85%", marginLeft: "auto", marginRight: "auto" }}>
        <Image src={post?.image} alt="blog picture" />
      </div>
      <Space h="md" />
      <RichTextEditor
        readOnly
        value={post?.content || ""}
        onChange={function (value: string): void {
          console.log("This should never happen since it is read only");
        }}
      />
      <Space h="md" />
      <AddComment postID={post?.id || ""} />
      {comments.map((comment) => {
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
