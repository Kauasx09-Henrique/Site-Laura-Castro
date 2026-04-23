import './style/obrigada.css';

export const Obrigada = () => {
    return (
        <section className="obrigada-section">
            <div className="obrigada-left">
                <div className="grid-line-vertical"></div>
                <div className="grid-line-horizontal-top"></div>
                <div className="grid-line-horizontal-bottom"></div>

                <nav className="obrigada-nav-left">
                    <span>2028</span>
                    <span>creative</span>
                    <span>portfolio</span>
                </nav>

                <h1 className="obrigada-text">OBRIGADA!</h1>
            </div>

            <div className="obrigada-right">
                <div className="grid-line-horizontal-top-right"></div>

                <nav className="obrigada-nav-right">
                    <span>edit</span>
                </nav>

                <img
                    src="/img/foto-hero.jpg"
                    alt="Ana Laura Castro"
                    className="obrigada-image"
                />
            </div>
        </section>
    );
};