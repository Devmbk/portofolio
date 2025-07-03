import React from 'react';
import './header.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">devmbk</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="#projects">Projets</a></li>
                    <li><a href="#about">À propos</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;