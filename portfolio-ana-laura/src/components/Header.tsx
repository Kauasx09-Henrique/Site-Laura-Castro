import { useState, useEffect } from 'react';
import './style/header.css';

export const Header = () => {
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
        setMenuOpen(prev => !prev);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="header-container">
                <a href="#sobre" className="header-logo" onClick={closeMenu}>
                    ANA LAURA CASTRO<span className="accent">.</span>
                </a>

                <nav className="header-nav">
                    <a href="#sobre" className="nav-item">Sobre</a>
                    <a href="#portfolio" className="nav-item">Portfólio</a>
                    <a href="#contact" className="nav-item">Contato</a>
                </nav>

                <button className="hamburger-btn" onClick={toggleMenu}>
                    {menuOpen ? (
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="#F4EFE6">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                        </svg>
                    ) : (
                        <svg viewBox="0 0 24 24" width="28" height="28" fill="#F4EFE6">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    )}
                </button>
            </div>

            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
                <a href="#sobre" className="mobile-nav-item" onClick={closeMenu}>sobre</a>
                <a href="#portfolio" className="mobile-nav-item" onClick={closeMenu}>portfólio</a>
                <a href="#contact" className="mobile-nav-item" onClick={closeMenu}>contato</a>
            </div>
        </header>
    );
};