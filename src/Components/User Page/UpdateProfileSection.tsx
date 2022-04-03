import { Button, Card, Group, Space, Stack, Textarea } from "@mantine/core";

export function UpdateProfileSection() {
  //TODO: Make a form
  return (
    <Card shadow="sm" p="lg">
      <Stack>
        <Textarea placeholder="Current Name" label="Full Name" required />
        <Textarea
          placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          label="Bio"
          autosize
          required
        />
      </Stack>
      <Space h="lg" />
      <Group position="right">
        <Button>Update</Button>
      </Group>
    </Card>
  );
}
