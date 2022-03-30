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
  const [value, onChange] = useState("");

  //TODO: Add a form
  return (
    <div>
      <Text size="xl">Create Your Post</Text>
      <Space h="md" />
      <TextInput placeholder="My Post" label="Post Name" required />
      <Space h="md" />
      <MultiSelect
        data={data}
        label="Pick all the tags you would like"
        placeholder="Pick all that you like"
      />
      <Space h="md" />
      <RichTextEditor value={value} onChange={onChange} />
      <Space h="md" />
      <Group position="right">
        <Button size="md">Submit</Button>
      </Group>
    </div>
  );
}
