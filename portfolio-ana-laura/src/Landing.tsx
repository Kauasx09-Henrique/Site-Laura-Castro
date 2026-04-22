import React from 'react';
import './style/landing.css';

interface LandingProps {
    onSelectRole: (role: 'video' | 'foto') => void;
}

export const Landing: React.FC<LandingProps> = ({ onSelectRole }) => {
    return (
        <div className="landing-wrapper">
            <div
                className="landing-half landing-video"
                onClick={() => onSelectRole('video')}
            >
                <div className="landing-overlay"></div>
                <div className="landing-content">
                    <h1 className="landing-title">VIDEOMAKER</h1>
                    <span className="landing-action">explorar portfólio</span>
                </div>
            </div>

            <div
                className="landing-half landing-foto"
                onClick={() => onSelectRole('foto')}
            >
                <div className="landing-overlay"></div>
                <div className="landing-content">
                    <h1 className="landing-title">FOTÓGRAFA</h1>
                    <span className="landing-action">explorar portfólio</span>
                </div>
            </div>

            <div className="landing-center-logo">
                ANA LAURA CASTRO<span className="accent">.</span>
            </div>
        </div>
    );
};