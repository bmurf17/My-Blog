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
      <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={opened}
            onClick={() => setOpened((o: any) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Group>
          <Avatar
            component="a"
            href="https://github.com/rtivital"
            target="_blank"
            src="avatar.png"
            alt="it's me"
          />
          <Text weight={700}>Bold</Text>
        </Group>
      </div>
    </Header>
  );
}
