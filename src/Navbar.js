
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function CustomNavbar() {
    return (
        <div>
            <Navbar className="firstNavbar" sticky="top">
                <Container style={{ flexWrap: 'wrap' }}>
                    <Col style={{ display: 'flex', justifyContent: "space-around" }}>
                        <div className='divBold'>
                            Landline:
                        </div>
                        <div>
                            034567
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: "space-around" }}>
                        <div className='divBold'>
                            Hotline:
                        </div>
                        <div>
                            0345672345
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: "space-around" }}>
                        <div className='divBold'>
                            Email:
                        </div>
                        <div>
                            prism@.com
                        </div>
                    </Col>
                    <Col style={{ display: 'flex', justifyContent: "center" }}>
                        <Button variant="outline-primary">
                            Get a free Quote
                        </Button>
                    </Col>
                </Container>
            </Navbar>
            <Navbar expand="lg" style={{ background: "#123775" }} >
                <Container>
                    <Navbar.Brand href="#home"><img src={process.env.PUBLIC_URL + './Promptlight.png'} alt='logo' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link href="#home">Home</Nav.Link>
                            <NavDropdown title="Attestatian Services" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Countries" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Other Countries" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Branches" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#home">About</Nav.Link>
                            <Nav.Link href="#home">Contact Us</Nav.Link>
                            <Nav.Link href="#home">Blog</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default CustomNavbar