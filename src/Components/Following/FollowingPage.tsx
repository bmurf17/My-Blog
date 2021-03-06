import { Grid, Text } from "@mantine/core";
import { User } from "../../Types/User";
import { FollowingCard } from "./FollowingCard";

interface Props {
  followingUsers: User[];
}

export function FollowingPage(props: Props) {
  const { followingUsers } = props;
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Text size="lg">You Follow</Text>
        </Grid.Col>

        {followingUsers.map((user) => {
          return (
            <Grid.Col key={user.id} sm={12} md={4} lg={2}>
              <FollowingCard user={user} />
            </Grid.Col>
          );
        })}
        <Grid.Col span={12}>
          <Text size="lg">You Should Follow</Text>
        </Grid.Col>
      </Grid>
    </>
  );
}
