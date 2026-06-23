import React from "react";
import TopHeader from "../Componets/ui/TopHeader";
import Navbar from "../Componets/ui/Navbar";
import Hero from "../Componets/ui/Hero";
import Discount from "../Componets/ui/Discount";
import OurProducts from "../Componets/ui/OurProducts";
import HotDeals from "../Componets/ui/HotDeals";
import Products from "../Componets/ui/Products";

const Home = () => {
  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero/>
      <Discount/>
      <OurProducts/>
      <HotDeals/>
      <Products/>

     
    </>
  );
};

export default Home;
