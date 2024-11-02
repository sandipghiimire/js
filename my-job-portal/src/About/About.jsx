import React from 'react';
import './About.css'; // Ensure your CSS is updated as well

const mentors = [
    {
        name: "John Doe",
        title: "Senior Software Engineer",
        description: "John has over 10 years of experience in software development and specializes in building scalable applications.",
        image: "https://picsum.photos/200/200?random=1", // Random image from API
    },
    {
        name: "Jane Smith",
        title: "Product Manager",
        description: "Jane is a product manager with a passion for user experience and has successfully launched multiple products.",
        image: "https://picsum.photos/200/200?random=2", // Random image from API
    },
    {
        name: "Alice Johnson",
        title: "UX/UI Designer",
        description: "Alice is a talented designer who focuses on creating intuitive and engaging user experiences.",
        image: "https://picsum.photos/200/200?random=3", // Random image from API
    },
];

const About = () => {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>
                Welcome to our Local Job Portal, where we connect job seekers with opportunities right in their communities. Our mission is to simplify the job search process and help you find the perfect job that matches your skills and aspirations.
            </p>
            <h2>Our Mentors</h2>
            <div className="mentor-cards">
                {mentors.map((mentor, index) => (
                    <div className="mentor-card" key={index}>
                        <img src={mentor.image} alt={mentor.name} className="mentor-image" />
                        <h3>{mentor.name}</h3>
                        <h4>{mentor.title}</h4>
                        <p>{mentor.description}</p>
                    </div>
                ))}
            </div>
            <h2>Our Mission</h2>
            <p>
                We aim to empower individuals by providing access to local job listings, resources, and support throughout the employment journey.
            </p>
            <h2>Contact Us</h2>
            <p>
                If you have any questions, feedback, or inquiries, please feel free to <a href="mailto:support@localjobportal.com">contact us</a>. We’re here to help!
            </p>
        </div>
    );
};

export default About;
