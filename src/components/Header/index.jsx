import { useState, useEffect } from 'react';

import twitter from '../../assets/twitter-icon.svg';
import facebook from '../../assets/facebook-icon.svg';
import medium from '../../assets/medium-icon.svg';
import logo from '../../assets/logo-icon.svg';
import hamburger from '../../assets/hamburger-icon.svg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const nav = document.querySelector('nav');
    if (isMenuOpen) {
      nav.classList.add('open-menu');
    } else {
      nav.classList.remove('open-menu');

    }
  }, [isMenuOpen]);

  return (
    <header>
      <div>
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={medium} alt="medium logo" />
      </div>
      <a href="https://www.linkedin.com/in/matheustkaczykribeiro/" target={'_blank'}>
        <img src={logo} alt="Finance logo" className='logo' />
      </a>
      <img src={hamburger} alt="hamburger menu" className='hamburger' onClick={() => handleMenu()} />
      <nav>
        <ul>
          <h1 onClick={() => handleMenu()}>X</h1>
          <li>
            Home
          </li>
          <li>
            About
          </li>
          <li>
            Contact
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
