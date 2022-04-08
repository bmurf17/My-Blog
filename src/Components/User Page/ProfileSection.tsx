import { Card, Image, Stack, Text } from "@mantine/core";
import { User } from "../../Types/User";

interface Props {
  user: User;
}

export function ProfileSection(props: Props) {
  const { user } = props;
  return (
    <Card shadow="sm" p="lg">
      <Stack>
        <Image src={user.profileImg} radius={"lg"} />
        <Text size="md">{user.name}</Text>
        <Text size="sm">{user.bio}</Text>
      </Stack>
    </Card>
  );
}
