import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Main/Home";
import TopicList from "./components/Main/TopicLists";
import TopicDetail from "./components/Main/TopicDetails";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:tech" element={<TopicList />} />
      <Route path="/:tech/:topic" element={<TopicDetail />} />
    </Routes>
  </Router>
);

export default App;
