import React from 'react';
import './styles/highlightsFoto.css';

const EditorialCard = ({ img, alt, title, aspect, index }: { img: string, alt: string, title: string, aspect: string, index: string }) => {
    return (
        <div className="editorial-card">
            <div className="editorial-img-wrapper" style={{ aspectRatio: aspect }}>
                <img src={img} alt={alt} className="editorial-img" />
                <div className="editorial-hover-badge">
                    <span>VIEW</span>
                </div>
            </div>
            <div className="editorial-plaque">
                <span className="plaque-index">{index}</span>
                <h2 className="plaque-title">{title}</h2>
                <div className="plaque-line"></div>
            </div>
        </div>
    );
};

export const HighlightsFoto = () => {
    return (
        <>
            <section className="highlights-foto-intro" id="portfolio">
                <div className="highlights-foto-nav">
                    <span>2028</span>
                    <span>photography</span>
                    <span>portfolio</span>
                    <span>gallery</span>
                </div>

                <div className="highlights-foto-title-wrapper">
                    <h1 className="highlights-foto-title">PHOTOGRAPHY</h1>
                    <h1 className="highlights-foto-title">HIGHLIGHTS</h1>
                </div>
            </section>

            <section className="highlights-foto-gallery dark-bg">
                <div className="highlights-foto-nav dark-nav">
                    <span>2028</span>
                    <span>photography</span>
                    <span>portfolio</span>
                    <span>portraits</span>
                </div>

                <div className="editorial-layout layout-a">
                    <div className="editorial-col main-col">
                        <EditorialCard
                            index="01"
                            img="/img/foto-hero.jpg"
                            alt="Retrato Feminino"
                            title="PORTRAITS"
                            aspect="3/4"
                        />
                    </div>
                    <div className="editorial-col side-col staggered-down">
                        <EditorialCard
                            index="02"
                            img="/img/foto-sobre.jpg"
                            alt="Ensaio Externo"
                            title="EDITORIAL"
                            aspect="4/3"
                        />
                        <EditorialCard
                            index="03"
                            img="/img/capas-img/capa-izabela.jpg"
                            alt="Retrato Corporativo"
                            title="CORPORATE"
                            aspect="1/1"
                        />
                    </div>
                </div>
            </section>

            <section className="highlights-foto-gallery pink-bg">
                <div className="highlights-foto-nav pink-nav">
                    <span>2028</span>
                    <span>photography</span>
                    <span>portfolio</span>
                    <span>lifestyle</span>
                </div>

                <div className="editorial-layout layout-b">
                    <div className="editorial-col side-col staggered-down">
                        <EditorialCard
                            index="04"
                            img="/img/capas-img/capa-rafaela.jpg"
                            alt="Ensaio Casal"
                            title="COUPLES"
                            aspect="1/1"
                        />
                        <EditorialCard
                            index="05"
                            img="/img/capas-img/capa-magra.jpg"
                            alt="Moda"
                            title="FASHION"
                            aspect="4/3"
                        />
                    </div>
                    <div className="editorial-col main-col">
                        <EditorialCard
                            index="06"
                            img="/img/capas-img/capa-djeif.jpg"
                            alt="Lifestyle"
                            title="LIFESTYLE"
                            aspect="3/4"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};