import { Grid } from "@mantine/core";
import { Post } from "../../Types/Post";
import { BlogCard } from "./BlogCard";

interface Props {
  posts: Post[];
}

export function HomePage(props: Props) {
  const { posts } = props;
  return (
    <Grid>
      {posts.map((post) => {
        return (
          <Grid.Col key={post.id} sm={12} md={6} lg={3}>
            <BlogCard post={post} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
}
