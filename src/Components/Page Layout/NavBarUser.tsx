import {
  Box,
  UnstyledButton,
  Group,
  Avatar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ChevronRight, ChevronLeft } from "tabler-icons-react";
import { UserContext } from "../../App";

export function NavBarUser() {
  const theme = useMantineTheme();

  const user = useContext(UserContext);

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === "dark"
            ? theme.colors.dark[4]
            : theme.colors.gray[2]
        }`,
      }}
    >
      <UnstyledButton
        sx={{
          display: "block",
          width: "100%",
          padding: theme.spacing.xs,
          borderRadius: theme.radius.sm,
          color:
            theme.colorScheme === "dark" ? theme.colors.dark[0] : theme.black,

          "&:hover": {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
          },
        }}
      >
        <Link
          to={"/user"}
          style={{
            textDecoration: "none",
            color: "#2d6886",
          }}
        >
          <Group>
            <Avatar src={user.profileImg} radius="xl" />
            <Box sx={{ flex: 1 }}>
              <Text size="md" weight={500}>
                {user.name}
              </Text>
            </Box>

            {theme.dir === "ltr" ? (
              <ChevronRight size={18} />
            ) : (
              <ChevronLeft size={18} />
            )}
          </Group>
        </Link>
      </UnstyledButton>
    </Box>
  );
}
