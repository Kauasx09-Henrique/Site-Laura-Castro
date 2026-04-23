import './style/hero.css';

export const Hero = () => {
    return (
        <section className="hero-section" id="home">
            <div className="hero-bg-left"></div>

            <div className="hero-bg-right">
                <img
                    src="/img/foto-hero.jpg"
                    alt="Capa Ana Laura"
                />
            </div>

            <div className="grid-line horizontal-top"></div>
            <div className="grid-line horizontal-bottom"></div>
            <div className="grid-line vertical-left"></div>

            <nav className="hero-nav">
                <div className="nav-left">
                    <span className="nav-item">2028creative</span>
                    <span className="nav-item">portfolio</span>
                    <span className="nav-item">edit</span>
                </div>
                <div className="nav-right">
                    <span className="nav-item">portfolio</span>
                    <span className="nav-item">edit</span>
                </div>
            </nav>

            <div className="hero-text-container">
                <h2 className="hero-text-small">CREATIVE</h2>
                <h1 className="hero-text-large">PORTFOLIO</h1>
            </div>
        </section>
    );
};