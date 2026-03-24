import React, { useRef } from 'react';
import './style/highlights.css';

const HoverVideoCard = ({ img, video, alt, link }: { img: string, video: string, alt: string, link: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMouseEnter = () => {
        if (videoRef.current) {
            videoRef.current.play().catch(() => { });
        }
    };

    const handleMouseLeave = () => {
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div
            className="video-card"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={() => window.open(link)}
        >
            <img src={img} alt={alt} className="video-cover" />
            <video
                ref={videoRef}
                src={video}
                muted
                loop
                playsInline
                className="video-player"
            />
        </div>
    );
};

export const Highlights = () => {
    return (
        <>
            <section className="highlights-intro" id="portfolio">
                <div className="highlights-nav">
                    <span>2028</span>
                    <span>creative</span>
                    <span>portfolio</span>
                    <span>edit</span>
                </div>

                <div className="highlights-title-wrapper">
                    <h1 className="highlights-title">PORTFOLIO</h1>
                    <h1 className="highlights-title">HIGHLIGHTS</h1>
                </div>
            </section>

            <section className="highlights-gallery">
                <div className="highlights-nav dark-nav">
                    <span>2028</span>
                    <span>creative</span>
                    <span>portfolio</span>
                    <span>edit</span>
                </div>

                <div className="gallery-grid">
                    <HoverVideoCard
                        img="/img/capas-img/capa-djeif.jpg"
                        video="/video/video-dje.mp4"
                        alt="Djeify Pessoa - Cirurgia Plástica"
                        link="https://www.instagram.com/reel/DU_neVQjoqi/?igsh=MWRsbXU5MTRteTgzZg%3D%3D"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-izabela.jpg"
                        video="/video/video-iza.mp4"
                        alt="Dra Izabela Rezende"
                        link="https://www.instagram.com/reel/DTRAaU3kc0z/?igsh=cnVjZ3MxNnNocWE%3D"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-dra.jpg"
                        video="/video/video-dra.mp4"
                        alt="Tratamento da Obesidade"
                        link="https://www.instagram.com/reel/DV1tkCzEoqo/?igsh=MTRoMmgzaHlwMzk3ZA%3D%3D"
                    />

                </div>
            </section>

            <section className="highlights-gallery-pink">
                <div className="highlights-nav pink-nav">
                    <span>2028</span>
                    <span>creative</span>
                    <span>portfolio</span>
                    <span>edit</span>
                </div>

                <div className="gallery-grid">
                    <HoverVideoCard
                        img="/img/capas-img/capa-rafaela.jpg"
                        video="/video/video-rafa.mp4"
                        alt="Explicando os métodos contraceptivos"
                        link="https://www.instagram.com/reel/DVt9nLXAZJ0/?igsh=cWV3dWhodTVkc3E0"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-djeif-2.jpg"
                        video="/video/video-dje2.mp4"
                        alt="Expressão Descansada"
                        link="https://www.instagram.com/reel/DVrYJ-JjgSu/?igsh=MWJsMXJiZTFjcWV4ag%3D%3D"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-dra2.jpg"
                        video="/video/dra-mich.mp4"
                        alt="Era Lipedema"
                        link="https://www.instagram.com/reel/DUs8yWLkmd-/?igsh=MTJ0ZDJ6MzNpMnR4cg%3D%3D"
                    />
                </div>
            </section>

            <section className="highlights-gallery">
                <div className="highlights-nav dark-nav">
                    <span>2028</span>
                    <span>creative</span>
                    <span>portfolio</span>
                    <span>photography</span>
                </div>

                <div className="gallery-grid">
                    <HoverVideoCard
                        img="/img/capas-img/capa-magra.jpg"
                        video="/video/dra-magra.mp4"
                        alt="Quando a busca pela magreza ultrapassa os limites da saúde"
                        link="#"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-mich2.jpg"
                        video="/video/video-miche2.mp4"
                        alt="Você percebeu que nem aquele cafezinho"
                        link="https://www.instagram.com/reel/DUa7Pj5jmr8/?igsh=bTVpZWowZGY0bmZu"
                    />

                    <HoverVideoCard
                        img="/img/capas-img/capa-magras.jpg"
                        video="/video/video-magra2.mp4"
                        alt="Por que a menopausa foi do anonimato ao centro dos holofotes"
                        link="https://www.instagram.com/reel/DUEdczED_hm/?igsh=amNuNXdiNm0zbWQ0"
                    />
                </div>
            </section>
        </>
    );
};