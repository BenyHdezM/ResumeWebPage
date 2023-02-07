import '../css/menu.css';
import React, { useState, useEffect } from "react";
import { Navbar, Nav } from "react-bootstrap";


const Menu = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.pageYOffset > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        };
    }, []);


    return (
        <Navbar bg="light" fixed={isScrolled ? "top" : ""}>
            <Nav className='nav' defaultActiveKey="/home" as="ul">
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
        </Navbar>
    );
}

export default Menu;


