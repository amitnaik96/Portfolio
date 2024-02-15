import Projects from "./Projects";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const  App = () => {
  return (
    <Router>
    <div className="app">
      <Navbar />
      <div className="components">
        <Routes>
          <Route path="/" element = {<Home />}></Route>
          <Route path="/projects" element = {<Projects />}></Route>
          <Route path="/contact" element = {<Contact />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
      
    </Router>
  )
}

export default App;