import { HomePage } from "./Components/HomePage";
import { AppShell } from "@mantine/core";
import { NavBar } from "./Components/NavBar";
import { TopBar } from "./Components/TopBar";
import { useState } from "react";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <AppShell
        padding="md"
        navbar={<NavBar opened={opened} setOpened={setOpened} />}
        header={<TopBar opened={opened} setOpened={setOpened} />}
        fixed={true}
        styles={(theme) => ({
          main: {
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[0],
          },
        })}
      >
        {<HomePage />}
      </AppShell>
    </>
  );
}

export default App;
