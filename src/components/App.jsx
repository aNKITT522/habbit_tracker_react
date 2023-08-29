import React from "react";
import { Routes, Route } from "react-router-dom"; 
import Home from "./today/Home" ; 
import Nav from "./today/Navbar";
import Weekly from "./week/Weekly";



function App() {
  return (
    <div className="App">
      <div className="Container">
      <Nav/>
        <Routes>
         <Route exact path="/habbit_tracker_react" element={<Home />} />
         <Route path="/weekly" element={<Weekly />} />
        </Routes>
      </div>
     
    </div>
  );
}

export default App;
