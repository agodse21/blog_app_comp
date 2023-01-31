import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Box w="100%" h="70px" bg={"blue"} color="white">
        <Flex h="100%" alignItems={"center"} justifyContent={"space-around"}>
          <Link to={"/home"}>
            {" "}
            <Heading size={"xl"}>Blogs</Heading>
          </Link>
          <Flex alignItems={"center"} gap={10}>
            <Button colorScheme={"red"} bg="red">
              user
            </Button>
            <Button colorScheme={"red"} bg="red">
              Admin
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};
