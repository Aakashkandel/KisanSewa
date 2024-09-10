import React from "react";
import Home from "../components/user/Home";
import Navbar from "../components/user/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/user/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
