import React from "react";
import { Routes,Route } from "react-router-dom";
import Menu from "./Menu";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import Error from "./Error"

function App() {

  
  return (
   <> 
   <Menu/>
    <Routes>
      <Route path="/contact" element={<Contact name="Feynilll"/>}/>
      <Route path="/" element={<About/>}/>
      <Route path="/services" element={<Services name="services"/>}/>
      <Route path="/*"  element={<Error/>}/>
    </Routes>
   </> 
   
  );
}

export default App;
