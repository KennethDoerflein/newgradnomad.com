import "../style/NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Nav, Navbar } from "react-bootstrap";
import React, { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const inpObj = event.currentTarget;
    if (inpObj.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else if (inpObj.checkValidity() === true) {
      setShow(false);
    }

    setValidated(true);
  };

  return (
    <>
      <Navbar className="green-nav" collapseOnSelect variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">newgradnomad.com</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link className="post-job" href="#postJob">
                Post a Job
              </Nav.Link>
              <Nav.Link className="nav-links" href="./About">
                About
              </Nav.Link>
              <Nav.Link className="nav-links" onClick={handleShow}>
                Sign up
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Newsletter Signup</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Signing up for the newsletter will enable you to get notified via
            email when a new job listing is posted.
          </p>
          <p id="error"></p>
          <Form
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
            action="/#emailList"
          >
            <Form.Group
              className="mb-3"
              controlId="newsletterForm.ControlInput"
            >
              <Form.Label>Email address</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  required
                  type="email"
                  placeholder="name@example.com"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                  autoFocus
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid email.
                </Form.Control.Feedback>
              </InputGroup>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary" type="submit">
                  Sign up
                </Button>
              </Modal.Footer>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NavBar;
