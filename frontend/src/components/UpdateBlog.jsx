import {
  Box,
  Button,
  FormLabel,
  Heading,
  Input,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBlogs } from "../Redux/action";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
export const UpdateBlog = () => {
  const dispatch = useDispatch();
  const blog = useSelector((state) => state.blogs);
  const [data, setData] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(blog);
  useEffect(() => {
    dispatch(getBlogs());
  }, []);
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData({
      ...data,
      [name]: value,
    });
  };
  const HandleBlogUpdates = (id) => {
    
  };
  return (
    <Box>
      <Heading>Update blogs</Heading>
      {blog?.map((item) => (
        <>
          <Box
            w="50%"
            m="auto"
            mt={2}
            onClick={onOpen}
            cursor={"pointer"}
            border={"1px solid black"}
            p="2"
          >
            {item.title}
          </Box>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Update blog</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
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
                  />
                  <Button
                    onClick={() => HandleBlogUpdates(item._id)}
                    colorScheme={"blue"}
                    mt={2}
                  >
                    create Blog
                  </Button>
                </Box>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      ))}
    </Box>
  );
};
