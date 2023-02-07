import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import profile from '../assets/profile.jpg'

const Resume = () => {
  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col md={3}>
          <Image src={profile} roundedCircle fluid />
        </Col>
        <Col md={9}>
          <Container>
            <h1>Benito Hernandez Morales</h1>
            <p>
              Sr. FullStack .Net Web Developer
            </p>
          </Container>
        </Col>
      </Row>
      <Row>
        <Col md={3}>
          <h3 className="my-3">Technical Skills:</h3>
          <ListGroup variant="flush">
            <ListGroup variant="flush">
              <b>Programming Languages</b>
              <ListGroup.Item>C/C++</ListGroup.Item>
              <ListGroup.Item>C#</ListGroup.Item>
              <ListGroup.Item>TypeScript</ListGroup.Item>
              <ListGroup.Item>JavaScript</ListGroup.Item>
              <ListGroup.Item>Python</ListGroup.Item>
              <ListGroup.Item>Java</ListGroup.Item>
              <ListGroup.Item>VB6</ListGroup.Item>
              <ListGroup.Item>PHP</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Technologies and service API’s</b>
              <ListGroup.Item>.NET</ListGroup.Item>
              <ListGroup.Item>ReactJs</ListGroup.Item>
              <ListGroup.Item>ASP.NET</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Frameworks</b>
              <ListGroup.Item>Angular</ListGroup.Item>
              <ListGroup.Item>ReactJs</ListGroup.Item>
              <ListGroup.Item>ASP.NET</ListGroup.Item>
              <ListGroup.Item>Bootstrap</ListGroup.Item>
              <ListGroup.Item>Wordpress</ListGroup.Item>
              <ListGroup.Item>CakePhp</ListGroup.Item>
              <ListGroup.Item>Drupal</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>DataBases</b>
              <ListGroup.Item>MS SQL Server</ListGroup.Item>
              <ListGroup.Item>MySQL</ListGroup.Item>
              <ListGroup.Item>MariaDB</ListGroup.Item>
              <ListGroup.Item>SQLite</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
              <ListGroup.Item>PostgreSQL</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Operating Systems</b>
              <ListGroup.Item>GNU/Linux (Unix Systems)</ListGroup.Item>
              <ListGroup.Item>Windows Desktop/Server</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>DataBases</b>
              <ListGroup.Item>MS SQL Server</ListGroup.Item>
              <ListGroup.Item>MySQL</ListGroup.Item>
              <ListGroup.Item>MariaDB</ListGroup.Item>
              <ListGroup.Item>SQLite</ListGroup.Item>
              <ListGroup.Item>MongoDB</ListGroup.Item>
              <ListGroup.Item>PSQL</ListGroup.Item>
            </ListGroup>

          </ListGroup>
        </Col>
        <Col md={9}>
          <h3 className="my-3">Professional Experience:</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Jun 2022 - Present</h6>
              <h6>Comcast Business</h6>
              <h5>Sr. Automation Engineer</h5>
              <p>Development and support for Admin Portal Pages and Web APIs, using NestJS technologies and working on the UI using Angular as a front-end technology,
                working with the Agile methodology having short PBI, Scrum daily meeting, all the code Review was handled by Pull Request using GIT and GitHub,
                and Rally as AGILE Project Management Tool.
                <br />
                <br />
                Environment: Web API, JavaScript, HTML, CSS, GIT, MongoDB, NestJs, Visual Studio Code, npm, nvm, Angular, NodeJS.</p>
              <p></p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Sep 2020 – Jun 2022<br />Aptude Mex - USXpress</h6>
              <h5>FullStack .Net React Web Developer</h5>
              <p>The aim was development and support for Customer and Admin Portal Pages and Web APIs, using standard Microsoft technologies and working on the UI
                using React as a front-end technology, working with the Agile methodology having short PBI, Scrum daily meeting and worked with Unit Test scenarios,
                all the code Review was handled by Pull Request using GIT and Azure DevOps Repos and Pipelines for all CI/CD
                <br />
                <br />
                Environment: Web API, C#, HTML, CSS, GIT, SQL Server, JavaScript, .Net Core, Azure DevOps, Entity Framework, Visual Studio Pro, Visual Studio Code,
                Nuget,  Angular, Rest, NodeJS, SQL Server Management Studio, Mongo DB</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Jan 2020 – Sep 2020<br />Microsoft</h6>
              <h5>Sr. FullStack .Net React Web Developer</h5>
              <p>The aim was development and support for Customer and Admin Portal Pages and Web APIs, using standard Microsoft technologies and working on the UI
                using React as a front-end technology, working with the Agile methodology having short PBI, Scrum daily meeting and worked with Unit Test scenarios,
                all the code Review was handled by Pull Request using GIT and Azure DevOps Repos and Pipelines for all CI/CD
                <br />
                <br />
                Environment: Web API, C#, HTML, CSS, GIT, SQL Server, JavaScript, .Net Core, Azure DevOps, Entity Framework, Visual Studio Pro, Visual Studio Code,
                Nuget,  Angular, Rest, NodeJS, SQL Server Management Studio, Mongo DB</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Jan 2020 – Sep 2020<br />Microsoft</h6>
              <h5>Sr. FullStack .Net React Web Developer</h5>
              <p>The aim was development of Customer Analytic Page and Web API, using standard Microsoft technologies and develop the UI from scratch using a mock
                as a reference and Angular 8, working with the Agile methodology having short PBI, Scrum daily meeting and worked with BDD Unit Test scenarios,
                all the code Review was handled by Pull Request using GIT and Azure DevOps Repos
                <br />
                <br />
                Environment: Web API, C#, HTML, CSS, GIT, SQL Server, TypeScript, .Net Core, Azure DevOps, Entity Framework, Visual Studio Pro, Visual Studio Code,
                Nuget,  Angular, Rest, NodeJS, SQL Server Management Studio.</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;


