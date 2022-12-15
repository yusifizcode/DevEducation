import './Footer.scss';
import logo from '../../assets/img/letter-y (2).png';
import img1 from '../../assets/img/avatar1403372997.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faMoon, } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export const Footer = () => {
    return (
        <footer>
            <div className="icon">
            <span> <i> <FontAwesomeIcon icon={faInstagram} /></i></span>
            <span>   <i> <FontAwesomeIcon icon={faGithub} /></i></span>
            <span>  <i> <FontAwesomeIcon icon={faTwitter} /></i></span>
            <span>  <i> <FontAwesomeIcon icon={faLinkedinIn} /></i></span>
            </div>
            <div className="copyright">© 2022 - DevChapter</div>
        </footer>



    );
};