import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Header from "../containers/Header";
import Contact from "../containers/Contact";
import About from "../containers/About";
import BellBrawls from "../containers/BellBrawls";
import Products from "../containers/Products";
import Sponsors from "../containers/Sponsors";
import Sponsors2 from "../containers/Sponsors2";
import ReactGA from 'react-ga';
import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        <BellBrawls />
        <About />
        <Sponsors />
        <Sponsors2 />
        <Products/>
        <Contact />
        <Footer />
      </Box>
    </div>
  );
};

export default Home;
