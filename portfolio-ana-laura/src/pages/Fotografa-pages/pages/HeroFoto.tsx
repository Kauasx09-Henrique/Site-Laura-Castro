import React from 'react';
import './styles/heroFoto.css';

export const HeroFoto = () => {
    return (
        <section className="hero-foto-premium" id="home">
            <div className="hero-foto-background-text">
                <span>ANA LAURA</span>
                <span>CASTRO</span>
            </div>

            <div className="hero-foto-content">
                <div className="hero-foto-text-column">
                    <div className="hero-foto-subtitle">
                        <div className="hero-line"></div>
                        <span>EST. 2026 // BRASÍLIA, DF</span>
                    </div>

                    <h1 className="hero-foto-title-main">
                        <span className="outline-text">FINE ART</span>
                        <br />
                        <span className="solid-text">PHOTOGRAPHY</span>
                    </h1>

                    <div className="hero-foto-scroll-indicator">
                        <span>SCROLL TO EXPLORE</span>
                        <div className="scroll-line"></div>
                    </div>
                </div>

                <div className="hero-foto-image-column">
                    <div className="hero-foto-image-wrapper">
                        <img src="/img/foto-hero.jpg" alt="Ana Laura Castro" />
                        <div className="hero-rotating-badge">
                            <svg viewBox="0 0 100 100">
                                <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
                                <text>
                                    <textPath href="#circlePath" startOffset="0%">
                                        ANA LAURA CASTRO • FOTOGRAFIA •
                                    </textPath>
                                </text>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};