import { Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Title from "../components/Title";
import { sponsorsTeamContent } from "../utils/content";
import { Link } from 'react-router-dom';

const { SPONSORS } = sponsorsTeamContent;

const Sponsors = () => {
    return (
        <Container maxWidth="md" sx={{ mt: { xs: 10, md: 20, lg: 15 } }}>
            <Title
                variant={{ xs: "h3", md: "h2" }}
                sx={{ textAlign: "center", mb: { xs: 0 } }}
                id="sponsors"
            >
                Sponsors
            </Title>
            &nbsp;
            <Typography
                variant="h5"
                color="text.secondary"
                style={{ whiteSpace: 'pre-line' }}
                textAlign="center"
            >
                Team & Event Sponsors
            </Typography>

            <Grid
                container
                spacing={5}
                justifyContent="center"
                sx={{ px: { xs: 0, md: 5, lg: 0 } }}
            >
                {SPONSORS.map(({ image, link }) => (
                    <Grid
                        item
                        xs={6}
                        md={3}
                        sx={() => ({
                            cursor: "pointer",
                            "& :hover": {
                                "& img": {
                                    transform: "scale(1.2)",
                                    transition: "transform .3s",
                                },
                                "& p": { color: "text.primary", transition: "all .3s ease-in" },
                            },
                        })}
                    >
                        <Stack alignItems="center">
                            <Link to={link}>
                                <img
                                    src={image}
                                    style={{ width: "100%", objectFit: "contain" }}
                                />
                            </Link>
                        </Stack>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default Sponsors;