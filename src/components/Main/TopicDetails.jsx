import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { content } from "./data";

const TopicDetail = () => {
  const { topic } = useParams();
  const detail = content[topic] || "Content not found.";

  return (
    <Container>
      <Row>
        <Col>
          <h2>{topic}</h2>
          <p>{detail}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TopicDetail;
