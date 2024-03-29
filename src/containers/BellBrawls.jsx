import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import OutlinedButton from "../components/Buttons/OutlinedButton";
import Title from "../components/Title";
import { BellBrawlsContent } from "../utils/content";
import YouTubeIcon from '@mui/icons-material/YouTube';

const { BannerBgImage, BannerBgImageMobile, title, subtitle } = BellBrawlsContent;

const BellBrawls = () => {
  const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Container sx={{ mt: { xs: 10, md: 20, lg: 25 } }} id="bellbrawls">
      <Box
        sx={{
          position: "relative",
          background: `url(${BannerBgImageMobile})`,
          backgroundSize: "cover",
          py: 5,
          borderRadius: "30px",
          [theme.breakpoints.up("sm")]: {
            "&::before": {
              content: '""',
              position: "absolute",
              inset: 0,
              borderRadius: "30px",
              border: "1px solid transparent",
              background:
                "linear-gradient(120deg,#5f5f61,transparent) border-box",
              WebkitMask:
                "linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exlude",
            },
          },
          [theme.breakpoints.up("md")]: {
            background: `url(${BannerBgImage})`,
            backgroundPosition: "right",
            backgroundSize: "cover",
            py: 0,
          },
        }}
      >
        <Grid container flexWrap="wrap-reverse" sx={{ px: { xs: 5, md: 8 } }}>
          <Grid item xs={12} md={5} lg={4}>
            <Stack spacing={2} justifyContent="center" sx={{ height: "100%" }}>
              <Title variant={{ xs: "h3", md: "h2" }}>{title}</Title>

              <Typography variant="body2" color="text.secondary" sx={{ pb: 3 }} style={{whiteSpace: 'pre-line'}}>
                {subtitle}
              </Typography>
              <Grid container rowSpacing={1} spacing={0}>
                <OutlinedButton
                  startIcon={<YouTubeIcon />}
                  fit={true}
                  // fullWidth={isMobile}
                  sx={{ height: 48 }}
                  href="https://youtube.com/playlist?list=PLCGo_v3ZMduxlpF7wl21AiZgtTqLeZKe5"
                >
                  Watch
                </OutlinedButton>
                <Box sx={{ m: 1 }} />
                <OutlinedButton
                  arrow
                  fit={true}
                  // fullWidth={isMobile}
                  sx={{ height: 48 }}
                  // disabled
                  href="https://www.robotcombatevents.com/events/1206"
                >
                  Sign up
                </OutlinedButton>
              </Grid>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7} lg={8}>
            <Box sx={{ height: 400 }} />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default BellBrawls;
