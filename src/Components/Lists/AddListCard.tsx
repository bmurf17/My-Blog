import { useContext, useState } from "react";
import {
  Button,
  Card,
  Dialog,
  Group,
  Image,
  Text,
  TextInput,
  useMantineTheme,
} from "@mantine/core";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../../Firebase/env.firebase";
import { addList } from "../../Functions/ListFunctions";
import { UserContext } from "../../App";

export function AddListCard() {
  const theme = useMantineTheme();
  const user = useContext(UserContext);
  const [opened, setOpened] = useState(false);
  const [img, setImg] = useState(
    "https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg"
  );
  const [title, setTitle] = useState("");

  const handleChange = async (e: any) => {
    console.log(e.target);
    if (e.target.files) {
      const storageRef = await ref(storage, `files/${e.target.files[0].name}`);
      const uploadTask = uploadBytesResumable(storageRef, e.target.files[0]);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {},
        (error: any) => console.log(error),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log(downloadURL);
            setImg(downloadURL);
          });
        }
      );
    }
  };

  const createList = async () => {
    addList(user.id, img, title);
    setOpened(false);
    setImg(
      "https://media.wired.com/photos/5a0a38c1d07f6824ff44221b/master/w_2560%2Cc_limit/twitterlists-TA.jpg"
    );
    setTitle("");
  };

  return (
    <>
      <Card shadow="sm" p="lg" onClick={() => setOpened((o) => !o)}>
        <Card.Section>
          <Image
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/OOjs_UI_icon_add.svg/1024px-OOjs_UI_icon_add.svg.png"
            }
            height={200}
            fit="contain"
            alt="blog picture"
          />
        </Card.Section>

        <Group
          position="apart"
          style={{ marginBottom: 5, marginTop: theme.spacing.sm }}
        >
          <Text weight={500}>Add A List</Text>
        </Group>
      </Card>

      <Dialog
        opened={opened}
        withCloseButton
        onClose={() => setOpened(false)}
        size="lg"
        radius="md"
      >
        <Text size="sm" style={{ marginBottom: 10 }} weight={500}>
          Create the List
        </Text>

        <Group py={2} align="flex-end">
          <Image src={img} height={200} fit="contain" alt="blog picture" />
        </Group>
        <Group py={2}>
          <Button onClick={handleChange} component="label">
            Add Image <input type="file" hidden />
          </Button>
        </Group>

        <Group py={2} align="flex-end">
          <Text size="md">Title:</Text>
          <TextInput
            placeholder="example title"
            onChange={(e) => {
              e.preventDefault();
              setTitle(e.target.value);
            }}
            style={{ flex: 1 }}
            value={title}
          />
        </Group>

        <Group py={2} align="flex-end">
          <Button onClick={createList}>Add</Button>
        </Group>
      </Dialog>
    </>
  );
}
