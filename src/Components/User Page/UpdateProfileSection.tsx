import {
  Button,
  Card,
  Group,
  Space,
  Stack,
  Textarea,
  Image,
} from "@mantine/core";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { storage } from "../../Firebase/env.firebase";
import { updateUserProfile } from "../../Functions/UserFunctions";
import { User } from "../../Types/User";

interface Props {
  user: User;
}

export function UpdateProfileSection(props: Props) {
  const { user } = props;

  const [name, setName] = useState(user.name);
  const [bio, setBio] = useState(user.bio);
  const [img, setImg] = useState(user.profileImg);

  const updateProfile = () => {
    const tempUser: User = user;
    tempUser.name = name;
    tempUser.bio = bio;
    tempUser.profileImg = img;
    updateUserProfile(tempUser);
  };

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

  return (
    <Card shadow="sm" p="lg">
      <div style={{ width: "35%", marginLeft: "auto", marginRight: "auto" }}>
        <Image src={img} radius={"lg"} />
      </div>
      <Button onChange={handleChange} component="label">
        Upload An Image
        <input type="file" hidden />
      </Button>

      <Stack>
        <Textarea
          onChange={(e) => {
            e.preventDefault();
            setName(e.target.value);
          }}
          value={name}
          label="Full Name"
          required
        />
        <Textarea
          onChange={(e) => {
            e.preventDefault();
            setBio(e.target.value);
          }}
          value={bio}
          label="Bio"
          autosize
          required
        />
      </Stack>
      <Space h="lg" />
      <Group position="right">
        <Button onClick={updateProfile}>Update</Button>
      </Group>
    </Card>
  );
}
