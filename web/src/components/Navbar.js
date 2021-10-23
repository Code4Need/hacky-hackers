import React from 'react'
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom'
import '../App.css';


const Navigationbar = () => {

    return (
        <Container fluid className='navigation'>
            <Row>
                <Col>
                    <Navbar collapseOnSelect bg="dark" variant="dark" expand="sm" fixed="top">
                        <Container>
                           <Navbar.Brand as={Link} to="/">
                                <img src="/images/2.png" className="img-fluid" width="90px" alt="logo"/>
                            </Navbar.Brand>
                            <Navbar.Brand as={Link} to="/jobs" className="text-uppercase fw-bolder">
                              Jobs
                            </Navbar.Brand>         
                            <Navbar.Brand as={Link} to="/recruiters" className="text-uppercase fw-bolder">
                             Recruiters
                            </Navbar.Brand>         
                            <Navbar.Brand as={Link} to="/companies" className="text-uppercase fw-bolder">
                             Companies
                            </Navbar.Brand>         
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="ms-auto">
                                    <Nav.Link className="text-uppercase fw-bolder text-white " as={Link} to="/about">
                                        About Us
                                    </Nav.Link>
                                    <Nav.Link className="text-uppercase fw-bolder text-primary" as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    )
}

export default Navigationbar
