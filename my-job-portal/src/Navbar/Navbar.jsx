
import React, { useState } from 'react';

import './Navbar.css'; // Ensure you link your CSS styles

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isLoginPopupOpen, setIsLoginPopupOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const toggleLoginPopup = () => {
        setIsLoginPopupOpen(prevState => !prevState);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">Local Job</div>
                <div className="navbar-links">
                    
                    <Link to="/" title="Home"><i className="fa fa-home"></i></Link>
                    <Link to="/about" title="About"><i className="fa fa-info-circle"></i></Link>
                    <a href="#contact" title="Contact"><i className="fa fa-envelope"></i></a>
                    <a href="#jobs" title="Jobs"><i className="fa fa-briefcase"></i></a>
                </div>
                <div className="navbar-actions">
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="btn-login" onClick={toggleLoginPopup}>
                        <i className="fa fa-sign-in"></i> LogIn
                    </button>
                    <button className="btn-signup"><i className="fa fa-user-plus"></i> SignUp</button>
                </div>
                <div className="mobile-menu">
                    <button className="menu-button" onClick={toggleMenu}>
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="mobile-menu-items">
                    <a href="#home" title="Home" onClick={closeMenu}><i className="fa fa-home"></i> Home</a>
                    <a href="#about" title="About" onClick={closeMenu}><i className="fa fa-info-circle"></i> About</a>
                    <a href="#contact" title="Contact" onClick={closeMenu}><i className="fa fa-envelope"></i> Contact</a>
                    <a href="#jobs" title="Jobs" onClick={closeMenu}><i className="fa fa-briefcase"></i> Jobs</a>
                    <input type="text" placeholder="Search" className="search-input" />
                    <button className="btn-login" onClick={toggleLoginPopup}><i className="fa fa-sign-in"></i> Login</button>
                    <button className="btn-signup"><i className="fa fa-user-plus"></i> Sign Up</button>
                </div>
            )}

            {/* Login Popup */}
            {isLoginPopupOpen && (
                <div className="login-popup">
                <div className="popup-content" >
                    <h2 style={{ color: "black", textAlign: "center"}}>Login</h2>
                    <label style={{ color: "black" }}>Email</label>
                    <input type="email" placeholder="Email" className="input-field" />
                    <label style={{ color: "black" }}>Password</label>
                    <input type="password" placeholder="Password" className="input-field" />
                    <button className="btn-close" onClick={toggleLoginPopup}>Login</button>
                </div>
            </div>
            
            )}
        </nav>
    );
};

export default Navbar;
