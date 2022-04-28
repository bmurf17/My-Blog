import { Grid, Text } from "@mantine/core";
import { List } from "../../Types/List";
import { AddListCard } from "./AddListCard";
import { ListCard } from "./ListCard";

interface Props {
  lists: List[];
}

export function ListsPage(props: Props) {
  const { lists } = props;
  return (
    <Grid>
      <Grid.Col span={12}>
        <Text size="lg">Your Lists</Text>
      </Grid.Col>
      <Grid.Col sm={12} md={6} lg={3}>
        <AddListCard />
      </Grid.Col>
      {lists.map((list) => {
        return (
          <Grid.Col key={list.id} sm={12} md={6} lg={3}>
            <ListCard list={list} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
