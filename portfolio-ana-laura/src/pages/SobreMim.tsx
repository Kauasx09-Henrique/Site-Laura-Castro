import './style/SobreMim.css';

const SobreMim = () => {
    return (
        <section className="sobre-section" id="sobre">
            <div className="sobre-top-nav">
                <span>2028 | criativo</span>
                <span>portfólio | editar</span>
            </div>

            <div className="sobre-container">
                <div className="sobre-left">
                    <h1 className="sobre-title">SOBRE MIM</h1>
                    <p className="sobre-text">
                        Meu nome é Ana Laura Castro, tenho 20 anos e comecei a editar vídeos aos 15 anos, inicialmente por hobby no celular. Grande parte do meu aprendizado veio da prática e da experimentação. Sou formada em Técnico em Informática e estou no último semestre de Análise e Desenvolvimento de Sistemas. Também trabalhei por cerca de dois anos como estrategista de marketing e já desenvolvi projetos de design, como criação de sites e materiais digitais. Hoje atuo como editora de vídeos, buscando criar conteúdos com personalidade e impacto. Tenho conhecimento em fotografia e teoria das cores, o que contribui para o tratamento visual dos vídeos. Minha principal ferramenta de trabalho é o CapCut, mas também utilizo outras plataformas de edição, como o Adobe Premiere.
                    </p>
                </div>

                <div className="sobre-right">
                    <img
                        src="/img/foto-sobre.jpg"
                        alt="Ana Laura Castro"
                        className="sobre-image"
                    />
                    <p className="sobre-caption">Ana Laura Castro | Videomaker & Fotógrafa</p>
                </div>
            </div>
        </section>
    );
};

export default SobreMim;