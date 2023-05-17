import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Card from './components/ProjectCards';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div>
        <Navbar></Navbar>
          <Routes>
             <Route path="/" element={<About />} />
             <Route path="/about" element={<About />} />
             <Route path="/projects" element={<Card />} />
             <Route path="/contact" element={<Contact />} />
              <Route path="/resume" element={<Resume />} />

          </Routes>
          <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
