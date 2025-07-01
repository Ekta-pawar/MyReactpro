import './App.css';
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from "./pages/Contact"


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/About" element={<About />} /> 
         < Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
