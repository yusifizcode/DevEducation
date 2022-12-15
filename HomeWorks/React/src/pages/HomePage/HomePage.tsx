import './HomePage.scss';
// import logo from '../../assets/img/letter-y (2).png';
// import img1 from '../../assets/img/avatar1403372997.jpg';
import img1 from '../../assets/img/veb1.png';
import img3 from '../../assets/img/veb3.jpg';
import img4 from '../../assets/img/d54a6345d13113da84ec3d175b1c0359.jpg';
import img5 from '../../assets/img/e4b03e7d2b8ec8085affb4e73347135f.jpg';
import img6 from '../../assets/img/avatar1403372997.jpg';
import img7 from '../../assets/img/ea4780bf6eda0627b358e055d94959e5.jpg';
import img8 from '../../assets/img/d006edb135bca7573615fc4beb6858bc.jpg';
import img9 from '../../assets/img/2b9f2730a40d657318fbfc409f956736.jpg';
import img10 from '../../assets/img/3821a3ccc7bd7c95489df15b14718fcf.jpg';
import img11 from '../../assets/img/d006edb135bca7573615fc4beb6858bc.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCrown, faLayerGroup,faGlobe ,faLink, faChevronRight, faMapPin, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'


export const HomePage = () => {
    return (
        <main>
        <section id="service">
            <div className="service">
                <p className="name">Services</p>
                <h1>Specialized in</h1>
                <div className="content">
                    <div className="item">
                        <span><i><FontAwesomeIcon icon={faCrown}/></i></span>
                        <h3>UI/UX Design</h3>
                        <p>Turn what you have in mind of a digital product into reality. For any platform you consider.
                        </p>
                    </div>

                    <div className="item">
                        <span><i ><FontAwesomeIcon icon={faLayerGroup}/></i></span>
                        <h3>UI/UX Design</h3>
                        <p>Turn what you have in mind of a digital product into reality. For any platform you consider.
                        </p>
                    </div>

                    <div className="item">
                        <span><i><FontAwesomeIcon icon={faGlobe}/></i></span>
                        <h3>UI/UX Design</h3>
                        <p>Turn what you have in mind of a digital product into reality. For any platform you consider.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section id="portfolio">
            <div className="portfolio">
                <p className="name">My works</p>
                <h1>Featured Portfolios</h1>
                <div className="content">
                    <div className="item">
                        <div className="img">
                            <img src={img1} alt="img" />
                        </div>
                        <h4>Agency Website.</h4>
                        <a href="#"><span>WordPress</span><span><i ><FontAwesomeIcon icon={faLink}/></i></span></a>
                    </div>

                    <div className="item">
                        <div className="img">
                            <img src={img3} alt="img"/>
                        </div>
                        <h4>Agency Website.</h4>
                        <a href="#"><span>WordPress</span><span><i><FontAwesomeIcon icon={faLink}/></i></span></a>
                    </div>


                    <div className="item">
                        <div className="img">
                            <img src={img3} alt="img"/>
                        </div>
                        <h4>Agency Website.</h4>
                        <a href="#"><span>WordPress</span><span><i><FontAwesomeIcon icon={faLink}/></i></span></a>
                    </div>
                </div>
            </div>
        </section>


        <section id="experience">
            <div className="experience">
                <div className="content">
                    <div className="left">
                        <p className="name">career path</p>
                        <h1>Work Experices</h1>
                        <ul>
                            <li>Apple <i><FontAwesomeIcon icon={faChevronRight}/></i></li>
                            <li>Microsoft</li>
                            <li>Facebook</li>
                            <li>Slack</li>
                        </ul>
                    </div>
                    <div className="right">
                        <h4>Front-end Developer  Apple .Inc
                        </h4>
                        <p className="adress">California, United States
                        </p>
                        <p className="date">Nov 2020 - Present · Full-time
                        </p>
                       <ul>
                          <li>Improving overall website performance for mobile users.</li>
                          <li>Collaborate with back-end developers and web designers to improve usability</li>
                          <li>Add voice search feature for mobile app.</li>
                          <li>Developing an admin panel to manage contents, users, products and ...</li>

                       </ul>
                    </div>
                </div>
            </div>
        </section>

        <section id="blog">
            <div className="blog">
                <p className="name">my articles</p>
                <h1>personal blog</h1>
                <div className="content">
                    <div className="item">
                        <div className="img">
                            <img src={img4} alt="img"/>
                        </div>
                        <div className="text">
                            <h3>How to prototype in figma </h3>
                            <p className="date">July 15 , 2021</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante
                                scelerisque laoreet. Fusce finibus ...
                            </p>
                            <p className="contunie">contunie reading</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img">
                            <img src={img5} alt="img"/>
                        </div>
                        <div className="text">
                            <h3>How to prototype in figma </h3>
                            <p className="date">July 15 , 2021</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante
                                scelerisque laoreet. Fusce finibus ...
                            </p>
                            <p className="contunie">contunie reading</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img">
                            <img src={img7} alt="img"/>
                        </div>
                        <div className="text">
                            <h3>How to prototype in figma </h3>
                            <p className="date">July 15 , 2021</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id magna nec ante
                                scelerisque laoreet. Fusce finibus ...
                            </p>
                            <p className="contunie">contunie reading</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section id="testimonial">
            <div className="testimonial">
                <p className="name">my cilents</p>
                <h1>Testimonials</h1>
                <div className="content">
                    <div className="item">
                        <div className="img">
                            <img src={img8} alt="img"/>
                        </div>
                        <div className="text">
                            <p>We were very pleased to hear how you resolved our website's user interface issues and
                                challenges.
                            </p>
                            <p className="fullname">Amelia miller</p>
                            <p className="job">designer</p>
                        </div>
                    </div>

                    <div className="item">
                        <div className="img">
                            <img src={img9} alt="img"/>
                        </div>
                        <div className="text">
                            <p>We were very pleased to hear how you resolved our website's user interface issues and
                                challenges.
                            </p>
                            <p className="fullname">Amelia miller</p>
                            <p className="job">designer</p>
                        </div>
                    </div>


                    <div className="item">
                        <div className="img">
                            <img src={img10} alt="img"/>
                        </div>
                        <div className="text">
                            <p>We were very pleased to hear how you resolved our website's user interface issues and
                                challenges.
                            </p>
                            <p className="fullname">Amelia miller</p>
                            <p className="job">designer</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>

        <section id="education">
            <div className="education">
                <p className="name">learning path</p>
                <h1>Education & Skills</h1>
            </div>
            <div className="content">
                <div className="left">
                    <ul>
                        <li>
                            <h4 className="uni">Kingston university</h4>
                            <p className="description">Master's degree - Software Engineering</p>
                            <p className="date">2019 - 2021</p>
                        </li>
                        <li>
                            <h4 className="uni">Kingston university</h4>
                            <p className="description">Master's degree - Software Engineering</p>
                            <p className="date">2019 - 2021</p>
                        </li>
                        <li>
                            <h4 className="uni">Kingston university</h4>
                            <p className="description">Master's degree - Software Engineering</p>
                            <p className="date">2019 - 2021</p>
                        </li>

                    </ul>
                </div>
                <div className="right">
                    <p>For 5+ years, I have been continuously learning in the field of front-end and experimenting with
                        new technologies and frameworks, and here you can see a summary of my skills.
                    </p>
                    <ul>
                        <li className="react">React</li>
                        <li className="angular">Angular</li>
                        <li className="js">JavaScript</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="contact">
            <div className="contact">
                <div className="left">
                    <form action="get">
                        <label htmlFor="name">
                            <input type="text" placeholder="Name"/>
                        </label>

                        <label htmlFor="name">
                            <input type="email" placeholder="Email"/>
                        </label>


                        <textarea name="Massage" id="mes" cols={30} rows={10} placeholder="Message"></textarea>

                        <button>Send Message</button>
                    </form>
                </div>
                <div className="right">
                    <ul>
                        <li>
                            <div className="icon"><i><FontAwesomeIcon icon={faMapPin}/></i></div>
                            <div className="text">
                                <h4>Address</h4>
                                <p>3424 Layman Avenue, Fayetteville, NC</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><i ><FontAwesomeIcon icon={faPhone}/></i></div>
                            <div className="text">
                                <h4>Phone</h4>
                                <p>(501) 414-1541</p>
                            </div>
                        </li>
                        <li>
                            <div className="icon"><i><FontAwesomeIcon icon={faEnvelope}/></i></div>
                            <div className="text">
                                <h4>E-Mail</h4>
                                <p>devchapter@gmail.com</p>
                            </div>
                        </li>
                    </ul>
                </div>

            </div>
        </section>

       



    </main>




    );
};