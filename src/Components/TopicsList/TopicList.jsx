// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { topics } from "../../Data/data";
// import { Col, Container, Nav, Row } from "react-bootstrap";

// const TopicList = () => {
//   const { tech } = useParams();
//   const techTopics = topics[tech] || [];
//   return (
//     <Container>
//       <Row>
//         <Col xs={3} className="border-end">
//           <Nav className="flex-column">
//             {techTopics.map((topic) => (
//               <Nav.Link key={topic} as={Link} to={`/${tech}/${topic}`}>
//                 {topic}
//               </Nav.Link>
//             ))}
//           </Nav>
//         </Col>
//         <Col xs={9} className="p-3">
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default TopicList;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { content, topics } from "../../Data/data";
import { Col, Container, Nav, Row } from "react-bootstrap";

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
            {techTopics.map((topic) => (
              <Nav.Link
                key={topic}
                onClick={() => handleTopicClick(topic)}
                style={{ cursor: "pointer" }}
              >
                {topic}
              </Nav.Link>
            ))}
          </Nav>
        </Col>
        <Col xs={9} className="p-3">
          {selectedTopic && (
            <div>
              <h3>{selectedTopic}</h3>
              <p>{content[selectedTopic]}</p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default TopicList;
