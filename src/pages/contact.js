import React, { useState } from "react";
import { Form, Button, Container, Alert, Row, Col } from "react-bootstrap";
import "../css/contact.css";

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [showAlert, setShowAlert] = useState(false);

    const { name, email, message } = formData;

    const onChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        // Add code for sending the form data to a server or an API here
        setShowAlert(true);
    };

    return (
        <Container>
            <Row>
            <h1 className="text-center mt-3">Contact Me</h1>
            <p className="text-center">
                Email: beny_hm@hotmail.com <br />
                Phones:
                <br />
                USA: +1 425 233 7992
                <br />
                MEX: +52 229 246 1207
            </p>
            <br />
            {showAlert && (
                <Alert variant="success">
                    Your message has been sent successfully!
                </Alert>
            )}
            </Row>
            <Row>
            <h1 className="text-center mt-2">Or Leave A Message</h1>
                <Col className="centerCol mb-5">
                <Form onSubmit={(e) => onSubmit(e)}>
                    <Form.Group>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows="5"
                            name="message"
                            value={message}
                            onChange={(e) => onChange(e)}
                            required
                        />
                    </Form.Group>
                    <br />
                    <Button type="submit">Submit</Button>
                </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;
