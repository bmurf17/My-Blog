import { Avatar, Button, Group, Space, Textarea } from "@mantine/core";
import { useContext } from "react";
import { UserContext } from "../../App";

export function AddComment() {
  const user = useContext(UserContext);
  return (
    <>
      <Group>
        <Avatar src={user.profileImg} alt="it's me" />
        <Textarea
          style={{ width: "90%" }}
          placeholder="Your comment"
          label="Your comment"
          required
        />
      </Group>
      <Space h="sm" />
      <Group position="right">
        <Button>Submit</Button>
      </Group>
    </>
  );
}
