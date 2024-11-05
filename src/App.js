import './index.css';
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home"
import About from "./routes/About"
import Contact from "./routes/Contact"
import Project from "./routes/Project"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Routes >
    </>
  );
}

export default App;
