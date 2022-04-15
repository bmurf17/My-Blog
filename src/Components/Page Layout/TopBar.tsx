import { User as FirebaseUser } from "@firebase/auth";
import {
  Header,
  Avatar,
  Group,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../../Firebase/env.firebase";

interface Props {
  opened: boolean;
  setOpened: React.Dispatch<React.SetStateAction<boolean>>;
  user: FirebaseUser | null;
  setUser: React.Dispatch<React.SetStateAction<FirebaseUser | null>>;
}

export function TopBar(props: Props) {
  const { opened, setOpened, user, setUser } = props;

  const theme = useMantineTheme();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;

        setUser(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        console.log("Error Code: " + errorCode);
        const errorMessage = error.message;
        console.log("Error message: " + errorMessage);
        // The email of the user's account used.
        const email = error.email;
        console.log("Error Email: " + email);
      });
  };

  const signOutOfGoogle = () => {
    signOut(auth);
  };

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
            {user ? (
              <Text weight={700} onClick={signOutOfGoogle}>
                Log Out
              </Text>
            ) : (
              <Text weight={700} onClick={signInWithGoogle}>
                Log In
              </Text>
            )}
          </Group>
        </Group>
      </div>
    </Header>
  );
}
