// Header
import Detail from "../assets/images/Header/main-bg-0-0.png";
import MainBG from "../assets/images/Header/main-bg-0_1.webp";
import Foreground from "../assets/images/Header/main-bg-1_1.webp";
import ForegroundR from "../assets/images/Header/main-bg-2_1.webp";
import Subject from "../assets/images/Header/main-bg-3.png";

// About
import NewsImg from "../assets/images/About/news-image.webp";
import Phone1Img from "../assets/images/About/wallet-buy.webp";
import Phone2Img from "../assets/images/About/wallet-stake.webp";
import Phone3Img from "../assets/images/About/wallet-store.webp";
import Phone4Img from "../assets/images/About/wallet-swap.webp";
import Phone5Img from "../assets/images/About/wallet-transfer.webp";

// BellBrawls
import BannerBgImage from "../assets/images/BellBrawls/news-block-background.webp";
import BannerBgImageMobile from "../assets/images/BellBrawls/news-block-background-mobile.webp";

// Products
import Sec7Image1 from "../assets/images/Products/api.webp";
import Sec7Image2 from "../assets/images/Products/grant-program.webp";

// Contact
import DiscordImage from "../assets/images/Contact/discord.webp";
import RedditImage from "../assets/images/Contact/reddit.webp";
import TelegramImage from "../assets/images/Contact/telegram.webp";
import TwitterImage from "../assets/images/Contact/twitter.webp";

// Navbar
import Logo from "../assets/images/logo.svg";

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
        image: Phone1Img,
        subtitle:
          "abracadabra\nRecord: 2-2",
      },
      {
        name: "Omni Seven",
        image: Phone3Img,
        subtitle:
          "alakazam",
      },
      {
        name: "Culverizer",
        image: Phone5Img,
        subtitle: "from bryan culver's basement",
      },
      {
        name: "Thwack!",
        image: Phone4Img,
        subtitle: "oomph",
      },
      {
        name: "Bellicopter",
        image: Phone2Img,
        subtitle:
          "bellicopter helicopter",
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
        "A large and sturdy 30 sq. ft. arena for 3lb robot combat. Equipped with 2 full-height layers behind a kickplate, this polycarbonate arena allows for entertaining battles while keeping everyone safe.",
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

export const ContactContent = {
  SOCIALS: [
    { name: "Telegram", image: TelegramImage },
    { name: "Discord", image: DiscordImage },
    { name: "Reddit", image: RedditImage },
    { name: "Twitter", image: TwitterImage },
  ],
};

export const navbarContent = {
  Logo,
};
