import { Box } from "@mui/material";
import React from "react";
import Footer from "../components/Footers/MainFooter";
import Navbar from "../components/Navbars/MainNavbar";
import Section1 from "../containers/Section1";
import Section10 from "../containers/Section10";
import Section4 from "../containers/Section4";
import Section5 from "../containers/Section5";
import Section7 from "../containers/Section7";

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Sections */}
      <Section1 />
      {/* <Section2 /> */}
      
      <Box sx={{ bgcolor: "background.default", position: "relative" }}>
        {/* <Section3 /> */}
        <Section5 />
        <Section4 />
        {/* <Section6 /> */}
        <Section7 />
        {/* <Section8 /> */}
        {/* <Section9 /> */}
        <Section10 />

        <Footer />
      </Box>
    </div>
  );
};

export default Home;
