import {
  AppBar,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React from "react";
import { NAVBAR_HEIGHT } from "../../constants";
import useScrollPosition from "../../hooks/useScrollPosition";
import { navbarContent } from "../../utils/content";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const { Logo } = navbarContent;

const LinkButton = ({ children, ...props }) => (
  <Stack
    direction="row"
    alignItems="center"
    spacing={0.2}
    sx={{
      cursor: "pointer",
      color: "text.secondary",
      "&:hover": { color: "text.primary" },
    }}
    {...props}
  >
    {children}
  </Stack>
);

const Navbar = () => {
  const scrollPosition = useScrollPosition();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("lg"));

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
          <img src={Logo} onClick={() => scroll("#top")} style={{ height: "100%", objectFit: "fit" }} />

          {/* Links */}
          {!isMobile && (
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="right"
              spacing={6}
              sx={{ flex: 1 }}
              flexWrap="wrap"
            >
              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#bellbrawls")}>Bell Brawls</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#about")}>About Us</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#robots")}>Robots</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#products")}>Rentals</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#sponsors")}>Sponsors</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>

              <LinkButton>
                <Typography variant="body2" onClick={() => scroll("#contact")}>Contact Us</Typography>
                {/* <KeyboardArrowDownIcon fontSize="small" /> */}
              </LinkButton>
            </Stack>
          )}
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Navbar;
