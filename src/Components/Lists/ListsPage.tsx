import { Grid, Text } from "@mantine/core";
import { tempList } from "../../Types/List";
import { ListCard } from "./ListCard";

export function ListsPage() {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Text size="lg">Your Lists</Text>
      </Grid.Col>

      {tempList.map((list) => {
        return (
          <Grid.Col sm={12} md={6} lg={3}>
            <ListCard list={list} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
