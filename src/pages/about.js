import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import profile from '../assets/profile.jpg'

const About = () => {
    return (
        <Container>
            <Row className="align-items-center my-5">
                <Col md={3}>
                    <Image src={profile} roundedCircle fluid />
                </Col>
                <Col md={9}>
                    <Container>
                        <p>
                            Benito Hernandez Morales is a highly skilled and knowledgeable software engineer with a passion for delivering innovative and effective
                            solutions. With 8+ years of experience in the industry, Benito has developed a strong understanding of the software development life cycle
                            and the various technologies and tools involved in the creation of top-quality software. He is an expert in multiple programming languages,
                            including C#, C/C++, JS, TS, PHP, Java, Python, BASH, Kotlin, VB6, etc, and has a proven track record of delivering complex projects on time and within budget.
                            <br />
                            In addition to his technical abilities, Benito is a highly motivated and dedicated professional, with strong communication and
                            interpersonal skills. He is able to effectively collaborate with cross-functional teams, including designers, business stakeholders,
                            and other developers, to deliver the best possible outcomes. Whether working on a new feature, fixing a bug, or optimizing existing code,
                            Benito takes pride in delivering high-quality software that meets the needs of users and exceeds their expectations.
                            <br />
                            Overall, Benito is a valuable asset to any development team, and his passion for software engineering and commitment to delivering
                            outstanding results make him a highly sought-after professional in the industry.
                        </p>
                    </Container>
                </Col>
            </Row>
        </Container>

    );
};

export default About;


