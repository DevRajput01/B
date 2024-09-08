import React, { useState } from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoMail, IoLogoInstagram, IoMenu, IoClose } from 'react-icons/io5';
import '../Styles/Header.scss';
import resume from './Devendra.pdf';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="header__content">
      <div className="header__toggle" onClick={toggleMenu}>
          {menuOpen ? <IoClose /> : <IoMenu />}
        </div>
        <div className="header__logo">
          <a href="/Main1">Devendra Singh</a>
        </div>
        
        <nav className={`header__nav ${menuOpen ? 'open' : ''}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about">About</a>
            </li>
            <li className="header__nav-item">
              <a href="#projects">Projects</a>
            </li>
            <li className="header__nav-item">
              <a href="#skills">Skills</a>
            </li>
            <li className="header__nav-item">
              <a href="#contact">Contact</a>
            </li>
          </ul>
          <div className="header__nav-spacing2"></div> {/* New spacing div */}
          <div className="header__social">
            <a href="https://www.linkedin.com/in/devtech01/" target="_blank" rel="noopener noreferrer">
              <IoLogoLinkedin />
            </a>
            <a href="https://github.com/DevRajput01" target="_blank" rel="noopener noreferrer">
              <IoLogoGithub />
            </a>
            <a href="https://www.instagram.com/devrajput0108/" target="_blank" rel="noopener noreferrer">
              <IoLogoInstagram />
            </a>
            <a href="mailto:devtech0108@gmail.com">
              <IoMail />
            </a>
          </div>
          <div className="header__nav-spacing"></div>
          <div className="header__cta">
            <a href={resume} download="Devendra.pdf" className="header__cta-button">
              My Resume
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
