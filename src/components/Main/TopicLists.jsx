import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Nav, Row } from "react-bootstrap";
import { topics } from "./data";

const TopicList = () => {
  const { tech } = useParams();
  const techTopics = topics[tech] || [];
  const [selectedTopic, setSelectedTopic] = useState(techTopics[0] || null);

  const handleTopicClick = (topic) => setSelectedTopic(topic);
  return (
    <Container>
      <Row>
        <Col xs={3} className="border-end">
          <Nav className="flex-column">
            {techTopics.map((eachTopic) => (
              <Nav.Link
                key={eachTopic}
                onClick={() => handleTopicClick(eachTopic)}
                style={{ cursor: "pointer" }}
              >
                {eachTopic}
              </Nav.Link>
            ))}
          </Nav>
        </Col>
        <Col xs={9} className="p-3">
          {selectedTopic && (
            <div>
              <h3>{selectedTopic}</h3>
              <p>{techTopics[selectedTopic]}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TopicList;
