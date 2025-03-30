import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home/Home"; 
import Portfolio from "./Pages/Portfolio/Portfolio"; 
import Games from "./Pages/Games/Games";
import AboutMe from "./Pages/AboutMe/AboutMe";
import Footer from "./Components/Footer/Footer";

function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="content">
            {/* Configuração das rotas */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games" element={<Games />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about-me" element={<AboutMe />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
  
export default App;