import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import profile from '../assets/profile.jpg'
import server from '../assets/server.jpg'
import dockers from '../assets/dockers.png'
import code from '../assets/code.jpeg'

const projects = [
    {
        id: 1,
        title: 'Linux Server at Home',
        description: "Hosting my website on a server in my own home has been a dream come true. With complete control over its performance and security, I can easily make updates and changes. While there are challenges, such as having a reliable internet connection and proper knowledge, the rewards have been immense. It's given me ownership and the freedom to experiment.",
        imageUrl: server,
    },
    {
        id: 2,
        title: 'Using Dockers',
        description: "Running dockers on my server has been a game changer for me. By easily packaging applications with dependencies, it saves me countless hours of configuration and troubleshooting. It allows me to run multiple applications without conflicts and provides scalability by adjusting container resources. It's made managing and deploying applications faster, easier and flexible.",
        imageUrl: dockers,
    },
    {
        id: 3,
        title: 'Network Security',
        description: "I've implemented several security measures on my server, including SSH keys, firewalls, and port forwarding. Using SSH keys for authentication greatly reduces the risk of unauthorized access. Firewalls, both software and hardware, block incoming traffic that doesn't meet specific criteria, which reduces the risk of malicious attacks. Port forwarding is configured to allow only necessary traffic through to specific applications, further reducing the attack surface of my server.",
        imageUrl: code,
    },
];



const About = () => {
    return (
        <Container>
            <Row className="align-items-center my-5">
                <Col md={3}>
                    <Image className='picture-profile mb-3' src={profile} roundedCircle fluid />
                </Col>
                <Col md={9}>
                    <Container>
                        <p>
                            Benito Hernandez Morales is a highly skilled and knowledgeable software engineer with a passion for delivering innovative and effective
                            solutions. With {new Date().getFullYear() - 2014}+ years of experience in the industry, Benito has developed a strong understanding of the software development life cycle
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
            <Row>
                <Container>
                    <Row>
                        {projects.map(project => (
                            <Col key={project.id} xs={12} md={4}>
                                <Card className="my-3">
                                    <Image src={project.imageUrl} rounded  style={{ maxHeight: '232px' }}/>
                                    <Card.Body>
                                        <Card.Title>{project.title}</Card.Title>
                                        <Card.Text>{project.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </Row>
        </Container>


    );
};

export default About;


