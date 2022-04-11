import { useParams } from "react-router-dom";
import { tempList } from "../../Types/List";
import { Grid, Text } from "@mantine/core";
import { BlogCard } from "../Home Page/BlogCard";

export function ViewList() {
  const params = useParams();
  const id = params.id;

  const list = tempList.find((temp) => {
    return temp.id === id;
  });

  return (
    <>
      <Text size="xl" align="center" weight={"bold"}>
        {list?.name}
      </Text>
      <Grid>
        {list?.posts.map((post) => {
          return (
            <Grid.Col key={post.id} sm={12} md={6} lg={3}>
              <BlogCard post={post} />
            </Grid.Col>
          );
        })}
      </Grid>
    </>
  );
}
