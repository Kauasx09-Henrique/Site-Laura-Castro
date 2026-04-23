import React from 'react';
import { HeaderFoto } from './components/headerFoto';
import { HeroFoto } from './pages/HeroFoto';
import { HistoriaFoto } from './pages/HistoriaFoto';
import { HighlightsFoto } from './pages/HighlightsFoto';
import { PacotesFoto } from './pages/PackageCard';
import { ContactFoto } from './pages/contactFoto';
import { FooterFoto } from './components/FooterFoto';
import './style/FotografaApp.css';

interface FotografaProps {
    onSwitchMode: () => void;
}

export const FotografaApp: React.FC<FotografaProps> = ({ onSwitchMode }) => {
    return (
        <main className="fotografa-theme">
            <HeaderFoto onSwitchMode={onSwitchMode} />
            <HeroFoto />
            <HistoriaFoto />
            <HighlightsFoto />
            <PacotesFoto />
            <ContactFoto />
            <FooterFoto />
        </main>
    );
};