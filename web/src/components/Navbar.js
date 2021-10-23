import React from 'react';
import { Navbar, Container, Nav, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from "react-redux"
import Button from '@restart/ui/esm/Button';
import { logout } from "../actions/userActions"
const Navigationbar = () => {
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  return (
    <Container fluid className="navigation">
      <Row>
        <Col>
          <Navbar
            collapseOnSelect
            bg="dark"
            variant="dark"
            expand="sm"
            fixed="top"
          >
            <Container>
              <Navbar.Brand as={Link} to="/">
                <img
                  src="/images/2.png"
                  className="img-fluid"
                  width="90px"
                  alt="logo"
                />
              </Navbar.Brand>

              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                  <Navbar.Brand
                    as={Link}
                    to="/jobs"
                    className="text-uppercase fw-bolder"
                  >
                    Jobs
                  </Navbar.Brand>
                  <Navbar.Brand
                    as={Link}
                    to="/companies"
                    className="text-uppercase fw-bolder"
                  >
                    Companies
                  </Navbar.Brand>
                  <Navbar.Brand
                    as={Link}
                    to="/about"
                    className="text-uppercase fw-bolder"
                  >
                    About Us
                  </Navbar.Brand>
                  {
                    user ?

                      <Navbar.Brand
                        onClick={() => dispatch(logout())}
                        className="text-uppercase fw-bolder light"
                      >
                        Logout
                      </Navbar.Brand>
                      : <Navbar.Brand
                        as={Link}
                        to="/login"
                        className="text-uppercase fw-bolder"
                      >
                        Login
                      </Navbar.Brand>
                  }

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Col>
      </Row>
    </Container>
  );
};

export default Navigationbar;
