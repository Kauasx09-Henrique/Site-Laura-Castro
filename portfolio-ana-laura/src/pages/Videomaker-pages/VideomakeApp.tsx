import React from 'react';
import { Header } from '../../components/Header'; // Reutilizando o header global
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights'; // A galeria de vídeos que já fizemos
import { Contact } from './components/Contact';
import { Obrigada } from './components/Obrigada';
import './style/VideomakerApp.css';

export const VideomakerApp = () => {
    return (
        <main className="videomaker-theme">
            <Header />
            <Hero />
            <Highlights />
            <Contact />
            <Obrigada />
        </main>
    );
};