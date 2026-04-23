import React, { useState, useEffect } from 'react';
import './style/headerFoto.css';

interface HeaderProps {
    onSwitchMode: () => void;
}

export const HeaderFoto: React.FC<HeaderProps> = ({ onSwitchMode }) => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header-foto ${scrolled ? 'header-foto-scrolled' : ''}`}>
            <div className="header-foto-container">
                <span className="header-foto-logo" onClick={onSwitchMode} style={{ cursor: 'pointer' }}>
                    ANA LAURA<span className="accent">.</span>
                </span>

                <nav className="header-foto-nav">
                    <a href="#historia" className="foto-nav-link">História</a>
                    <a href="#portfolio" className="foto-nav-link">Portfólio</a>
                    <a href="#pacotes" className="foto-nav-link">Investimento</a>
                    <a href="#contact" className="foto-nav-link">Contato</a>
                </nav>

                <button className="switch-mode-btn" onClick={onSwitchMode}>
                    VIDEOMAKER ⇆
                </button>

                <button className={`foto-hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span className="line line1"></span>
                    <span className="line line2"></span>
                </button>
            </div>

            <div className={`foto-mobile-menu ${menuOpen ? 'open' : ''}`}>
                <div className="foto-mobile-links">
                    <a href="#historia" onClick={closeMenu}>HISTÓRIA</a>
                    <a href="#portfolio" onClick={closeMenu}>PORTFÓLIO</a>
                    <a href="#pacotes" onClick={closeMenu}>PACOTES</a>
                    <a href="#contact" onClick={closeMenu}>CONTATO</a>
                </div>
                <div className="foto-mobile-footer">
                    <span>@lauracastro.fotografias</span>
                </div>
            </div>
        </header>
    );
};