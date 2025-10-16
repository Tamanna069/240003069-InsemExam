import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      
      <nav style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        backgroundColor: "#f2f2f2"
      }}>
        <Link to="/" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Home</Link>
        <Link to="/courses" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Courses</Link>
        <Link to="/contact" style={{ textDecoration: "none", color: "blue", fontWeight: "bold" }}>Contact</Link>
      </nav>

      
      <div style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}


function Home() {
  return <h1>Welcome to the Home Page</h1>;
}

function Courses() {
  return <h1>Explore Our Courses</h1>;
}

function Contact() {
  return <h1>Contact Us</h1>;
}

export default App;
