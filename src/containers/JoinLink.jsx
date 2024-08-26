import React from 'react';
import { Box } from "@mui/material";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useNavigate } from 'react-router-dom';

const JoinLink = () => {
    const backgroundColor = '#06070a';
    const textColor = '#f8f9fa';
    const primaryColor = '#ffffff';
    const secondaryColor = '#1261cb'; // Blue

    const navigate = useNavigate();

    const handleJoin = () => {
        navigate('/join');
    };

    return (
        <div>
            <Box sx={{ bgcolor: "background.default", position: "relative" }}>
                <Container fluid style={{ backgroundColor, color: textColor, fontFamily: 'Montserrat, sans-serif', paddingTop: '40px', paddingBottom: '40px' }}>
                    <Row className="mb-5">
                        <Col md={10} className="mx-auto text-center">
                            <div style={{ borderRadius: '30px', boxShadow: '0px 0px 50px 15px #1261cb' }}>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1 }}
                                    className="shadow-lg p-4"
                                    style={{ textAlign: 'center', borderRadius: "30px" }}
                                >
                                    <h2 className="display-6" style={{ fontWeight: 600, color: primaryColor }}>Join Us</h2>
                                    <p style={{ fontWeight: 400 }}>
                                        Interested in joining? Take a look at some important dates, a few simple requirements, and the next steps you need to take to join.
                                    </p>
                                    <p style={{ fontSize: '12px', color: '#4c4c4c' }}>
                                        You must be a current Bellarmine College Preparatory student to join us. Bell Brawls is separate and is open to all competitors and spectators.
                                    </p>
                                    <Button className="animated-button" variant="outline-light" onClick={handleJoin} target="_blank">
                                        Join<KeyboardArrowRightIcon fontSize="small" />
                                    </Button>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Box>
        </div>
    );
};

export default JoinLink;
