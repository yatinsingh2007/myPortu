import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Skills from "./components/Skills.jsx";
import Contact from "./components/Contact.jsx";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Home/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;