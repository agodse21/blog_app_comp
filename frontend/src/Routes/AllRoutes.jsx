import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../components/AdminPage";
import { CreateBlog } from "../components/CreateBlog";
import { UpdateBlog } from "../components/UpdateBlog";
import { HomePage } from "../Pages/HomePage";
import { WelcomePage } from "../Pages/WelcomePage";

export const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/create" element={<CreateBlog />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>

        <Route path="/update" element={<UpdateBlog />} />
      </Routes>
    </Box>
  );
};
