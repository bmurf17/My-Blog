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
          var temp: string[] = [""];
          temp = e;
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
