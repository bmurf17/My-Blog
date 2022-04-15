import { Grid } from "@mantine/core";
import { useParams } from "react-router-dom";
import { tempPosts } from "../../Types/Post";
import { tempUser, tempUsers } from "../../Types/User";
import { HomePage } from "../Home Page/HomePage";
import { ProfileSection } from "../User Page/ProfileSection";

export function ViewUser() {
  const params = useParams();
  const id = params.id;

  const user = tempUsers.find((temp) => {
    return temp.id === id;
  });

  return (
    <Grid>
      <Grid.Col span={3}>
        <ProfileSection user={user || tempUser} />
      </Grid.Col>
      <Grid.Col span={9}>
        <HomePage posts={user?.posts || tempPosts} />
      </Grid.Col>
    </Grid>
  );
}
