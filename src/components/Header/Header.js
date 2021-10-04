import React from 'react';
import './Header.css';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Navbar.Brand >
                <NavLink className="link" to="/home">Learning Hub</NavLink>
            </Navbar.Brand>
            <Nav className="me-auto">
                <NavLink className="link" to="/home">Home</NavLink>
                <NavLink className="link" to="/services">Services</NavLink>
                <NavLink className="link" to="/about">About</NavLink>
                <NavLink className="link" to="/contact">Contact</NavLink>
            </Nav>
            
        </Navbar>
    );
};

export default Header;