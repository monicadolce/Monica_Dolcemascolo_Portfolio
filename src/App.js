import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {HashRouter, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


function App() {
    return (
        <HashRouter>
          <div className="flex-column justify-flex-start min-100-vh">
            <Navbar />
            <div className="">
              <Routes>
                <Route 
                  path="/" 
                  element={<Home />} 
                />
                <Route 
                  path="/aboutme" 
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
        </HashRouter>
    );
  }




export default App;

