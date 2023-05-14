import { Container, Grid, Stack, Typography, Button } from "@mui/material";
import React from "react";
import Title from "../components/Title";

const Section10 = () => {
  return (
    <Container maxWidth="md" sx={{ mt: { xs: 10, md: 20, lg: 25 } }}>
      <Title
        variant={{ xs: "h3", md: "h2" }}
        sx={{ textAlign: "center", mb: { xs: 5 } }}
        id="contact"
      >
        Contact Us
      </Title>

      <Grid
        container
        spacing={1}
        justifyContent="center"
      >
        <Stack
          direction="column"
          spacing={1}
        >
        <Typography
          variant="body1"
          color="text.secondary"
          style={{ whiteSpace: 'pre-line' }}
          textAlign="center"
        >
          We're available at
        </Typography>
        <Button variant="body1" color="primary" href={"mailto:bellarminecombatrobotics@gmail.com"}>
          bellarminecombatrobotics@gmail.com
        </Button>
      </Stack>
    </Grid>
    </Container >
  );
};

export default Section10;
