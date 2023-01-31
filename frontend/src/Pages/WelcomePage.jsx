import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as types from "../Redux/ActionTypes";
export const WelcomePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleLogin = (s) => {
    if (s == "admin") {
      dispatch({ type: types.ADMIN_LOGIN_SUCCESS });
      navigate("/home");
    } else {
      dispatch({ type: types.USER_LOGIN_SUCCESS });
      navigate("/home");
    }
  };
  return (
    <Box>
      <Box
        w="50%"
        m={"auto"}
        mt={10}
        borderRadius={20}
        h={"-moz-max-content"}
        p={5}
        boxShadow="lg"
      >
        <Heading size={"md"}>Welcome to blog app</Heading>
        <Text>please choose below option accourding to you!</Text>
        <Flex alignItems={"center"} mt={5} justifyContent="center" gap={20}>
          <Button onClick={() => HandleLogin("user")} colorScheme={"blue"}>
            User
          </Button>
          <Button onClick={() => HandleLogin("admin")} colorScheme={"blue"}>
            Admin
          </Button>
        </Flex>
      </Box>
    </Box>
  );
};
