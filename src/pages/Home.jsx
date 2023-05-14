import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Header from "../containers/Header";
import Contact from "../containers/Contact";
import About from "../containers/About";
import BellBrawls from "../containers/BellBrawls";
import Products from "../containers/Products";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />
      <Header />
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <BellBrawls />
        <About />
        <Products />
        <Contact />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
