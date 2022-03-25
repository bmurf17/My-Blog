import { List, Text } from "@mantine/core";
import { CirclePlus, Friends, ListSearch } from "tabler-icons-react";

export function NavBarLinks() {
  return (
    <List spacing="xs" size="sm" center>
      <List.Item icon={<CirclePlus size={50} color={"#2d6886"} />}>
        <Text color="#2d6886" size="lg">
          Create a Post
        </Text>
      </List.Item>
      <List.Item icon={<Friends size={50} strokeWidth={2} color={"#2d6886"} />}>
        <Text color="#2d6886" size="lg">
          Friends
        </Text>
      </List.Item>
      <List.Item
        icon={<ListSearch size={50} strokeWidth={2} color={"#2d6886"} />}
      >
        <Text color="#2d6886" size="lg">
          View Lists
        </Text>
      </List.Item>
    </List>
  );
}
