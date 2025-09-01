import React from 'react';
import { Box } from "@mui/material";
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaRobot, FaCalendarAlt, FaTools, FaFighterJet, FaQuestionCircle, FaClipboardList, FaCalendar, FaCalendarDay, FaCalendarWeek } from 'react-icons/fa';
import { motion } from 'framer-motion';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "../components/Navbars/JoinNavbar";
import Header from "../containers/Header";
import Footer from "../components/Footers/MainFooter";
import exhibitionImage from '../assets/images/Join/exhibitions24.png';
import './Join.css';

const JoinPage = () => {
    const backgroundColor = '#06070a';
    const textColor = '#f8f9fa';
    const primaryColor = '#ffffff';
    const secondaryColor = '#1261cb'; // Blue

    return (
        <div>
            <Navbar />
            <Header />
            <Box sx={{ bgcolor: "background.default", position: "relative" }}>
                <Container fluid style={{ backgroundColor, color: textColor, fontFamily: 'Montserrat, sans-serif', paddingTop: '40px', paddingBottom: '40px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="text-center mb-5"
                    >
                        <h1 className="display-3" style={{ fontWeight: 700, color: primaryColor }}>Join the BCRC</h1>
                        <p className="lead" style={{ fontWeight: 500, color: secondaryColor }}>
                            Making competitive robotics accessible to you
                        </p>
                        <p className="lead" style={{ fontWeight: 500, color: "#2c2c2c" }}>
                            * You must be a current Bellarmine College Preparatory student to join
                        </p>
                    </motion.div>
                    <hr />
                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                                style={{ textAlign: 'center' }}
                            >
                                <h2 style={{ fontWeight: 700, color: primaryColor }}>Our Mission</h2>
                                <p style={{ fontWeight: 400 }}>
                                    The BCRC is dedicated to teaching members the fundamentals of robot physics, assembly, and manufacturing by guiding them through the process of designing and building 3-pound robots.
                                </p>
                                <p style={{ fontWeight: 400 }}>
                                    With the help of student mentors, you'll gain hands-on experience using a variety of Maker Lab tools and materials, including PLA plastic, rocket-grade titanium, and ultra-hard steel.
                                </p>
                                <p style={{ fontWeight: 400 }}>
                                    Twice a year, the BCRC hosts Bell Brawls, a combat robotics tournament featuring the best 3-pound robots in Northern California.
                                </p>
                                <Button variant="outline-light" href="https://bcrcbots.com" target="_blank">
                                    Learn more
                                </Button>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                                style={{ textAlign: 'left', border: '1px solid #2c2c2c', borderRadius: "30px" }}
                            >
                                <h2 style={{ fontWeight: 700, color: secondaryColor }}>Important Dates <FaCalendarAlt /></h2>
                                {/* <p style={{ fontWeight: 400 }}>
                                    <strong style={{ color: primaryColor }}>Wednesday, August 28th:</strong> Exhibition fights in the Carney amphitheater during Community Time. Join us to get a taste of the action! <br />
                                    <img src={exhibitionImage} alt="BCRC Robots" style={{ width: '300px' }} className="img-fluid rounded mb-4" />
                                </p> */}
                                <p style={{ fontWeight: 400 }}>
                                    <strong style={{ color: primaryColor }}>CT Tuesday, September 17th:</strong> Mandatory onboarding session where we'll discuss the steps to join and what's required.
                                </p>
                                <p></p>
                                <p style={{ fontWeight: 400 }}>
                                    <strong style={{ color: primaryColor }}>Afterschool Thursday (2:50-4:00), September 19th:</strong> Materials, manufacturing, & machine shop training
                                </p>
                                <p style={{ fontWeight: 400 }}>
                                    <strong style={{ color: primaryColor }}>Afterschool Tuesday (2:50-4:00), September 24th:</strong> CAD, Advanced CAD, & tournaments overview
                                </p>
                                <p style={{ fontWeight: 400 }}>
                                    <strong style={{ color: primaryColor }}>Afterschool Thursday (2:50-4:00), October 3th:</strong> Electronics, safety & robot design principles
                                </p>
                                <p>
                                    These BCRC trainings are mandatory, but if you have a conflict, please email or Slack Reuel.Joseph26@bcp.org so we mark you excused from the training.
                                </p>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                                style={{ textAlign: 'left', border: '1px solid #2c2c2c', borderRadius: "30px" }}
                            >
                                <h2 style={{ fontWeight: 700, color: secondaryColor }}>Training Requirements <FaTools /></h2>
                                <p style={{ fontWeight: 400 }}>
                                    To join BCRC, you'll need to complete a few simple tasks. This is due towards the end of September, but we recommend getting a headstart on them as a few more BCRC-specific trainings will be added at the onboarding.
                                </p>
                                <ul>
                                    <li style={{ fontWeight: 400 }}>Get Maker Lab onboarded</li>
                                    <li style={{ fontWeight: 400 }}>Attend the 3D printing and laser cutter trainings</li>
                                </ul>
                                <p style={{ fontWeight: 400 }}>
                                    These trainings are crucial for gaining access to the tools we use, as well as our communication platform, Slack. Keep an eye on the Maker Lab schedule for onboarding times — there’s generally one every Community Time (CT).
                                </p>
                            </motion.div>
                        </Col>
                    </Row>

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
                                    <h2 className="display-6" style={{ fontWeight: 700, color: primaryColor }}>Get Involved</h2>
                                    <p style={{ fontWeight: 400 }}>
                                        Interested in joining? Fill out our form to let us know you're interested (even if you haven't started or finished the training requirements yet). This isn't an application — everyone is welcome as long as you meet the commitment requirements.
                                    </p>
                                    <Button className="animated-button" variant="outline-light" href="https://forms.gle/pccnbSa4DgdSbpCZ8" target="_blank">
                                        Sign Up
                                    </Button>
                                </motion.div>
                            </div>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                                style={{ textAlign: 'left' }}
                            >
                                <h2 style={{ fontWeight: 700, color: primaryColor }}>Jumpstart Your Experience (Optional)</h2>
                                <p style={{ fontWeight: 400 }}>
                                    If you can't wait to get started, you can also help work on current robots. Just ask for a BCRC leader in the Maker Lab — we're usually there during CT and after school.
                                </p>
                            </motion.div>
                        </Col>
                    </Row>

                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                                style={{ textAlign: 'left', border: '1px solid #2c2c2c', borderRadius: "30px" }}
                            >
                                <h2 style={{ fontWeight: 700, color: secondaryColor }}>Questions <FaQuestionCircle /></h2>
                                <p style={{ fontWeight: 400 }}>
                                    If you have any questions or can't attend the onboarding session, please let us know.<br />We're excited to help you get started and can't wait to see what you'll build with us!
                                </p>
                                <p style={{ fontWeight: 500 }}>
                                    <strong>Contact:</strong> Reuel.Joseph26@bcp.org
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                    <Row className="mb-5">
                        <Col md={10} className="mx-auto">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1 }}
                                className="shadow-lg p-4"
                            >
                                <p style={{ fontWeight: 500 }}>
                                    - The BCRC Leadership Team
                                </p>
                            </motion.div>
                        </Col>
                    </Row>
                </Container>
                <Footer />
            </Box>
        </div>
    );
};

export default JoinPage;
