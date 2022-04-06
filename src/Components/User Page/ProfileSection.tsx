import { Card, Image, Stack, Text } from "@mantine/core";

export function ProfileSection() {
  return (
    <Card shadow="sm" p="lg">
      <Stack>
        <Image
          src="https://www.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
          radius={"lg"}
        />
        <Text size="md">User Name</Text>
        <Text size="sm">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
      </Stack>
    </Card>
  );
}
