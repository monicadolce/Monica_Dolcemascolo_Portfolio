import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from  '@fortawesome/free-solid-svg-icons';

function Navbar ({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className='container'>
        <a className="navbar-brand" href="#">Monica Dolcemascolo</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: 'fuchsia' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className={currentPage === 'Home' ? 'nav-link active' : "nav-link"} href="#home" onClick={() => handlePageChange('Home')}>Home <span className="sr-only"></span></a>
            </li>
            <li className="nav-item">
              <a className={currentPage === 'AboutMe' ? 'nav-link active' : "nav-link"} href="#aboutme" onClick={() => handlePageChange('AboutMe')}>About Me</a>
            </li>
            <li className="nav-item">
            <a className={currentPage === 'Portfolio' ? 'nav-link active' : "nav-link"} href="#portfolio" onClick={() => handlePageChange('Portfolio')}>Portfolio</a>
            </li>
            <li className="nav-item">
            <a className={currentPage === 'Resume' ? 'nav-link active' : "nav-link"} href="#resume" onClick={() => handlePageChange('Resume')}>Resume</a>
            </li>
            <li className="nav-item">
            <a className={currentPage === 'Contact' ? 'nav-link active' : "nav-link"} href="#contact" onClick={() => handlePageChange('Contact')}>Contact</a>
            </li>

          </ul>
        </div>
  </div>
    </nav>
  );
}

export default Navbar;