import React from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { componentsMap } from "./data";
const TopicDetail = () => {
  const { topic } = useParams();
  const detail = componentsMap[topic] || "Content not found.";
  // const SelectedComponent = componentsMap[topic] || (
  //   <p>Content not found.</p>
  // );
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
