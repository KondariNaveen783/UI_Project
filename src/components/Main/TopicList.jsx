import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { topics, content } from "./data";

const TopicsList = () => {
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
              <p>{content[selectedTopic]}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TopicsList;
