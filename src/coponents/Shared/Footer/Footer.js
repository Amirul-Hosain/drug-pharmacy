import React from 'react';
import './Footer.css'
import logo from '../../../images/logo.png'

const Footer = () => {
    return (
        <div>
            <div className='footer-container'>
                <div className='footer-detail'>
                    <div className="footer-logo">
                        <img width='100' height='100' src={logo} alt="" />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non, harum? Vitae perferendis illum asperiores vero!</p>
                    </div>

                    <div className="footer-contact">
                        <h2>Contact</h2>
                        <p><i class="fas fa-map-marker-alt"></i> Kochukhet 21, Mirpur-10,  Dhaka, Bangladesh</p>
                        <p><i class="fas fa-phone"></i> Phone: 0123456789</p>
                        <p><i class="fas fa-envelope"></i> medicine@store.com</p>
                    </div>

                    <div className="footer-social">
                        <h2>Flow us</h2>
                        <i class="fab fa-facebook-square social-icon"></i>
                        <i class="fab fa-twitter-square  social-icon"></i>
                        <i class="fab fa-instagram-square social-icon"></i>
                        <i class="fab fa-linkedin social-icon"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;