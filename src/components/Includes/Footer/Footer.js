import React from 'react';
import './Footer.css';

const Footer = () =>{
     return(
         <div>
     <footer id="contact" className="footer-section mt-5">
        <div className="container">
            <div className="footer-content pt-5 pb-5">
                <div className="col-11Ī col-lg-12">
                <div className="row">
                    <div className="col-xl-4 col-lg-4 col-sm-12">
                        <div className="footer-widget">
                            <div className="footer-logo">
                                <h3 className="title">HeartBeats</h3>
                            </div>
                            <div className="footer-text">
                                <p>The official Fusion Band of NIT Rourkela explores genres like  Jazz, Pop, Folk, Sufi, Qawali, Mainstream Bollywood, Indian classical and Semiclassical Music.</p>
                            </div>
                            <div className="footer-social-icon mb-3">
                                <span>Follow us</span>
                                <a href="https://www.facebook.com/HeartBeatsNITR" ><i className="fab fa-facebook "></i></a>
                                <a href="https://www.instagram.com/heartbeats.nitr/" ><i className="fab fa-instagram"></i></a>
                                <a href="https://www.youtube.com/user/HeartBeatsNITR" ><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Useful Links</h3>
                            </div>
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="/events">Events</a></li>
                                <li><a href="/inductions">Inductions</a></li>
                                <li><a href="/members">Members</a></li>
                                <li><a href="/gallery">Gallery</a></li>
                            </ul>
                            
                        </div>
                        <div className="col-11">
                        <div className="footer-widget">
                            <div className="footer-widget-heading">
                                <h3>Contact us</h3>
                            </div>
                            <ul className="contacter">
                                <li className="contacts">heartbeats.nitr@gmail.com</li><br/>
                                <li className="contacts">Swagat  8895895849</li>
                                <li className="contacts">Anshuman  9437392009</li>
                            </ul>
                            
                        </div>
                    </div>
                    </div>
                    <div className="foot-img col-xl-4 col-lg-4 col-md-6 col-sm-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.687057767809!2d84.89752814988927!3d22.251949350200903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a201e7fc7810e25%3A0x93c2da55e52c71b2!2sStudent%20Activity%20Center!5e0!3m2!1sen!2sin!4v1610260989531!5m2!1sen!2sin"
                    width="300"  height= "300" title="location"
                    frameBorder="2"  aria-hidden="false" tabIndex="0" className="mx-auto" style={{border:'2px solid black'}}/>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="copyright-area">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center text-lg-left">
                        <div className="copyright-text mx-auto">
                            <p>Copyright &copy; 2021, All Right Reserved. Developed by <a href="https://www.linkedin.com/in/swagat-kumar/" target="blank">Swagat Kumar</a> and <a href="https://www.linkedin.com/in/swetadash0610/" target="blank">Sweta Dash</a>. </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
         </div>
     )
}
export default Footer;