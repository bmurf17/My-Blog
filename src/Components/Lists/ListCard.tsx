import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";

export function ListCard() {
  const theme = useMantineTheme();

  const secondaryColor =
    theme.colorScheme === "dark" ? theme.colors.dark[1] : theme.colors.gray[7];
  return (
    <Card<typeof Link> component={Link} to="/userpage" shadow="sm" p="lg">
      <Card.Section>
        <Image
          src="https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg"
          height={200}
          fit="contain"
          alt="blog picture"
        />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>List Title</Text>
      </Group>
    </Card>
  );
}
