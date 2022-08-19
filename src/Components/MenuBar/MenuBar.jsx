import React from 'react';
import { Dropdown } from 'react-bootstrap';
import "./menu.css";

const MenuBar = ({ menuOpen, setMenuOpen }) => {
    return (
        <Dropdown.Menu>
            <Dropdown.Item href="#portfolio">Portfolio</Dropdown.Item>
            <Dropdown.Item href="#works">My Work</Dropdown.Item>
            <Dropdown.Item href="#contact">Get in Touch</Dropdown.Item>
        </Dropdown.Menu>
    );
};

export default MenuBar;