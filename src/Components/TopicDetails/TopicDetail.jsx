import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useParams } from "react-router-dom";
import { content } from "../../Data/data";

const TopicDetail = () => {
  const { topic } = useParams();
  const detail = content[topic] || "Content not found";
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
