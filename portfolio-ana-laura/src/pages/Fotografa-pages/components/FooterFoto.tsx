
import { FaWhatsapp, FaInstagram, FaArrowUp } from 'react-icons/fa';
import './style/footerFoto.css';

export const FooterFoto = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <footer className="footer-premium">
            <div className="footer-container">
                <div className="footer-massive-text">
                    <h1>ANA LAURA CASTRO</h1>
                </div>

                <div className="footer-grid">
                    <div className="footer-col brand-col">
                        <span className="footer-label">O ESTÚDIO</span>
                        <p>Especializada em capturar a essência real através de uma estética clean, minimalista e atemporal. Criando memórias visuais exclusivas em Brasília, DF.</p>
                    </div>

                    <div className="footer-col nav-col">
                        <span className="footer-label">NAVEGAÇÃO</span>
                        <div className="footer-links">
                            <a href="#home">Home</a>
                            <a href="#historia">História</a>
                            <a href="#portfolio">Portfólio</a>
                            <a href="#pacotes">Investimento</a>
                        </div>
                    </div>

                    <div className="footer-col social-col">
                        <span className="footer-label">CONECTE-SE</span>
                        <div className="footer-links">
                            <a href="https://www.instagram.com/lauracastro.fotografias/" target="_blank" rel="noreferrer">
                                <FaInstagram size={14} /> Instagram
                            </a>
                            <a href="https://wa.me/556193730804" target="_blank" rel="noreferrer">
                                <FaWhatsapp size={14} /> WhatsApp
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-bar">
                    <div className="footer-copy">
                        © 2026 ANA LAURA CASTRO.
                    </div>

                    <button className="footer-to-top" onClick={scrollToTop}>
                        BACK TO TOP <FaArrowUp size={10} />
                    </button>

                    <div className="footer-credits">
                        DESIGNED BY KAUÃ HENRIQUE
                    </div>
                </div>
            </div>
        </footer>
    );
};