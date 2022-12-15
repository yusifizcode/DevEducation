import './Header.scss';
import logo from '../../assets/img/letter-y (2).png';
import img1 from '../../assets/img/avatar1403372997.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis ,faMoon ,} from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram ,faGithub ,faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export const Header = () => {
  return (
  <header>
        <section id="top">
            <div className="top">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                    <p>Yusif</p>
                </div>
                <div className="nav">
                    <ul>
                        <li>Services</li>
                        <li>Portifolios</li>
                        <li>Experience</li>
                        <li>Blog</li>
                        <li><i> <FontAwesomeIcon icon={faEllipsis}/></i></li>
                    </ul>
                </div>
                <div className="button">
                    <button><i><FontAwesomeIcon icon={faMoon}/></i></button>
                    <button>Resume</button>
                </div>
            </div>
        </section>

        <section id="hero">
            <div className="hero">
                <div className="text">
                    <p className="name">
                        MY NAME IS
                    </p>
                    <h1>Yusif <span>Osmanov</span> </h1>
                    <p>Creative front-end developer with more than +5 years of experience in enterprise companies and
                        startups. Proficient in JavaScript, Angular, and React. Passionate about UI/UX</p>
                    <div className="icon">
                       <i> <FontAwesomeIcon icon={faInstagram}/></i>
                       <i> <FontAwesomeIcon icon={faGithub}/></i>
                       <i> <FontAwesomeIcon icon={faTwitter}/></i>
                       <i> <FontAwesomeIcon icon={faLinkedinIn}/></i>
                    </div>
                </div>
                <div className="img">
                    <img src={img1} alt="photo"/>
                </div>
            </div>
        </section>
        </header>
    



  );
};