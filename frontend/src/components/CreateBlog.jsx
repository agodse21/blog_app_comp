import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../Redux/action";

export const CreateBlog = () => {
  const [data, setData] = useState("");
  const [img, setImg] = useState(null);
  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleImg = (e) => {
    setImg(e.target.files[0]);
  };
  const handleCreate = () => {
    if (data) {
      const formData = new FormData();
      formData.append("data", JSON.stringify(data));
      if (img) {
        formData.append("picture", img);
        //   formData.append("picturePath", img.name);/
      }

      dispatch(createBlog(formData)).then((res) => {
        toast({
          status: "success",
          title: res,
          position: "top",
          duration: 3000,
        });
        navigate("/admin");
      });
    }
  };
  return (
    <Box>
      <Heading mt={2}>Create a new blog</Heading>
      <Box p={5} w="50%" m="auto" mt={5}>
        <FormLabel>Enter Title of blog:</FormLabel>
        <Input
          type={"text"}
          name="title"
          placeholder="title"
          onChange={handleOnchange}
        />
        <FormLabel>Enter content of blog:</FormLabel>
        <Textarea
          type={"text"}
          name="content"
          placeholder="content"
          onChange={handleOnchange}
        />
        <FormLabel>Enter Title of blog:</FormLabel>
        <input
          type="file"
          name="picture"
          accept="image/png, image/jpeg"
          onChange={handleImg}
        />
        <Button onClick={handleCreate} colorScheme={"blue"} mt={2}>
          create Blog
        </Button>
      </Box>
    </Box>
  );
};
