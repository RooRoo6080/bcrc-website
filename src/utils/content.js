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
import ArenaImg from "../assets/images/Products/arena.webp";
import MorbImage from "../assets/images/Products/morberizer.webp";

// Sponsors
import RECRLogo from "../assets/images/Sponsors/recr.png";
import RepeatLogo from "../assets/images/Sponsors/repeat.png";

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
        name: "Queen of Hearts",
        image: Robot1Img,
        subtitle:
          "QoH: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Omni Seven",
        image: Robot2Img,
        subtitle:
          "O7: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Culverizer",
        image: Robot3Img,
        subtitle: "C: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:\n\nex-bcrc",
      },
      {
        name: "Thwack!",
        image: Robot4Img,
        subtitle: "T!: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Bellicopter",
        image: Robot5Img,
        subtitle:
          "B: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Orion",
        image: Robot5Img,
        subtitle:
          "O: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
      },
      {
        name: "Morberizer",
        image: Robot5Img,
        subtitle:
          "M: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\nClass:\nRecord:\nWeapon:",
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

export const sponsorsContent = {
  SPONSORS: [
    { image: RECRLogo, link: "https://www.recr.us" },
    { image: RepeatLogo, link: "https://www.repeat-robotics.com" },
  ],
};


export const navbarContent = {
  Logo,
};
