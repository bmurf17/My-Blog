import { List, Text } from "@mantine/core";
import { CirclePlus, Friends, ListSearch, Home } from "tabler-icons-react";
import { Link } from "react-router-dom";

export function NavBarLinks() {
  return (
    <List spacing="xs" size="sm" center>
      <List.Item icon={<Home size={35} color={"#2d6886"} />}>
        <Text<typeof Link> component={Link} to="/" color="#2d6886" size="lg">
          Home
        </Text>
      </List.Item>

      <List.Item icon={<CirclePlus size={35} color={"#2d6886"} />}>
        <Text<typeof Link>
          component={Link}
          to="/create"
          color="#2d6886"
          size="lg"
        >
          Create a Post
        </Text>
      </List.Item>
      <List.Item icon={<Friends size={35} strokeWidth={2} color={"#2d6886"} />}>
        <Text<typeof Link>
          component={Link}
          to="/friends"
          color="#2d6886"
          size="lg"
        >
          Friends
        </Text>
      </List.Item>

      <List.Item
        icon={<ListSearch size={35} strokeWidth={2} color={"#2d6886"} />}
      >
        <Text<typeof Link>
          component={Link}
          to="/lists"
          color="#2d6886"
          size="lg"
        >
          View Lists
        </Text>
      </List.Item>
    </List>
  );
}
