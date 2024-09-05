// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSearch from "./Component/StudentSearch";
import Navbar from "./Component/Navbar";
import Electrical from "./Component/Electrical";
import Civil from "./Component/Civil";
import About from "./Component/About";
import Services from "./Component/Services";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <main className="p-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services/>}/>
            <Route path="/" element={<StudentSearch />} />
            <Route path="/electrical" element={<Electrical />} />
            <Route path="/civil" element={<Civil />} />

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
