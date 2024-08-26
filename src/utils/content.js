// Header
import Detail from "../assets/images/Header/main-bg-0-0.png";
import MainBG from "../assets/images/Header/main-bg-0_1.png";
import MainBGMobile from "../assets/images/Header/main-bg-0_1-mobile.png";
import Foreground from "../assets/images/Header/main-bg-1_1.png";
import ForegroundR from "../assets/images/Header/main-bg-2_1.png";
import Subject from "../assets/images/Header/main-bg-300.gif?dummy=1";

// About
import NewsImg from "../assets/images/About/about-image.png";
import Thwack from "../assets/images/About/thwack.png";
import Bellicopter from "../assets/images/About/bell.png";
import Orion from "../assets/images/About/orion.png";
import Morberizer from "../assets/images/About/morb.png";
import QOH from "../assets/images/About/qoh.png";
import O7 from "../assets/images/About/o7.png";
import Culverizer from "../assets/images/About/culv.png";
import Tailwind from "../assets/images/About/tailwind.png";
import Crux from "../assets/images/About/crux.png";
import Midas from "../assets/images/About/midas.png";
import Pancake from "../assets/images/About/pancake.png";

// BellBrawls
import BannerBgImage from "../assets/images/BellBrawls/bell-brawls-background.png";
import BannerBgImageMobile from "../assets/images/BellBrawls/bell-brawls-background-mobile.png";

// Products
import ArenaImg from "../assets/images/Products/arena.png";

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
      "The Bellarmine Combat Robotics Competition (BCRC) is an organization based in the Maker Lab that aims to promote and make robot engineering more accessible to students. BCRC hosts combat robotics competitions with 1-pound and 3-pound weight classes, where custom-made robots use weapons to fight each other (in a safely enclosed arena).\n BCRC members learn fundamental robot physics, assembly, and manufacturing by building a 1-pound robot before splitting off into teams to design and build 3-pound robots with guidance from student mentors. The BCRC uses a variety of Maker Lab tools to rapidly prototype robots with materials ranging from PLA plastic to rocket-grade titanium.\nTwice a year, the BCRC hosts Bell Brawls, a combat robotics tournament featuring a handful of the best 3-pound robots in Northern California, which are live-streamed on the BCRC YouTube channel.",
    image: NewsImg,
  },
  bottom: {
    title: "The Robots",
    TABS: [
      {
        name: "Tailwind",
        image: Tailwind,
        subtitle:
          "Tailwind is a defense-heavy vertical spinner that sports an angled 3-piece titanium wedge setup in the front. Its thin blade, designed to cut through opponents, can spin at almost 200mph! \n\nClass: 3lb\nWeapon: Vertical Spinner",
      },
      {
        name: "Midas",
        image: Midas,
        subtitle:
          "Midas has a reliable but powerful undercutter that can rip robots apart. Its key feature is its sparkly gold paint job, which truly is a sight to see.\n\nClass: 3lb \nWeapon: Horizontal Spinner",
      },
      {
        name: "Crux",
        image: Crux,
        subtitle:
          "Crux has the largest vertical spinner in BCRC history. This robot is designed to be able to run when flipped over, hence the large forks sticking up.\n\nClass: 3lb\nWeapon: Vertical Spinner",
      },
      {
        name: "Pancake",
        image: Pancake,
        subtitle:
          "Pancake is a huge, direct-drive shell spinner. The >1lb of spinning mass is walked around with a shuffler, giving this robot a 50% weight bonus.\n\nClass: 3lb\nWeapon: Horizontal Spinner",
      },
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
        subtitle: "Orion is a powerful 3 pound Combat Robot that utilizes a vertical disk weapon to send opponents flying. Its 2 wheeled drive system lets it zoom across the field in seconds.\n\nClass: 3lb\nRecord: 3-4\nWeapon: Vertical Spinner",
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
  title: "Rentals",
  // subtitle: "Designd and built in our lab",
  ITEMS: [
    {
      title: "Arena Rental",
      subtitle:
        "A large and sturdy 35 sq. ft. arena for 3lb robot combat which is transportable in a regular minivan. Equipped with 2 full-height layers and a kickplate, this polycarbonate arena allows for entertaining battles while keeping everyone safe. Rentable for events around the Bay Area.",
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
    { image: MakerLabLogo, link: "https://www.bcp.org/makerlab" },
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
