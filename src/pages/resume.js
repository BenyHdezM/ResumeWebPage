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
        <Col md={7}>
          <Container>
            <h1>Benito Hernandez Morales</h1>
            <p>
              Sr. FullStack .Net Web Developer
            </p>
          </Container>
        </Col>
        <Col md={2}>
          <a href='http://benyhdez.com:4000/s/pJNw2PJi86gLABE'> Dowload The Latest Version in PDF</a>
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
              <ListGroup.Item>HTML5</ListGroup.Item>
              <ListGroup.Item>CSS3</ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>API Service Technologies</b>
              <ListGroup.Item><a href='https://dotnet.microsoft.com/en-us/download'>.NET (Core / Framework)</a></ListGroup.Item>
              <ListGroup.Item><a href='https://nestjs.com/'>NestJs</a></ListGroup.Item>
              <ListGroup.Item><a href='https://jquery.com/'>JQuery</a></ListGroup.Item>
              <ListGroup.Item><a href='https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX'>AJAX</a></ListGroup.Item>
              <ListGroup.Item><a href='https://restfulapi.net/introduction-to-json/'>JSON</a></ListGroup.Item>
              <ListGroup.Item><a href='https://en.wikipedia.org/wiki/SOAP'>SOAP</a></ListGroup.Item>
              <ListGroup.Item><a href='https://restfulapi.net/'>REST</a></ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Framework</b>
              <ListGroup.Item><a href='https://angular.io/'>Angular</a></ListGroup.Item>
              <ListGroup.Item><a href='https://reactjs.org/'>ReactJs</a></ListGroup.Item>
              <ListGroup.Item><a href='https://dotnet.microsoft.com/en-us/apps/aspnet'>ASP.NET</a></ListGroup.Item>
              <ListGroup.Item><a href='https://react-bootstrap.github.io/'>Bootstrap</a></ListGroup.Item>
              <ListGroup.Item><a href='https://wordpress.com/'>Wordpress</a></ListGroup.Item>
              <ListGroup.Item><a href='https://cakephp.org/'>CakePhp</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.drupal.org/'>Drupal</a></ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>DataBase</b>
              <ListGroup.Item><a href='https://www.microsoft.com/en-us/sql-server/'>MS SQL Server</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.mysql.com/'>MySQL</a></ListGroup.Item>
              <ListGroup.Item><a href='https://mariadb.org/'>MariaDB</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.mongodb.com/'>MongoDB</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.postgresql.org/'>PostgreSQL</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.sqlite.org/index.html'>SQLite</a></ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Operating System and Container</b>
              <ListGroup.Item><a href='https://en.wikipedia.org/wiki/Linux'>GNU/Linux (Unix Systems)</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.docker.com/resources/what-container/'>Docker</a></ListGroup.Item>
              <ListGroup.Item><a href='https://en.wikipedia.org/wiki/Windows_Server'>Windows Desktop/Server</a></ListGroup.Item>
            </ListGroup>

            <ListGroup variant="flush">
              <b>Version Control</b>
              <ListGroup.Item><a href='https://git-scm.com/'>GIT</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.nongnu.org/cvs/'>CVS</a></ListGroup.Item>
              <ListGroup.Item><a href='https://subversion.apache.org/'>SVN</a></ListGroup.Item>
              <ListGroup.Item><a href='https://www.perforce.com/solutions/version-control'>Perforce</a></ListGroup.Item>
            </ListGroup>

          </ListGroup>
        </Col>
        <Col md={9}>
          <h3 className="my-3">Professional Experience:</h3>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h6>Jun 2022 - Present</h6>
              <h6>Comcast Business</h6>
              <h5>Sr. Automation Engineer / FullStack .Net ReactJs</h5>
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
              <h5>Sr. FullStack .Net ReactJs Web Developer</h5>
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
              <h5>Sr. FullStack .Net Angular Web Developer</h5>
              <p>The aim was development of Customer Analytic Page and Web API, using standard Microsoft technologies and develop the UI from scratch using a mock
                as a reference and Angular 8, working with the Agile methodology having short PBI, Scrum daily meeting and worked with BDD Unit Test scenarios,
                all the code Review was handled by Pull Request using GIT and Azure DevOps Repos
                <br />
                <br />
                Environment: Web API, C#, HTML, CSS, GIT, SQL Server, TypeScript, .Net Core, Azure DevOps, Entity Framework, Visual Studio Pro, Visual Studio Code,
                Nuget,  Angular, Rest, NodeJS, SQL Server Management Studio.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Jan 2019 – Jan 2020<br />Check Into Cash</h6>
              <h5>Sr. FullStack .Net Angular Web Developer</h5>
              <p>Check Into Cash is a financial services retailer that operates as a Direct Lender, offering short-term loans to its clients. It also provides
                check cashing, payday loans and cash advances. The system is a portal for financial control. The aim was development of company's e-commerce website
                and reporting tools. To use standard Microsoft technologies and integrating with many 3rd party tools and applications.
                <br />
                <br />
                Environment: Web Services, C#, HTML, CSS, GIT, SQL Server, TypeScript, .Net Core, Azure DevOps, ADO.NET, Entity Framework, Stored Procedures,
                Visual Studio Pro, Visual Studio Code, Nuget,  Angular, Rest, Postman, NodeJS, DBeaver,  SQL Server Management Studio.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>May 2017 – January 2019<br />Becton, Dickinson and Company</h6>
              <h5>C++,VB6 and .Net Developer</h5>
              <p>Becton, Dickinson and Company is an American medical technology company that manufactures and sells medical devices, instrument systems,
                and reagents. BD also provides consulting and analytics services in certain geographies. The project was to update applications and compile them on
                Visual Studio 2017. Give new configurations and features implemented on the product called CIISafe DoD Version.
                <br />
                <br />
                Environment: ADO.NET, C#, Visual Studio 2017 Pro, C++, MFC, SQL, VB6, Vmware, Perforce, OpenGL, SSMS. HTML, CSS, JavaScript, Angular.</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;


