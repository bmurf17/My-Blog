import {
  Text,
  Card,
  Image,
  Group,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { Post } from "../../Types/Post";

interface Props {
  post: Post;
}

export function BlogCard(props: Props) {
  const { post } = props;

  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card<typeof Link>
      component={Link}
      to={"/blog/" + post.id}
      shadow="sm"
      p="lg"
    >
      <Card.Section>
        <Image src={post.image} height={200} fit="contain" alt="blog picture" />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{post.title}</Text>
        <Badge color="pink" variant="light">
          {post.tags[0]}
        </Badge>
      </Group>
      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        {post.preview}
      </Text>
    </Card>
  );
}
