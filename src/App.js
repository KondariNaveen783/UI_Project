import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="css" element={<About />} />
          <Route path="javascript" element={<Contact />} />
          <Route path="react" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
