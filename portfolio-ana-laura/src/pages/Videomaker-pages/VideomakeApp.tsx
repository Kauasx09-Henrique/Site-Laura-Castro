import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/pages/Hero';
import { Highlights } from './components/pages/Highlights';
import { Contact } from './components/pages/Contact';
import { Obrigada } from './components/pages/Obrigada';
import './style/VideomakerApp.css';

interface VideomakerProps {
    onSwitchMode: () => void;
}

export const VideomakerApp: React.FC<VideomakerProps> = ({ onSwitchMode }) => {
    return (
        <main className="videomaker-theme">
            <Header onSwitchMode={onSwitchMode} />
            <Hero />
            <Highlights />
            <Contact />
            <Obrigada />
        </main>
    );
};