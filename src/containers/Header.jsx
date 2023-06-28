import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
  IconButton,
} from "@mui/material";
import React from "react";
import { HeaderContent } from "../utils/content";
import useMeasure from "react-use-measure";
import Title from "../components/Title";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ForumIcon from '@mui/icons-material/Forum';

const {
  MainBG,
  Foreground,
  ForegroundR,
  Subject,
  Detail,
  title,
  subtitle,
} = HeaderContent;

const CustomButton = ({ children, ...props }) => (
  <Button
    variant="outlined"
    sx={{
      borderRadius: 4,
      color: "text.primary",
      borderColor: "text.primary",
      height: 58,
      px: 2,
    }}
    {...props}
  >
    {children}
  </Button>
);

const Header = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [ref, { height }] = useMeasure();

  const scroll = (ref) => {
    document.querySelector(ref).scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <Box sx={{ width: "100%" }} id="top">
      <Box sx={{ position: "fixed", zIndex: -10, top: 0, left: 0, right: 0 }}>
        <img src={MainBG} style={{ width: "100%" }} />
      </Box>

      <Box
        ref={ref}
        sx={{
          position: "absolute",
          width: "100%",
          zIndex: -1,
          top: 0,
          left: 0,
          right: 0,
        }}
      >
        <img src={MainBG} style={{ width: "100%", opacity: 0 }} />

        <img
          src={Detail}
          style={{
            position: "absolute",
            top: "30px",
            right: "15%",
            width: "500px",
          }}
        />

        <Hidden mdDown>
          <img
            src={Foreground}
            style={{
              position: "absolute",
              width: "100%",
              right: 0,
              left: 0,
              bottom: "13%",
            }}
          />
        </Hidden>

        <img
          src={ForegroundR}
          style={{
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            backgroundSize: "cover",
          }}
        />

        <img
          src={Subject}
          style={{
            position: "absolute",
            height: "38%",
            right: "14%",
            bottom: "45%",
            transform: "rotate(7deg)",
          }}
        />

        <Box
          sx={{
            bgcolor: "background.default",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "800px",
            top: `calc(${height}px - 13%)`,
          }}
        ></Box>
      </Box>

      <Container
        sx={{
          height: "80vh",
          mt: 8,
          [theme.breakpoints.up("md")]: { mt: 6 },
        }}
      >
        <Stack sx={{ height: "100%" }} justifyContent="center">
          <Title
            variant={{ xs: "h3", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {title}
          </Title>

          <Title
            variant={{ xs: "h4", sm: "h3", md: "h2" }}
            sx={{ fontWeight: 500, letterSpacing: "0.05em", mb: 5 }}
          >
            {subtitle}
          </Title>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems="center"
            spacing={4}
          >
            <CustomButton fullWidth={isSmallScreen}>
              <Stack sx={{ textAlign: "left" }}>
                <Typography variant="h5" onClick={() => scroll("#bellbrawls")}>Bell Brawls</Typography>
              </Stack>
            </CustomButton>
            <Stack direction={"row"} spacing={5}>
              <IconButton href={"https://www.instagram.com/bcrcbots/"} >
                <InstagramIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton href={"https://www.youtube.com/@bcrcbots"}>
                <YouTubeIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton href={"https://discord.gg/hzvCajJf"}>
                <ForumIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Stack>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
