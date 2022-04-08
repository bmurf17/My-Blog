import { Grid } from "@mantine/core";
import { tempUser } from "../../Types/User";
import { ProfileSection } from "./ProfileSection";
import { UpdateProfileSection } from "./UpdateProfileSection";

export function UserPage() {
  return (
    <Grid>
      <Grid.Col span={3}>
        <ProfileSection user={tempUser} />
      </Grid.Col>
      <Grid.Col span={9}>
        <UpdateProfileSection />
      </Grid.Col>
    </Grid>
  );
}
