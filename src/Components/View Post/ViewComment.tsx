import { Group, Avatar, Text } from "@mantine/core";
import { Space } from "tabler-icons-react";
import { Comment } from "../../Types/Comment";

interface Props {
  comment: Comment;
}

export function ViewComment(props: Props) {
  const { comment } = props;
  return (
    <>
      <Group pl={18}>
        <Avatar src={comment.user.profileImg} alt="it's me" />
        <Text size="md">{comment.content} </Text>
      </Group>
    </>
  );
}
