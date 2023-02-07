import Nav from 'react-bootstrap/Nav';
import './menu.css';


function Menu() {
    return (
        <div className="col-1-1 text-center text-uppercase">
            <Nav className='sf-menu justify-content-center' defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/">Resume</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/aboutMe">About Me</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/projects">Personal Projects</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/videos">Videos</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/contact">Contact Me</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Menu;


