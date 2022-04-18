import { useContext, useState } from "react";
import { RichTextEditor } from "@mantine/rte";
import {
  TextInput,
  Space,
  Text,
  MultiSelect,
  Button,
  Group,
  Image,
} from "@mantine/core";
import { Post } from "../../Types/Post";
import { addPost } from "../../Functions/PostFunctions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../Firebase/env.firebase";
import { UserContext } from "../../App";

const data = [
  { value: "personal", label: "Personal" },
  { value: "tech", label: "Technology" },
  { value: "bball", label: "Basketball" },
  { value: "other", label: "Other" },
];

export function CreatePost() {
  const [blogContent, setBlogContent] = useState("");
  const [postName, setPostName] = useState("");
  const [previewName, setPreviewName] = useState("");
  const [img, setImg] = useState(
    "https://www.blogtyrant.com/wp-content/uploads/2017/02/how-to-write-a-good-blog-post.png"
  );
  const [tags, setTags] = useState<string[]>([]);

  const user = useContext(UserContext);

  const onSubmit = () => {
    const newPost: Post = {
      title: postName,
      comments: [],
      content: blogContent,
      createdUser: user.id,
      id: "",
      image: img,
      preview: previewName,
      tags: tags,
      dateAdded: new Date(),
    };

    addPost(newPost);
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
    <form onSubmit={onSubmit}>
      <Text size="xl">Create Your Post</Text>
      <Space h="md" />
      <TextInput
        placeholder="My Post"
        label="Post Name"
        onChange={(e) => {
          e.preventDefault();
          setPostName(e.target.value);
        }}
        required
      />
      <Space h="md" />

      <TextInput
        placeholder="An interesting description"
        label="Preview"
        onChange={(e) => {
          e.preventDefault();
          setPreviewName(e.target.value);
        }}
        required
      />
      <Space h="md" />

      <MultiSelect
        data={data}
        label="Pick all the tags you would like"
        placeholder="Pick all that you like"
        value={tags}
        onChange={(e) => {
          setTags(e);
        }}
      />
      <Space h="md" />
      <Text size="xl">Upload an Image</Text>
      <div style={{ width: "50%", marginLeft: "auto", marginRight: "auto" }}>
        <Image src={img} />
      </div>
      <Button onChange={handleChange} component="label">
        Upload An Image
        <input type="file" hidden />
      </Button>
      <Space h="md" />
      <Text size="xl">Content</Text>
      <RichTextEditor value={blogContent} onChange={setBlogContent} />
      <Space h="md" />
      <Group position="right">
        <Button onClick={onSubmit} size="md">
          Submit
        </Button>
      </Group>
    </form>
  );
}
