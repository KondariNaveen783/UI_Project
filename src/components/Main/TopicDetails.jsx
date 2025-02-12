import { Col, Container, Row } from "react-bootstrap";
import React from "react";
import { useParams } from "react-router-dom";
import { content } from "./data";

const TopicDetail = () => {
  const { topic } = useParams();
  const topicDetail = content[topic] || "Content not found";
  return (
    <Container>
      <Row>
        <Col>
          <h2>{topic}</h2>
          <p>{topicDetail}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default TopicDetail;
