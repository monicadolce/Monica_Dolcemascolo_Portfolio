import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
      <div className='container'>
        <p className="navbar-name">Monica Dolcemascolo</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <FontAwesomeIcon icon={faBars} style={{ color: 'rgb(223, 95, 40)' }} />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item word">
              <a
                href='/'
                onClick={() => handlePageChange('Home')}
                className={currentPage === 'Home' ? 'nav-link active' : "nav-link"}
              >
                Home
                <span className="sr-only"></span>
              </a>
            </li>
            <li className="nav-item">
              <Link
                to={{pathname: '/aboutme'}}
                onClick={() => handlePageChange('AboutMe')}
                className={currentPage === 'AboutMe' ? 'nav-link active' : "nav-link"}
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to={{pathname: '/portfolio'}}
                onClick={() => handlePageChange('Portfolio')}
                className={currentPage === 'Portfolio' ? 'nav-link active' : "nav-link"}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={{pathname: '/resume'}}
                onClick={() => handlePageChange('Resume')}
                className={currentPage === 'Resume' ? 'nav-link active' : "nav-link"}
              >
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to={{pathname: '/contact'}}
                onClick={() => handlePageChange('Contact')}
                className={currentPage === 'Contact' ? 'nav-link active' : "nav-link"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;