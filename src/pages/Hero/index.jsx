import Header from "../../components/Header";
import arrow from '../../assets/arrow-down-icon.svg';
import heroImg from '../../assets/hero-img.svg';

const Hero = () => {
  return (
    <div className="hero">
      <Header />
      <div className="hero-content">
        <div>
          <h1>Mutual Investment</h1>
          <p>
            At Finance we care about your future. We help you invest the way you want. So you can relax, have fun and let your fund grow.
          </p>
          <button>Learn more</button>
          <hr />
        </div>
        <img src={heroImg} alt="Hero finance image" />
      </div>
        <img src={arrow} alt="arrow icon" />
    </div>
  );
}

export default Hero;
