import './styles/pacotesFoto.css';

const PackageCard = ({ number, title, price, features, isHighlighted }: { number: string, title: string, price: string, features: string[], isHighlighted?: boolean }) => {
    return (
        <div className={`package-card ${isHighlighted ? 'highlighted' : ''}`}>
            <div className="package-header">
                <span className="package-number">{number}</span>
                <h3 className="package-title">{title}</h3>
                <div className="package-price">{price}</div>
            </div>

            <div className="package-divider"></div>

            <ul className="package-features">
                {features.map((feature, index) => (
                    <li key={index}>
                        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                        </svg>
                        {feature}
                    </li>
                ))}
            </ul>

            <button className="package-button">SOLICITAR ORÇAMENTO</button>
        </div>
    );
};

export const PacotesFoto = () => {
    return (
        <section className="pacotes-section" id="pacotes">
            <div className="pacotes-nav">
                <span>2028</span>
                <span>investment</span>
                <span>packages</span>
                <span>details</span>
            </div>

            <div className="pacotes-title-wrapper">
                <h2 className="pacotes-subtitle">A ARTE DO SEU TEMPO</h2>
                <h1 className="pacotes-main-title">INVESTIMENTO</h1>
            </div>

            <div className="pacotes-grid">
                <PackageCard
                    number="01"
                    title="ESSENTIAL"
                    price="SOB CONSULTA"
                    features={[
                        "Ensaio Individual ou Casal",
                        "2 horas de sessão fotográfica",
                        "Locação externa (Brasília/DF)",
                        "30 fotos em alta resolução",
                        "Entrega em galeria digital",
                        "Consultoria de figurino"
                    ]}
                />

                <PackageCard
                    number="02"
                    title="EDITORIAL"
                    price="SOB CONSULTA"
                    isHighlighted={true}
                    features={[
                        "Posicionamento e Branding",
                        "4 horas de sessão fotográfica",
                        "Até 3 locações ou estúdio",
                        "60 fotos em alta resolução",
                        "Direção criativa completa",
                        "Licença de uso comercial"
                    ]}
                />

                <PackageCard
                    number="03"
                    title="EVENT"
                    price="SOB CONSULTA"
                    features={[
                        "Eventos, Casamentos e Festas",
                        "Cobertura completa (até 8h)",
                        "Making of exclusivo",
                        "Mínimo de 300 fotos tratadas",
                        "Entrega em pen drive premium",
                        "Álbum Fine Art opcional"
                    ]}
                />
            </div>
        </section>
    );
};