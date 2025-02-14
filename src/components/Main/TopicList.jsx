import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { topics } from "./data";

const TopicsList = () => {
  const { tech } = useParams();
  const techTopics = topics[tech] || [];

  return (
    <Container>
      <Row>
        <Col xs={3} className="border-end">
          <Nav className="flex-column">
            {techTopics.map((eachTopic) => (
              <Nav.Item>
                <Link
                  key={eachTopic}
                  to={`/${tech}/${eachTopic}`}
                  className="nav-link"
                >
                  {eachTopic}
                </Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default TopicsList;
