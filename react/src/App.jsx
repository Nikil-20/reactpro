// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentSearch from "./Component/StudentSearch";
import Navbar from "./Component/Navbar";
import Electrical from "./Component/Electrical";
import Civil from "./Component/Civil";
import About from "./Component/About";
import Services from "./Component/Services";
import Cs from "./Component/Cs";
import Entc from "./Component/Entc";
import Instru from "./Component/Instru";
import Mech from "./Component/Mech";
import Manu from "./Component/Manu";
import Meta from "./Component/Mata";
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
            <Route path="/cs" element={<Cs />} />
            <Route path="/entc" element={<Entc />} />
            <Route path="/instru" element={<Instru />} />
            <Route path="/mech" element={<Mech />} />
            <Route path="/manu" element={<Manu />} />
            <Route path="/meta" element={<Meta />} />
            
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
