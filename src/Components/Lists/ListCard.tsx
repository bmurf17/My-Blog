import { Card, Group, Image, Text, useMantineTheme } from "@mantine/core";
import { Link } from "react-router-dom";
import { List } from "../../Types/List";

interface Props {
  list: List;
}

export function ListCard(props: Props) {
  const { list } = props;
  const theme = useMantineTheme();
  return (
    <Card<typeof Link>
      component={Link}
      to={"/list/" + list.id}
      shadow="sm"
      p="lg"
    >
      <Card.Section>
        <Image src={list.image} height={200} fit="contain" alt="blog picture" />
      </Card.Section>

      <Group
        position="apart"
        style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
      >
        <Text weight={500}>{list.name}</Text>
      </Group>
    </Card>
  );
}
