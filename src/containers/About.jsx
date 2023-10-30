import { Container, Grid, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import Title from "../components/Title";
import { AboutContent } from "../utils/content";

const { top, bottom } = AboutContent;

const About = () => {
  const [tabValue, setTabValue] = useState(0);

  return (
    <Container sx={{ mt: { xs: 15, md: 20, lg: 25 } }}>
      {/* TOP */}
      <Grid container spacing={10} flexWrap="wrap-reverse" alignItems="center">
        {/* Left */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }} id="about">{top.title}</Title>

            <Typography variant="body2" color="text.secondary" sx={{ pb: 2 }}>
              {top.subtitle}
            </Typography>
          </Stack>
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <img
            src={top.image}
            style={{ width: "100%", objectFit: "contain", borderRadius: '25px', boxShadow: '0px 0px 50px 15px #1261cb' }}
          />
        </Grid>
      </Grid>

      {/* BOTTOM */}

      <Grid
        container
        spacing={10}
        flexWrap="wrap-reverse"
        alignItems="center"
        sx={{ mt: { xs: 10, md: 15 } }}
      >
        {/* Left */}
        <Grid item xs={12} md={6}>
          <img
            src={bottom.TABS[tabValue].image}
            style={{ width: "100%", objectFit: "contain", borderRadius: '50px', boxShadow: '0px 0px 50px 15px #1261cb' }}
          />
        </Grid>

        {/* Right */}
        <Grid item xs={12} md={6}>
          <Stack spacing={2} sx={{ maxWidth: 480 }}>
            <Title variant={{ xs: "h3", md: "h2" }} id="robots">{bottom.title}</Title>

            <Tabs
              value={tabValue}
              onChange={(e, v) => setTabValue(v)}
              variant="scrollable"
              scrollButtons="auto"
            >
              {bottom.TABS.map(({ name }) => (
                <Tab
                  label={name}
                  key={name}
                  sx={{
                    minWidth: 60,
                    "&.Mui-selected": { color: "text.primary" },
                  }}
                />
              ))}
            </Tabs>

            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ pb: 2, minHeight: 70 }}
              style={{ whiteSpace: 'pre-line' }}
            >
              {bottom.TABS[tabValue].subtitle}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
