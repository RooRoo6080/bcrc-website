// Header
import Detail from "../assets/images/Header/main-bg-0-0.png";
import MainBG from "../assets/images/Header/main-bg-0_1.webp";
import Foreground from "../assets/images/Header/main-bg-1_1.webp";
import ForegroundR from "../assets/images/Header/main-bg-2_1.webp";
import Subject from "../assets/images/Header/main-bg-3.png";

// About
import NewsImg from "../assets/images/About/about-image.webp";
import Robot1Img from "../assets/images/About/robot-1.webp";
import Robot2Img from "../assets/images/About/robot-2.webp";
import Robot3Img from "../assets/images/About/robot-3.webp";
import Robot4Img from "../assets/images/About/robot-4.webp";
import Robot5Img from "../assets/images/About/robot-5.webp";

// BellBrawls
import BannerBgImage from "../assets/images/BellBrawls/bell-brawls-background.webp";
import BannerBgImageMobile from "../assets/images/BellBrawls/bell-brawls-background-mobile.webp";

// Products
import Sec7Image1 from "../assets/images/Products/arena.webp";
import Sec7Image2 from "../assets/images/Products/morberizer.webp";

// Navbar
import Logo from "../assets/images/logo.png";

export const HeaderContent = {
  MainBG,
  Foreground,
  ForegroundR,
  Subject,
  Detail,
  title: "Bellarmine Combat Robotics Competition",
  subtitle: "tagline tagline tagline",
};

export const AboutContent = {
  top: {
    title: "About Us",
    subtitle:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    image: NewsImg,
  },
  bottom: {
    title: "The Robots",
    TABS: [
      {
        name: "Queen of Hearts",
        image: Robot1Img,
        subtitle:
          "QoH: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRecord:\nWeapon:\nDrive:",
      },
      {
        name: "Omni Seven",
        image: Robot2Img,
        subtitle:
          "O7: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRecord:\nWeapon:\nDrive:",
      },
      {
        name: "Culverizer",
        image: Robot3Img,
        subtitle: "C: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRecord:\nWeapon:\nDrive:",
      },
      {
        name: "Thwack!",
        image: Robot4Img,
        subtitle: "T!: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRecord:\nWeapon:\nDrive:",
      },
      {
        name: "Bellicopter",
        image: Robot5Img,
        subtitle:
          "B: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nRecord:\nWeapon:\nDrive:",
      },
    ],
  },
};

export const BellBrawlsContent = {
  BannerBgImage,
  BannerBgImageMobile,
  title: "Bell Brawls",
  subtitle:
    "Bell Brawls is an action-packed Beetleweight combat robotics tournament hosted in Silicon Valley. 18 teams will battle it out in the BCRC's 30 sq. ft. octagonal arena until a champion is crowned.",
};

export const ProductsContent = {
  title: "Products & Rentals",
  // subtitle: "Built and designed in our lab",
  ITEMS: [
    {
      title: "Arena Rental",
      subtitle:
        "A large and sturdy 30 sq. ft. arena for 3lb robot combat. Equipped with 2 full-height layers behind a kickplate, this polycarbonate arena allows for entertaining battles while keeping everyone safe. We will rent to events around San Francisco Bay Area.",
      image: Sec7Image1,
      button: "Contact us to inquire",
      disabled: false,
      link: "mailto:bellarminecombatrobotics@gmail.com",
    },
    {
      title: "Morberizer Kit",
      subtitle:
        "Are you looking for a way to get started in combat robotics with a cheap but powerful 1lb robot? This Morberizer kit will quench that thirst with a fun and destructive bot of your own.\nDo not operate outside of a safe test box.",
      image: Sec7Image2,
      button: "Buy",
      disabled: true
    },
  ],
};

export const navbarContent = {
  Logo,
};
