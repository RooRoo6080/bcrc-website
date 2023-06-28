// Header
import Detail from "../assets/images/Header/main-bg-0-0.png";
import MainBG from "../assets/images/Header/main-bg-0_1.webp";
import Foreground from "../assets/images/Header/main-bg-1_1.png";
import ForegroundR from "../assets/images/Header/main-bg-2_1.png";
import Subject from "../assets/images/Header/main-bg-3.png";

// About
import NewsImg from "../assets/images/About/about-image.png";
import Robot1Img from "../assets/images/About/robot-1.webp";
import Robot2Img from "../assets/images/About/robot-2.webp";
import Robot3Img from "../assets/images/About/robot-3.webp";
import Robot4Img from "../assets/images/About/robot-4.webp";
import Robot5Img from "../assets/images/About/robot-5.webp";

// BellBrawls
import BannerBgImage from "../assets/images/BellBrawls/bell-brawls-background.png";
import BannerBgImageMobile from "../assets/images/BellBrawls/bell-brawls-background-mobile.png";

// Products
import ArenaImg from "../assets/images/Products/arena.png";
import MorbImage from "../assets/images/Products/morberizer.png";

// Sponsors
import RECRLogo from "../assets/images/Sponsors/recr.png";
import RepeatLogo from "../assets/images/Sponsors/repeat.png";
import TeaqLogo from "../assets/images/Sponsors/teaq.png";
import BCPLogo from "../assets/images/Sponsors/bcp.png";
import MakerLabLogo from "../assets/images/Sponsors/makerlab.png";

// Navbar
import Logo from "../assets/images/logo.png";

export const HeaderContent = {
  MainBG,
  Foreground,
  ForegroundR,
  Subject,
  Detail,
  title: "Bellarmine Combat Robotics Competition",
  subtitle: "",
};

export const AboutContent = {
  top: {
    title: "About Us",
    subtitle:
      "The Bellarmine Combat Robotics Competition (BCRC), established in 2022, is a student-led organization that aims to cultivate engineering skills and enhance the landscape of combat robotics in Northern California by mentoring peers and organizing events.",
    image: NewsImg,
  },
  bottom: {
    title: "The Robots",
    TABS: [
      {
        name: "Thwack!",
        image: Robot1Img,
        subtitle:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Bellicopter",
        image: Robot2Img,
        subtitle:
          "Bellicopter wields a 11oz blade that covers the entire chassis to deliver maximum damage in every direction. Each of its 4 wheels are driven by an individual motor.\n\nClass: 3lb\nRecord: 2-3\nWeapon: Overhead Spinner",
      },
      {
        name: "Orion",
        image: Robot3Img,
        subtitle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Morberizer",
        image: Robot4Img,
        subtitle: "Morberizer is a powerful antweight horizontal spinner designed to be simple to build and modular. It’s first iteration was designed and built in less than 2 weeks.\n\nClass: 1lb\nRecord: 9-4\nWeapon: Horizontal Spinner",
      },
      {
        name: "Queen of Hearts",
        image: Robot5Img,
        subtitle:
          "Queen of Hearts is a 4-wheel drive double-disk vertical spinner designed for both the 12lb and 15lb weight classes. Its powerful weapon sent 2 robots to the roof in its debut tournament. It is sponsored by Upgrade Energy and RE Combat Robotics.\n\nClass: 12lb/15lb\nRecord: 2-1\nWeapon: Drisk (double disk) Spinner\n\nFormerly in the BCRC",
      },
      {
        name: "Omni Seven",
        image: Robot5Img,
        subtitle:
          "Omni Seven is a 3-wheel holonomic drive vertical spinner boasting a large titanium plow and AR600 disk fabricated by RE Combat Robotics. It’s unique design won the Design Award at Bell Brawls Spring 2023 and inspired many other kiwi-drive beetleweights across the nation.\n\nClass: 3lb\nRecord: 10-4\nWeapon: Vertical Spinner\n\nFormerly in the BCRC",
      },
      {
        name: "Culverizer",
        image: Robot5Img,
        subtitle:
          "The Culverizer is a hard-hitting beetleweight horizontal spinner. It stores around 1700 joules in its 9\" blade!\n\nClass 3lb:\nRecord: 13-5\nWeapon: Horizontal Spinner\n\nFormerly in the BCRC",
      },
    ],
  },
};

export const BellBrawlsContent = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Bell Brawls",
  subtitle:
    "Bell Brawls is an action-packed 3lb combat robotics tournament hosted in Silicon Valley. Come and join us in the fight for robot supremacy every May and December. \nIn the meantime, watch the highlights of our previous competition.",
};

export const ProductsContent = {
  title: "Products & Rentals",
  // subtitle: "Built and designed in our lab",
  ITEMS: [
    {
      title: "Arena Rental",
      subtitle:
        "A large and sturdy 30 sq. ft. arena for 3lb robot combat. Equipped with 2 full-height layers behind a kickplate, this polycarbonate arena allows for entertaining battles while keeping everyone safe. Rentable for events around the Bay Area.",
      image: ArenaImg,
      button: "Contact us to inquire",
      disabled: false,
      link: "mailto:bellarminecombatrobotics@gmail.com",
    },
    {
      title: "Morberizer Kit",
      subtitle:
        "Are you looking for a way to get started in combat robotics with a cheap but competitive 1lb (antweight) robot? The Morberizer kit is the perfect solution for you! Inside is a everything you need to assemble the machine and its powerful horizontal spinner.",
      image: MorbImage,
      button: "Buy",
      disabled: true
    },
  ],
};

export const sponsorsTeamContent = {
  SPONSORS: [
    { image: BCPLogo, link: "https://bcp.org" },
    { image: MakerLabLogo, link: "https://www.bcp.org/maker-lab-landing-page" },
    { image: RECRLogo, link: "https://www.recr.us" },
  ],
};

export const sponsorsEventContent = {
  SPONSORS: [
    { image: RepeatLogo, link: "https://www.repeat-robotics.com" },
    { image: TeaqLogo, link: "https://www.teaqueria.com" },
  ],
};

export const navbarContent = {
  Logo,
};
