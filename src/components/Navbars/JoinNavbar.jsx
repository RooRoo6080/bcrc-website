import {
  AppBar,
  Container,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "../../utils/content";
import { useNavigate } from 'react-router-dom';


const { Logo } = navbarContent;

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const navigate = useNavigate();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

  const handleBackToHome = () => {
    navigate('/');
  };

  const scroll = (ref) => {
    document.querySelector(ref).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <AppBar
      elevation={0}
      sx={{
        py: 1,
        height: NAVBAR_HEIGHT,
        bgcolor: scrollPosition > 10 ? "rgba(18,97,203,.5)" : "transparent",
        backdropFilter: scrollPosition > 10 && "blur(50px)",
      }}
    >
      <Container
        sx={{
          [theme.breakpoints.up("lg")]: {
            maxWidth: "1380px!important",
          },
        }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          flexWrap="wrap"
        >
          {/* Logo */}
          <img src={Logo} onClick={handleBackToHome} style={{ height: "100%", objectFit: "fit" }} />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
