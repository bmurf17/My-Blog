import { Grid } from "@mantine/core";
import { tempPosts } from "../../Types/Post";
import { BlogCard } from "./BlogCard";

export function HomePage() {
  return (
    <Grid>
      {tempPosts.map((post) => {
        return (
          <Grid.Col key={post.id} sm={12} md={6} lg={3}>
            <BlogCard post={post} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
