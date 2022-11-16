import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/pages/Header';
import AboutMe from './components/pages/AboutMe';
import Portfolio from './components/pages/Portfolio';
import Contact from './components/pages/Contact';
import Resume from './components/pages/Resume';

function App() {
    return (
      <>
        {/* Wrap page elements in Router component to keep track of location state */}
        <Router>
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar />
            <div className="container">
              {/* Wrap Route elements in a Routes component */}
              <Routes>
                {/* Define routes using the Route component to render different page components at different paths */}
                {/* Define a default route that will render the Home component */}
                <Route 
                  path="/" 
                  element={<Header />} 
                />
                {/* Define a route that will take in variable data */}
                <Route 
                  path="/about" 
                  element={<AboutMe />} 
                />
                 <Route 
                  path="/portfolio" 
                  element={<Portfolio />} 
                />
                 <Route 
                  path="/resume" 
                  element={<Resume />} 
                />
                 <Route 
                  path="/contact" 
                  element={<Contact />} 
                />
              </Routes>
            </div>
            <Footer />
          </div>
        </Router>
      </>
    );
  }




export default App;