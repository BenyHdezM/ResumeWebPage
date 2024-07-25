import React from "react";
import { Button, Container, Alert, Row, Col } from "react-bootstrap";
import "../css/contact.css";
import { FaCalendar, FaTelegram, FaLinkedin } from 'react-icons/fa';


const ContactMe = () => {
    return (
        <Container>
            <Row className="text-left my-5">
                <Col md={3}>
                    <p>
                        <b>Email:</b> beny_hm@hotmail.com <br />
                        <b>Phones:</b>
                        <br />
                        <b>USA:</b> +1 425 233 7992
                        <br />
                        <b>MEX:</b> +52 229 246 1207
                        <br />
                    </p>
                    <p>
                        <b>Social Networks:</b>
                        <br />
                        <a href="https://t.me/BennyHdez" >
                            <FaTelegram className="me-2" size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/benyhm/" >
                            <FaLinkedin className="me-2" size={24} />
                        </a>
                        <br />
                    </p>
                </Col>
                <Col md={9}>
                    <p className="text-justify">
                        <h6>
                            <b>Thank you for considering booking an appointment with me.</b>
                            <br />Scheduling in advance allows me to provide better service by giving you my full attention and being well-prepared. It also helps me manage my workload and
                            respect the privacy of my current clients. If you have any questions or concerns, please feel free to reach out to me via email or the contact form on my website.
                            <br />
                            <br />
                            As a reminder, I do not answer phone calls without an appointment, so booking in advance is the best way to ensure that we have a productive conversation. I appreciate your understanding and look forward to
                            speaking with you at our scheduled time. Thank you again for considering my services.
                        </h6>
                    </p>
                    <Button href="https://nextcloud.benyhdez.com/index.php/apps/appointments/pub/gVV2XJNTwQsmD9wn/form" variant="primary">
                        <FaCalendar className="me-2" />
                        Book Now
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;
