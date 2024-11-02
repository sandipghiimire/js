import React, { useState } from 'react';
import './styles.css'; // Assuming your CSS is in styles.css

const Signup = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        username: '',
        password: '',
        confirmPassword: '',
        location: '',
        resume: null,
        skills: '',
        jobTitle: '',
        jobType: '',
        salary: '',
        terms: false,
        privacy: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'radio') {
            setFormData((prev) => ({ ...prev, jobType: value }));
        } else if (type === 'checkbox') {
            setFormData((prev) => ({ ...prev, [name]: checked }));
        } else if (type === 'file') {
            setFormData((prev) => ({ ...prev, [name]: e.target.files[0] }));
        } else {
            setFormData((prev) => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log(formData);
    };

    return (
        <div className="signup-container">
            <h1>Sign Up</h1>
            <form className="signup-form" onSubmit={handleSubmit}>
                <div className="form-group half">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="email">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="location">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="resume">Upload Resume</label>
                    <input
                        type="file"
                        id="resume"
                        name="resume"
                        accept=".pdf,.doc,.docx"
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="skills">Skills</label>
                    <input
                        type="text"
                        id="skills"
                        name="skills"
                        value={formData.skills}
                        onChange={handleChange}
                        placeholder="e.g. JavaScript, React"
                    />
                </div>
                <div className="form-group half">
                    <label htmlFor="jobTitle">Desired Job Title</label>
                    <input
                        type="text"
                        id="jobTitle"
                        name="jobTitle"
                        value={formData.jobTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group full">
                    <label>Preferred Job Type</label>
                    <div>
                        <label>
                            <input
                                type="radio"
                                name="jobType"
                                value="Full-time"
                                checked={formData.jobType === "Full-time"}
                                onChange={handleChange}
                            />
                            Full-time
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="jobType"
                                value="Part-time"
                                checked={formData.jobType === "Part-time"}
                                onChange={handleChange}
                            />
                            Part-time
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="jobType"
                                value="Freelance"
                                checked={formData.jobType === "Freelance"}
                                onChange={handleChange}
                            />
                            Freelance
                        </label>
                    </div>
                </div>
                <div className="form-group half">
                    <label htmlFor="salary">Salary Expectations</label>
                    <input
                        type="text"
                        id="salary"
                        name="salary"
                        value={formData.salary}
                        onChange={handleChange}
                        placeholder="e.g. $50,000 - $70,000"
                    />
                </div>
                <div className="form-group half">
                    <input
                        type="checkbox"
                        id="terms"
                        name="terms"
                        checked={formData.terms}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="terms">
                        I agree to the <a href="#">Terms and Conditions</a>
                    </label>
                </div>
                <div className="form-group half">
                    <input
                        type="checkbox"
                        id="privacy"
                        name="privacy"
                        checked={formData.privacy}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="privacy">
                        I acknowledge the <a href="#">Privacy Policy</a>
                    </label>
                </div>
                <button type="submit" className="signup-button">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
