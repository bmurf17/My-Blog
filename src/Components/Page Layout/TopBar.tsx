import {
  Header,
  Avatar,
  Group,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
}

export function TopBar(props: Props) {
  const { opened, setOpened } = props;

  const theme = useMantineTheme();

  return (
    <Header height={70} p="md">
      {/* Handle other responsive styles with MediaQuery component or createStyles function */}
      <div style={{ height: "100%" }}>
        <Group position="apart">
          <Group>
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o: any) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Avatar
              src="https://www.elegantthemes.com/blog/wp-content/uploads/2019/03/000-Pixel-Art-Maker.png"
              alt="blog logo"
            />

            <Text weight={700}>Brendans Bold Blog</Text>
          </Group>

          <Group>
            <Text weight={700}>Log In</Text>

            <Text align="right" weight={700}>
              Log Out
            </Text>
          </Group>
        </Group>
      </div>
    </Header>
  );
}
