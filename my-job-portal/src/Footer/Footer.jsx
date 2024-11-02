// src/Footer.jsx
import React from 'react';
import './Footer.css'; // Custom styles in a separate CSS file

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container-f">
                <div className="row">
                    <div className="footer-col">
                        <h4>Users Policy</h4>
                        <ul>
                            <li><a href="#privacy">Privacy Policy</a></li>
                            <li><a href="#terms">Terms & Conditions</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Connect Us</h4>
                        <div className="social-links">
                            <a href="https://www.facebook.com/sandip.ghiimire" className="fa fa-facebook" target="_blank" rel="noopener noreferrer"></a>
                            <a href="#" className="fa fa-twitter" target="_blank" rel="noopener noreferrer"></a>
                            <a href="#" className="fa fa-linkedin" target="_blank" rel="noopener noreferrer"></a>
                            <a href="#" className="fa fa-instagram" target="_blank" rel="noopener noreferrer"></a>
                            <a href="#" className="fa fa-youtube" target="_blank" rel="noopener noreferrer"></a>
                        </div>
                    </div>
                    <div className="footer-col">
                        <h4>Stay Connected</h4>
                        <ul>
                            <li><a href="#">Bhaktapur, Nepal</a></li>
                            <li><a href="tel:+9779860202933">+977 9860202933</a></li>
                            <li><a href="mailto:info.futsal@gmail.com">info.futsal@gmail.com</a></li>
                        </ul>
                    </div>
                    <div className="footer-col">
                        <h4>Soon On</h4>
                        <ul>
                            <li><a href="#">Play Store</a></li>
                            <li><a href="#">App Store</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
