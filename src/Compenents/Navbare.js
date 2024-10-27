import React, { useState } from "react";
import { Button, Container, Form, Nav, Navbar, Row } from "react-bootstrap";
export const Navbare = ({ searche }) => {
  const oneseache = (word) => {
    searche(word)
  };
  const [searchvalue, usesearchvalue] = useState("");
  return (
    <Row>
      <div>
        <Navbar expand="lg" className=" bgnavbare">
          <Container>
            <Navbar.Brand href="#" className="titre">
              New Resturent
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              ></Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => {
                    usesearchvalue(e.target.value);
                  }}
                  value={searchvalue}
                />
                <Button
                  onClick={() => {
                    oneseache(searchvalue);
                    usesearchvalue("")

                  }}
                  variant="outline-success"
                >
                  Search
                </Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </Row>
  );
};
