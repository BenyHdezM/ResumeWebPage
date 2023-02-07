import logo from '../assets/logo.png';
import '../App.css';
import Menu from "./menu";
import '../css/header.css';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
    return (
        <header className="header faso-header">
            <Container>
                <Row>
                    <Col md={12}>
                        <div className="logo faso-nav-heading">
                            <a href="http://www.benyhdez.com/">
                                <img class="center" src={logo} alt="Benito Hdez M" title="Benito Hdez M" />
                                </a>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Menu />
                </Row>
            </Container>
        </header>
    );
}

export default Header;
