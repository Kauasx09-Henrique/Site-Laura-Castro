import React, { useState, useEffect } from 'react';
import './styles/historiaFoto.css';

export const HistoriaFoto = () => {
    const [isFullScreen, setIsFullScreen] = useState(false);

    useEffect(() => {
        if (isFullScreen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isFullScreen]);

    return (
        <>
            <section className="historia-section" id="historia">
                <div className="historia-bg-watermark">STORYTELLER</div>

                <div className="historia-container">
                    <div className="historia-header">
                        <h1 className="historia-title">ATRAVÉS</h1>
                        <h1 className="historia-title indent">DAS LENTES</h1>
                    </div>

                    <div className="historia-content">
                        <div className="historia-text-block">
                            <div className="historia-divider"></div>
                            <p className="historia-paragraph">
                                A fotografia entrou na minha vida não apenas como um trabalho, mas como uma forma única de enxergar o mundo. Aos 20 anos, percebi que cada clique era uma oportunidade de congelar o tempo e eternizar emoções que as palavras sozinhas não conseguiam descrever.
                            </p>
                            <p className="historia-paragraph">
                                Minha jornada começou com a vontade de transformar o ordinário em algo extraordinário. Com um olhar voltado para o natural e o espontâneo, busco sempre a luz perfeita e a composição que conte uma história verdadeira.
                            </p>
                            <p className="historia-paragraph">
                                Para mim, fotografar é capturar a essência de cada momento, criando memórias visuais que durarão para sempre. Meu objetivo é fazer com que, ao olhar para uma foto, você sinta exatamente a mesma emoção daquele exato segundo.
                            </p>
                            <div className="historia-signature">Ana Laura Castro</div>
                        </div>

                        <div className="historia-image-block">
                            <div
                                className="historia-img-wrapper"
                                onClick={() => setIsFullScreen(true)}
                            >
                                <img
                                    src="/img/foto-sobre.jpg"
                                    alt="Ana Laura com a câmera"
                                    className="historia-img"
                                />
                                <div className="historia-img-badge">
                                    <span>AMPLIAR ↗</span>
                                </div>
                            </div>
                            <div className="historia-quote">
                                <span>"A ARTE DE<br />CONGELAR O TEMPO."</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div
                className={`lightbox-modal ${isFullScreen ? 'active' : ''}`}
                onClick={() => setIsFullScreen(false)}
            >
                <div className="lightbox-close">FECHAR ✕</div>
                <img
                    src="/img/foto-sobre.jpg"
                    alt="Ana Laura Ampliada"
                    className="lightbox-img"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>
        </>
    );
};