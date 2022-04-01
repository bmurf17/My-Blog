import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { Badge } from "tabler-icons-react";

export function FollowingCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Card<typeof Link> component={Link} to="/userpage" shadow="sm" p="lg">
      <Card.Section>
        <Image
          src="https://play-lh.googleusercontent.com/cWG9-bk2_zLdKsN9vsYEdbCReVfzgXU6FeHUmLI8a24FoZ05TpOLYXInCQ278FTwCw"
          height={200}
          fit="contain"
          alt="blog picture"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>Blogger Name</Text>
      </Group>
      <Text size="sm" style={{ color: secondaryColor, lineHeight: 1.5 }}>
        This is where a Bio will go for the user where you can see what they
        will write about
      </Text>
    </Card>
  );
}
