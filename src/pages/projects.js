import React, { useState, useEffect } from "react";
import { Container, Row, Col, Card, Spinner } from "react-bootstrap";

const Projects = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://api.github.com/users/benyhdezm/repos")
            .then((res) => res.json())
            .then((data) => {
                setProjects(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <Container>
            <h1 className="text-center my-5">My Github Projects</h1>
            {loading ? (
                <Spinner animation="border" role="status">
                    <span className="sr-only">Loading...</span>
                </Spinner>
            ) : (
                <Row>
                    {projects.map((project) => (
                        <Col md={4} className="mb-5">
                            <Card key={project.id}>
                                <Card.Body>
                                    <Card.Title>{project.name}</Card.Title>
                                    <Card.Text>{project.description}</Card.Text>
                                    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                                        View on Github
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            )}
        </Container>
    );
};

export default Projects;
