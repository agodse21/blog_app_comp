import React from "react";
import { useSelector } from "react-redux";
import { AdminPage } from "../components/AdminPage";
import { Navbar } from "../components/Navbar";
import { UserPage } from "../components/UserPage";

export const HomePage = () => {
  const admin = useSelector((state) => state.isAdmin);
  return (
    <>
      <Navbar />
      {admin ? <AdminPage /> : <UserPage />}
    </>
  );
};
