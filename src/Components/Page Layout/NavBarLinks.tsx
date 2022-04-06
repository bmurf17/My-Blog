import { List, Text } from "@mantine/core";
import { CirclePlus, Friends, ListSearch, Home } from "tabler-icons-react";
import { Link } from "react-router-dom";

interface Props {
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function NavBarLinks(props: Props) {
  const { setOpened } = props;

  return (
    <List spacing="xs" size="sm" center>
      <List.Item icon={<Home size={35} color={"#2d6886"} />}>
        <Text<typeof Link>
          component={Link}
          to="/"
          color="#2d6886"
          size="lg"
          onClick={() => {
            setOpened(false);
          }}
        >
          Home
        </Text>
      </List.Item>

      <List.Item icon={<CirclePlus size={35} color={"#2d6886"} />}>
        <Text<typeof Link>
          component={Link}
          to="/create"
          color="#2d6886"
          size="lg"
          onClick={() => {
            setOpened(false);
          }}
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
          onClick={() => {
            setOpened(false);
          }}
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
          onClick={() => {
            setOpened(false);
          }}
        >
          View Lists
        </Text>
      </List.Item>
    </List>
  );
}
