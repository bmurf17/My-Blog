import { HomePage } from "./Components/HomePage";
import { AppShell, Navbar, Header, ScrollArea } from "@mantine/core";

function App() {
  return (
    <>
      <AppShell
        padding="md"
        navbar={
          <Navbar width={{ base: 300 }} p="xs">
            <p>Options Here</p>
          </Navbar>
        }
        header={
          <Header height={60} p="xs">
            Title and some login info
          </Header>
        }
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
