import React from 'react';
import { Container, Row, Col, Image, ListGroup } from 'react-bootstrap';
import profile from '../assets/profile.jpg';
import doc_download from '../assets/doc_download.png';
import "../css/resume.css";

const Resume = () => {
  return (
    <Container>
      <Row className="align-items-center my-5">
        <Col md={3}>
          <Image className="picture-profile" src={profile} roundedCircle fluid />
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
          <div className="shadow-box">
            <a href='https://nextcloud.benyhdez.com/s/ARoNNiJimCM9dEJ/download/BenitoHernandez_RESUME.docx'>
              Dowload Latest Version
              <Image src={doc_download} fluid />
            </a>
          </div>
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
              <ListGroup.Item>Kotlin</ListGroup.Item>
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
              <h6>Jul 2023 - Present</h6>
              <h6>Applied Systems · Full-time</h6>
              <h5>Sr. Software Engineer</h5>
              <p> In my current role, I work on supporting and enhancing a legacy VB application within the insurance domain. This includes troubleshooting, maintenance, and the implementation of new features to improve functionality and user experience.
                <br />
                I also support microservices using technologies such as .NET and React, developing efficient and scalable solutions to address complex technical challenges. My work involves utilizing a range of tools, such as Visual Studio, Visual Studio Code, TFS, GitHub, MS SQL Management Studio, Cypress, and Jira, to ensure seamless collaboration and high-quality outcomes.
                <br />
                <br />
                Environment: Web APIs, JS, HTML, CSS, GIT, MS SQL, NodeJs, Visual Studio Code, npm, nvm, ReactJs, VB, Visual Studio, TFS.</p>
              <p></p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Jun 2022 - May 2023</h6>
              <h6>Comcast Business</h6>
              <h5>Sr. Automation Engineer / FullStack .Net ReactJs</h5>
              <p>Development and support for Admin Portal Pages and Web APIs, using NestJS technologies and working on the UI using Angular as a front-end
                technology, working with the Agile methodology having short PBI, Scrum daily meeting, all the code Review was handled by Pull Request using GIT
                and GitHub, and Rally as AGILE Project Management Tool.
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
            <ListGroup.Item>
              <h6>Aug 2016 – May 2017<br />Marathon Group Mexico</h6>
              <h5>FullStack .Net Developer</h5>
              <p>Consuming Acumatica ERP SOAP webservices into a Web Portal made from scratch, using technologies like CakePHP, HTML, CSS, JS and Bootstrap,
                given a User friendly interface to consume Acumatica's Services to make the data insertions easier to the sellers.
                <br />
                <br />
                Environment: Visual Studio Code, PHP, CakePhp, MVC, Linux Server, Windows Server, MS SQL, MySQL, SOAP, HTML5, CSS3, JS, Bootstrap, GIT, ERP,
                Acumatica, .Net Framework.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Sep 2015 – Aug 2016<br />General Electric</h6>
              <h5>FullStack .Net Developer</h5>
              <p>Development, Consulting, Design and Supporting for GE's software, migrations of old applications using VB6 and C++ 6. Developing new solutions
                in C# using ADO.NET to obtain information from the MS SQL database or update it. Upgrade old applications made in VB6 removing Crystal Report
                module and implement a free solution.
                <br />
                <br />
                Environment: C#, VB6, C++, MS SQL, Windows Server 2003 and 2008, Visual Studio 2010, Remote Desktop, VPS,  SQL Server Management Studio,
                Crystal Report, ADO.NET, ASP.Net.</p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h6>Jul 2014 – Sep 2015<br />GameLoft</h6>
              <h5>C++, .Net, FullStack Developer</h5>
              <p>Developing and debugging of the E-Shop sites corresponding with each carrier, including billing, transactions, notifications, SMS and Web services.
                VideoGame programmer for platforms like iOS, android and windows phones. Working on Dungeon Hunter 5 project in the area of porting to windows phone.
                <br />
                <br />
                Environment: C#, C++, .NET, MySQL, Visual Studio 2015, GIT, OpenGL, HTML, CSS, cURL, PhpStorm, Php, JavaScript, PhpMyAdmin.</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Resume;


