import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import Title from "../Title";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CodeIcon from '@mui/icons-material/Code';

const LinkSection = ({ title, links }) => (
  <Stack spacing={2.5}>
    <Title>{title}</Title>

    {links.map(({ title }) => (
      <Typography
        key={title}
        variant="body2"
        color="text.secondary"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "text.primary",
          },
        }}
      >
        {title}
      </Typography>
    ))}
  </Stack>
);

const Footer = () => {
  return (
    <Box>
      <Divider sx={{ m: 5 }} />
      <Container>
        <Stack
          direction={{ xs: "column", md: "column", lg: "row" }}
          justifyContent="flex-start"
          alignItems="center"
          spacing={2}
          sx={{ pb: 5 }}
        >
          <Typography variant="body2" color="text.secondary">
            Bellarmine Maker Lab
          </Typography>
          <Typography variant="body2" color="text.secondary">
            960 W Hedding St, San Jose, CA 95126
          </Typography>
          <Container />
          <Stack direction={"row"} spacing={2}>
            <IconButton href={"https://github.com/RooRoo6080/bcrc-website"}>
              <CodeIcon />
            </IconButton>
            <IconButton href={"https://www.instagram.com/bcrcbots/"}>
              <InstagramIcon />
            </IconButton>
            <IconButton href={"https://www.youtube.com/@bcrcbots"}>
              <YouTubeIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
