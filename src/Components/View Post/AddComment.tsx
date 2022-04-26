import { Avatar, Button, Group, Space, Textarea } from "@mantine/core";
import { useContext, useState } from "react";
import { UserContext } from "../../App";
import { addComment } from "../../Functions/CommentFunctions";

interface Props {
  postID: string;
}

export function AddComment(props: Props) {
  const { postID } = props;
  const [comment, setComment] = useState("");

  const user = useContext(UserContext);

  const handleComment = () => {
    addComment(comment, postID, user.id);
  };
  return (
    <>
      <Group>
        <Avatar src={user.profileImg} alt="it's me" />
        <Textarea
          style={{ width: "90%" }}
          placeholder="Your comment"
          label="Your comment"
          onChange={(e) => {
            e.preventDefault();
            setComment(e.target.value);
          }}
          required
        />
      </Group>
      <Space h="sm" />
      <Group position="right">
        <Button onClick={handleComment}>Submit</Button>
      </Group>
    </>
  );
}
