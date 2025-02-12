import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import TopicList from "./Components/TopicsList/TopicList";
import TopicDetail from "./Components/TopicDetails/TopicDetail";

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
