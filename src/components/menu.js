import Nav from 'react-bootstrap/Nav'
import './menu.css'


function Menu() {
    return (
        <div className="col-1-1 text-center text-uppercase">
            <Nav className='sf-menu justify-content-center' defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home">About</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Paintings &amp; Prints</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Lessons 2022</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Artist Services</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link href="/home">Contact</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default Menu;


