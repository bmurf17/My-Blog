import { Text, Image, Space } from "@mantine/core";
import { useParams } from "react-router-dom";
import { tempPosts } from "../../Types/Post";

export function ViewBlog() {
  const params = useParams();
  const id = params.id;

  const post = tempPosts.find((temp) => {
    return temp.id === id;
  });

  return (
    <>
      <Text size="xl" align="center" weight={"bold"}>
        {post?.title}
      </Text>
      <Text size="md" align="center">
        By {post?.createdUser.name}
      </Text>
      <Image src={post?.image} alt="blog picture" />
      <Space h="md" />
      <Text size="md">{post?.content}</Text>
    </>
  );
}
