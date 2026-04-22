import React from 'react';
import { HeroFoto } from './pages/HeroFoto';
import { HistoriaFoto } from './pages/HistoriaFoto';
import { HighlightsFoto } from './pages/HighlightsFoto';
import './style/FotografaApp.css';

export const FotografaApp = () => {
    return (
        <main className="fotografa-theme">
            <HeroFoto />
            <HistoriaFoto />
            <HighlightsFoto />

        </main>
    );
};