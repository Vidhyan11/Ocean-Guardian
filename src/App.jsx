import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./index";
import About from "./about";
import Chatbot from "./chatbot";
// import Awareness from "./awareness";
// import Contact from "./contact";
// import Signin from "./signin";
import Header from "./navbar"; // adjust path as needed

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        {
          <Route path="/chatbot" element={<Chatbot />} />
          /*<Route path="/awareness" element={<Awareness />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} /> */
        }
      </Routes>
    </Router>
  );
}

export default App;
