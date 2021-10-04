import './About.css';
import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <div className="text-center about-container">
                <h1 >About Us</h1>
                <p className="mt-2">We are established in 2000. We Provied coureses with quality . We tried our best for students.We achive Learning center award . We try to give our best .A full- service design and consulting firm specializing in learning center.</p>
                <p>
                    We ensure best coureses for you
                </p>
            </div>
        </Container>
    );
};

export default About;