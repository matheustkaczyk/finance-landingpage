import twitter from '../../assets/twitter-icon.svg';
import facebook from '../../assets/facebook-icon.svg';
import medium from '../../assets/medium-icon.svg';
import logo from '../../assets/logo-icon.svg';
import hamburger from '../../assets/hamburger-icon.svg';

const Header = () => {
  return (
    <header>
      <div>
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={medium} alt="medium logo" />
      </div>
      <img src={logo} alt="Finance logo" />
      <img src={hamburger} alt="hamburger menu" />
    </header>
  );
}

export default Header;
