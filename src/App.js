import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Main/Home";
import TopicsList from "./components/Main/TopicList";
import TopicDetail from "./components/Main/TopicDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tech" element={<TopicsList />} />
      <Route path="/:tech/:topic" element={<TopicDetail />} />
    </Routes>
  </Router>
);

export default App;
