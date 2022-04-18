import { Grid } from "@mantine/core";
import { useContext } from "react";
import { UserContext } from "../../App";
import { ProfileSection } from "./ProfileSection";
import { UpdateProfileSection } from "./UpdateProfileSection";

export function UserPage() {
  const user = useContext(UserContext);
  return (
    <Grid>
      <Grid.Col span={3}>
        <ProfileSection user={user} />
      </Grid.Col>
      <Grid.Col span={9}>
        <UpdateProfileSection />
      </Grid.Col>
    </Grid>
  );
}
