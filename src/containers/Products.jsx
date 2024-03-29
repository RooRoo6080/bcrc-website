import { Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import ServiceCard from "../components/Cards/ServiceCard";
import Title from "../components/Title";
import { ProductsContent } from "../utils/content";

const { title, subtitle, ITEMS } = ProductsContent;

const Products = () => {
  return (
    <Container sx={{ mt: { xs: 10, md: 10, lg: 25 } }}>
      <Title variant={{ xs: "h3", md: "h2" }} sx={{ mb: 2, textAlign: "center"}} id="products" >
        {title}
      </Title>

      <Typography
        variant="body2"
        color="text.secondary"
        sx={{ mb: { xs: 5, md: 1 } }}
        style={{ whiteSpace: 'pre-line' }}
      >
        {subtitle}
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        {ITEMS.map((item) => (
          <Grid item xs={12} md={6} key={item.title}>
            <ServiceCard {...item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Products;
