import {
  Box,
  Container,
  Divider,
  IconButton,
  Typography,
} from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import OutlinedButton from "../Buttons/OutlinedButton";
import Title from "../Title";
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{ pb: 5 }}
        >
          <Typography variant="body2" color="text.secondary">
            Bellarmine Combat Robotics Competition
          </Typography>
          <Container/>
          <IconButton href={"https://www.instagram.com/bcrcbots/"}>
            <InstagramIcon />
          </IconButton>
          <IconButton href={"https://www.youtube.com/@bcrcbots"}>
            <YouTubeIcon />
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
