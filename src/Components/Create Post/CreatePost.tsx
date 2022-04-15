import { useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import {
  TextInput,
  Space,
  Text,
  MultiSelect,
  Button,
  Group,
} from "@mantine/core";
import { Post } from "../../Types/Post";
import { tempUser } from "../../Types/User";
import { addPost } from "../../Functions/PostFunctions";

const data = [
  { value: "personal", label: "Personal" },
  { value: "tech", label: "Technology" },
  { value: "bball", label: "Basketball" },
  { value: "other", label: "Other" },
];

export function CreatePost() {
  const [blogContent, setBlogContent] = useState("");
  const [postName, setPostName] = useState("");
  const [previewName, setPreviewName] = useState("");

  const [tags, setTags] = useState<string[]>([]);

  const onSubmit = () => {
    console.log("PostName: " + postName);
    console.log("Preview: " + previewName);
    console.log("tags: " + tags);
    console.log("blog content: " + blogContent);

    const newPost: Post = {
      title: postName,
      comments: [],
      content: blogContent,
      createdUser: tempUser,
      id: "",
      image:
        "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png",
      preview: previewName,
      tags: tags,
      dateAdded: new Date(),
    };

    addPost(newPost);
  };

  return (
    <form onSubmit={onSubmit}>
      <Text size="xl">Create Your Post</Text>
      <Space h="md" />
      <TextInput
        placeholder="My Post"
        label="Post Name"
        onChange={(e) => {
          e.preventDefault();
          setPostName(e.target.value);
        }}
        required
      />
      <Space h="md" />

      <TextInput
        placeholder="An interesting description"
        label="Preview"
        onChange={(e) => {
          e.preventDefault();
          setPreviewName(e.target.value);
        }}
        required
      />
      <Space h="md" />

      <MultiSelect
        data={data}
        label="Pick all the tags you would like"
        placeholder="Pick all that you like"
        value={tags}
        onChange={(e) => {
          setTags(e);
        }}
      />
      <Space h="md" />
      <Text size="xl">Content</Text>
      <RichTextEditor value={blogContent} onChange={setBlogContent} />
      <Space h="md" />
      <Group position="right">
        <Button onClick={onSubmit} size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
}
