import { HomePage } from "./Components/Home Page/HomePage";
import { AppShell } from "@mantine/core";
import { NavBar } from "./Components/Page Layout/NavBar";
import { TopBar } from "./Components/Page Layout/TopBar";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatePost } from "./Components/Create Post/CreatePost";
import { ListsPage } from "./Components/Lists/ListsPage";
import { FollowingPage } from "./Components/Following/FollowingPage";
import { UserPage } from "./Components/User Page/UserPage";
import { ViewBlog } from "./Components/View Post/ViewBlog";
import { ViewUser } from "./Components/View User/ViewUser";
import { ViewList } from "./Components/View List/ViewList";

function App() {
  const [opened, setOpened] = useState(false);

  return (
    <>
      <BrowserRouter>
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
          {
            <>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/create" element={<CreatePost />} />
                <Route path="/friends" element={<FollowingPage />} />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/blog/:id" element={<ViewBlog />} />
                <Route path="/user/:id" element={<ViewUser />} />
                <Route path="/list/:id" element={<ViewList />} />
              </Routes>
            </>
          }
        </AppShell>
      </BrowserRouter>
    </>
  );
}

export default App;
