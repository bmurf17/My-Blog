import { HomePage } from "./Components/Home Page/HomePage";
import { AppShell } from "@mantine/core";
import { NavBar } from "./Components/Page Layout/NavBar";
import { TopBar } from "./Components/Page Layout/TopBar";
import { useState, createContext, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreatePost } from "./Components/Create Post/CreatePost";
import { ListsPage } from "./Components/Lists/ListsPage";
import { FollowingPage } from "./Components/Following/FollowingPage";
import { UserPage } from "./Components/User Page/UserPage";
import { ViewBlog } from "./Components/View Post/ViewBlog";
import { ViewUser } from "./Components/View User/ViewUser";
import { ViewList } from "./Components/View List/ViewList";
import { tempUser, User } from "./Types/User";
import {
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { auth, db } from "./Firebase/env.firebase";
import { Post } from "./Types/Post";
import { onAuthStateChanged, User as FirebaseUser } from "@firebase/auth";
import { addUserToDB } from "./Functions/UserFunctions";

export const UserContext = createContext(tempUser);

function App() {
  const [opened, setOpened] = useState(false);
  const [firebaseUser, setFirebaseUser] = useState<FirebaseUser | null>(null);
  const [user, setUser] = useState(tempUser);
  const [posts, setPosts] = useState<Post[]>([]);
  const [following, setFollowing] = useState<User[]>([]);

  onAuthStateChanged(auth, (currentUser) => {
    if (currentUser?.uid !== firebaseUser?.uid) {
      setFirebaseUser(currentUser);
    }
  });

  useEffect(() => {
    async function logInSiteUser() {
      if (firebaseUser) {
        const q = query(
          collection(db, "user"),
          where("authUID", "==", firebaseUser?.uid)
        );

        const querySnapshot = await getDocs(q);

        querySnapshot.docs.map((doc) => {
          const temp: User = {
            bio: doc.data().bio,
            following: doc.data().following,
            id: doc.id,
            name: doc.data().name,
            posts: doc.data().posts,
            profileImg: doc.data().profileImg,
            authUID: doc.data().authUID,
          };
          setUser(temp);
          return temp;
        });

        addUserToDB(firebaseUser);
      } else {
        setUser(tempUser);
      }
    }
    logInSiteUser();
  }, [firebaseUser]);

  //useEffect for following stuff
  useEffect(() => {
    const loadTheUsers = async () => {
      const postCollectionRef = collection(db, "user");

      const q = query(postCollectionRef, where("authUID", "!=", user.authUID));

      const querySnapshot = await getDocs(q);

      const listOfUsers: User[] = querySnapshot.docs.map((doc) => {
        return {
          bio: doc.data().bio,
          following: doc.data().following,
          id: doc.id,
          name: doc.data().name,
          posts: doc.data().posts,
          profileImg: doc.data().profileImg,
          authUID: doc.data().authUID,
        };
      });
      setFollowing(listOfUsers);
    };
    loadTheUsers();
  }, [user.authUID]);

  // useEffect for post stuff
  useEffect(() => {
    const q = query(collection(db, "post"));

    onSnapshot(q, (snapshot: any) => {
      let posts: Post[] = [];
      snapshot.docs.forEach((doc: any) => {
        const post: Post = {
          id: doc.id,
          title: doc.data().title,
          comments: doc.data().comments,
          content: doc.data().content,
          createdUser: doc.data().createdUser,
          dateAdded: doc.data().dateAdded,
          image: doc.data().image,
          preview: doc.data().preview,
          tags: doc.data().tags,
        };
        posts.push(post);
      });
      setPosts(posts);
    });
  }, []);
  return (
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <AppShell
          padding="md"
          navbar={<NavBar opened={opened} setOpened={setOpened} />}
          header={
            <TopBar
              opened={opened}
              setOpened={setOpened}
              user={firebaseUser}
              setUser={setFirebaseUser}
            />
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
          {
            <>
              <Routes>
                <Route path="/" element={<HomePage posts={posts} />} />
                <Route path="/create" element={<CreatePost />} />
                <Route
                  path="/friends"
                  element={<FollowingPage followingUsers={following} />}
                />
                <Route path="/lists" element={<ListsPage />} />
                <Route path="/user" element={<UserPage />} />
                <Route path="/blog/:id" element={<ViewBlog posts={posts} />} />
                <Route
                  path="/user/:id"
                  element={<ViewUser followingUsers={following} />}
                />
                <Route path="/list/:id" element={<ViewList />} />
              </Routes>
            </>
          }
        </AppShell>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
