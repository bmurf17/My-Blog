import {
  Text,
  Card,
  Grid,
  Image,
  Group,
  Badge,
  useMantineTheme,
} from "@mantine/core";

export function BlogCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];

  return (
    <Card shadow="sm" p="lg">
      <Card.Section>
        <Image
          src="https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"
          height={200}
          fit="contain"
          alt="blog picture"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>Blog Title Post</Text>
        <Badge color="pink" variant="light">
          Blog Post Tags
        </Badge>
      </Group>
      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        This is where a preview for the blog post will go
      </Text>
    </Card>
  );
}
