import React, { useState } from 'react';
import './Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Implement logic to send form data to your backend
    };

    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <p>If you have any questions, concerns, or feedback, feel free to reach out to us using the information below:</p>

            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> (123) 456-7890</p>
            <p><strong>Email:</strong> support@localjobportal.com</p>
            <p><strong>Address:</strong> Anamager, Kathmandu, Nepal</p>

            <h2>Get in Touch</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
                <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
                <input type="text" name="subject" placeholder="Subject (optional)" onChange={handleChange} />
                <textarea name="message" placeholder="Your Message" required onChange={handleChange}></textarea>
                <button type="submit">Send Message</button>
            </form>

            <h2>Follow Us</h2>
            <div className="social-media-links">
                <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faFacebook} />
                </a>
                <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://www.instagram.com/yourprofile" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
            </div>

            <h2>Business Hours</h2>
            <p>Monday - Friday: 9 AM - 5 PM</p>

            <h2>FAQs</h2>
            <p>Check our <a href="/faqs">FAQ page</a> for quick answers to common questions.</p>

            <h2>Visit Us</h2>
            <div className="map">
                <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.356105258074!2d85.32425531503454!3d27.710513482700905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb195b7b7988e5%3A0x7f375a13be48551c!2sAnamager%2C%20Kathmandu%2C%20Nepal!5e0!3m2!1sen!2sus!4v1614902072634!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            <p>Your privacy is important to us. We will never share your information without your consent.</p>

            {/* Facebook SDK for page plugin */}
            <div id="fb-root"></div>
            <script async defer crossorigin="anonymous" src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v10.0"></script>
        </div>
    );
};

export default Contact;
