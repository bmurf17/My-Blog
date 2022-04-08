import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { User } from "../../Types/User";

interface Props {
  user: User;
}

export function FollowingCard(props: Props) {
  const { user } = props;
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Card<typeof Link>
      component={Link}
      to={"/user/" + user.id}
      shadow="sm"
      p="lg"
    >
      <Card.Section>
        <Image
          src={user.profileImg}
          height={200}
          fit="contain"
          alt="blog picture"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{user.name}</Text>
      </Group>
      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {user.bio}
      </Text>
    </Card>
  );
}
