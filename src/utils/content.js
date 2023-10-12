// Header
import Detail from "../assets/images/Header/main-bg-0-0.png";
import MainBG from "../assets/images/Header/main-bg-0_1.webp";
import MainBGMobile from "../assets/images/Header/main-bg-0_1-mobile.png";
import Foreground from "../assets/images/Header/main-bg-1_1.png";
import ForegroundR from "../assets/images/Header/main-bg-2_1.png";
import Subject from "../assets/images/Header/main-bg-3.png";

// About
import NewsImg from "../assets/images/About/about-image.png";
import Thwack from "../assets/images/About/thwack.png";
import Bellicopter from "../assets/images/About/bell.png";
import Orion from "../assets/images/About/orion.png";
import Morberizer from "../assets/images/About/morb.png";
import QOH from "../assets/images/About/qoh.png";
import O7 from "../assets/images/About/o7.png";
import Culverizer from "../assets/images/About/culv.png";

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
  MainBGMobile,
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
      "The Bellarmine Combat Robotics Club (BCRC) is a high school engineering community dedicated to creating combat robots. Each semester, we delve into bot-building, starting with 1-pound robots in the first semester and progressing to 3-pound bots in the second. Through lectures and meetings, we train our members in design, CAD, assembly, manufacturing, and electronics. At the end of each semester, we host Bell Brawls, our own tournament, inviting schools from across California to compete against us. These competitions have been a huge success, with our last one having more than 120 people watching and 16 teams competing! We compile all of these fights on our blossoming youtube channel, BCRCBots, which has amassed nearly 100 thousand views!",
    image: NewsImg,
  },
  bottom: {
    title: "The Robots",
    TABS: [
      {
        name: "Thwack!",
        image: Thwack,
        subtitle:
          "Thwack is a multi-faceted robot with a wedge on one side and a mighty spinner on the other. It deflects hits with its frontal armor before whipping around to deliver a high-energy impact to the sides of its opponent.\n\nClass: 3lb\nRecord: 5-5\nWeapon: Horizontal Spinner",
      },
      {
        name: "Bellicopter",
        image: Bellicopter,
        subtitle:
          "Bellicopter wields a 11oz blade that covers the entire chassis to deliver maximum damage in every direction. Each of its 4 wheels are driven by an individual motor.\n\nClass: 3lb\nRecord: 2-3\nWeapon: Overhead Horizontal Spinner",
      },
      {
        name: "Orion",
        image: Orion,
        subtitle: "Orion is a powerful 3 pound Combat Robot that utilizes a vertical disk weapon to send opponents flying. Its 2 wheeled drive system lets it zoom across the field in seconds.\n\nClass: 3lb\nRecord: 1-2\nWeapon: Vertical Spinner",
      },
      {
        name: "Morberizer",
        image: Morberizer,
        subtitle: "Morberizer is a powerful antweight horizontal spinner designed to be simple to build and modular. It’s first iteration was designed and built in less than 2 weeks.\n\nClass: 1lb\nRecord: 9-4\nWeapon: Horizontal Spinner",
      },
      {
        name: "Queen of Hearts",
        image: QOH,
        subtitle:
          "Queen of Hearts is a 4-wheel drive double-disk vertical spinner designed for both the 12lb and 15lb weight classes. Its powerful weapon sent 2 robots to the roof in its debut tournament. It is sponsored by Upgrade Energy and RE Combat Robotics.\n\nClass: 12lb/15lb\nRecord: 2-1\nWeapon: Double Disk Vertical Spinner\n\nNow competes with Team 777 at the University of Southern California.",
      },
      {
        name: "Omni Seven",
        image: O7,
        subtitle:
          "Omni Seven is a 3-wheel holonomic drive vertical spinner boasting a large titanium plow and AR600 disk fabricated by RE Combat Robotics. It’s unique design won the Design Award at Bell Brawls Spring 2023 and inspired many other kiwi-drive beetleweights across the nation.\n\nClass: 3lb\nRecord: 10-4\nWeapon: Vertical Spinner\n\nNow competes with Team 777 at the University of Southern California.",
      },
      {
        name: "Culverizer",
        image: Culverizer,
        subtitle:
          "The Culverizer is a hard-hitting beetleweight horizontal spinner. It stores around 1700 joules in its 9\" blade!\n\nClass 3lb:\nRecord: 13-5\nWeapon: Horizontal Spinner\n\nNow competes with the Culver Commanders at Purdue University.",
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
        "A large and sturdy 35 sq. ft. arena for 3lb robot combat. Equipped with 2 full-height layers and a kickplate, this polycarbonate arena allows for entertaining battles while keeping everyone safe. Rentable for events around the Bay Area.",
      image: ArenaImg,
      button: "Contact us to inquire",
      disabled: false,
      link: "mailto:bellarminecombatrobotics@gmail.com",
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
