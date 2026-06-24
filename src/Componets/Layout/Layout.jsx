import React from "react";
import { Outlet } from "react-router";
import Footer from "../ui/Footer";
import Navbar from "../ui/Navbar";
import TopHeader from "../ui/TopHeader";

const Layout = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
