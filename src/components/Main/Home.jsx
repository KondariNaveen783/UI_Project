import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import { logos } from "./data";

const Home = () => {
  return (
    <Container className="text-center mt-4">
      <Row className="justify-content-right">
        {logos.map((logo) => (
          <Col xs="auto" key={logo.name} className="mx-3">
            <Link to={`/${logo.name}`}>
              <img
                src={logo.src}
                alt={logo.name}
                style={{ width: "50px", cursor: "pointer" }}
              />
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
