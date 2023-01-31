import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const AdminPage = () => {
  return (
    <Box>
      <Heading mt="10" size={"xl"}>
        Welcome to admin section
      </Heading>
      <Flex w="60%" gap={10} m="auto" mt={2}>
        <Link to="/create">
          <Button colorScheme={"blue"}>create new blog</Button>
        </Link>
        <Link to="/update">
          <Button colorScheme={"blue"}>Update blog</Button>
        </Link>
      </Flex>
    </Box>
  );
};
