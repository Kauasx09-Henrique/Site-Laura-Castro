import React from 'react';
import './styles/heroFoto.css';

export const HeroFoto = () => {
    return (
        <section className="hero-foto-section" id="home">
            <div className="hero-foto-bg-left"></div>

            <div className="hero-foto-bg-right">
                <img
                    src="/img/foto-hero.jpg"
                    alt="Ana Laura Castro Fotografia"
                />
            </div>

            <div className="foto-grid-line foto-horizontal-top"></div>
            <div className="foto-grid-line foto-horizontal-bottom"></div>
            <div className="foto-grid-line foto-vertical-left"></div>

            <nav className="hero-foto-nav">
                <div className="foto-nav-left">
                    <span className="foto-nav-item">2028photography</span>
                    <span className="foto-nav-item">portfolio</span>
                    <span className="foto-nav-item">edit</span>
                </div>
                <div className="foto-nav-right">
                    <span className="foto-nav-item">portfolio</span>
                    <span className="foto-nav-item">edit</span>
                </div>
            </nav>

            <div className="hero-foto-text-container">
                <h2 className="hero-foto-text-small">PHOTOGRAPHY</h2>
                <h1 className="hero-foto-text-large">PORTFOLIO</h1>
            </div>
        </section>
    );
};