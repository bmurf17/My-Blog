import { Grid } from "@mantine/core";
import { ProfileSection } from "./ProfileSection";
import { UpdateProfileSection } from "./UpdateProfileSection";

export function UserPage() {
  return (
    <Grid>
      <Grid.Col span={3}>
        <ProfileSection />
      </Grid.Col>
      <Grid.Col span={9}>
        <UpdateProfileSection />
      </Grid.Col>
    </Grid>
  );
}
