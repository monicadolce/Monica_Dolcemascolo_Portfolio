import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
    return (
    <>
        <Navbar />
        <Header />
        <AboutMe />
        <Portfolio />
        <Resume />
        <Contact />
        <Footer />
    </>
    );
}

export default App
