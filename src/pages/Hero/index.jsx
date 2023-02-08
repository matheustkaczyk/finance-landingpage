import Header from "../../components/Header";
import arrow from '../../assets/arrow-down-icon.svg';
import heroImg from '../../assets/hero-img.svg';
import backgroundDark from '../../assets/background-dark-img.svg';
import background from '../../assets/background-img.svg';

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="ultrawide-outer-wrapper">
        <div className="ultrawide-inner-wrapper">
          <img src={backgroundDark} alt="background dark" className="background-dark" />
          <img src={background} alt="background" className="background" />
          <div className="hero-content">
            <div className="hero-infos">
              <h1>Mutual Investment</h1>
              <p>
                At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.
              </p>
              <button>Learn more</button>
              <div className="line-wrapper">
                <hr />
              </div>
            </div>
            <img src={heroImg} alt="Hero finance image" className="hero-image" />
          </div>
          <img src={arrow} alt="arrow icon" className="hero-arrow-icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
