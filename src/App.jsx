import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import { useEffect, useState } from "react";
import HamburgerNav from "./components/HamburgerNav.jsx";
function App() {
  const [isMobile , setisMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth < 768);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }
  , []);
  return (
    <BrowserRouter>
      {isMobile ? <HamburgerNav/> : <Navbar/>}
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;