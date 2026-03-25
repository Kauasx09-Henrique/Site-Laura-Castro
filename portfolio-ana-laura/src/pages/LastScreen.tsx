
import './style/lastScreen.css';

const ContactItem = ({ icon, text, text2, position }: { icon: string, text: string, text2?: string, position: { top: string, left: string } }) => (
    <div className="contact-info-circle" style={{ top: position.top, left: position.left }}>
        <img src={icon} alt={`${text} icon`} className="contact-icon" />
        <div className="contact-text-wrapper">
            <p className="contact-text">{text}</p>
            {text2 && <p className="contact-text-secondary">{text2}</p>}
        </div>
    </div>
);

export const LastScreen = () => {
    const contactLinks = [
        {
            icon: '/img/whatsapp-icon.png',
            text: '(61) 99373.0804',
            text2: 'Whatsapp',
            position: { top: '35%', left: '15%' }
        },
        {
            icon: '/img/instagram-icon.png',
            text: '@analaura_castroo',
            position: { top: '35%', left: '42%' }
        },
        {
            icon: '/img/email-icon.png',
            text: 'ana.laura02@hotmail.com',
            position: { top: '35%', left: '70%' }
        }
    ];

    return (
        <div className="last-screen-container">
            <section className="image-section">
                <img
                    src="/img/foto-hero.jpg"
                    alt="Ana Laura Castro"
                    className="biography-hero-image"
                />
                <div className="image-overlay-text">
                    <span className="year-text">2028</span>
                    <span className="creative-text">creative</span>
                </div>
            </section>

            <section className="content-section">
                <nav className="minimal-nav">
                    <span>portfolio</span>
                    <span>contact</span>
                </nav>

                <div className="main-content-area">
                    <div className="contact-background-text">
                        CONTACT
                    </div>
                    {contactLinks.map((link, index) => (
                        <ContactItem
                            key={index}
                            icon={link.icon}
                            text={link.text}
                            text2={link.text2}
                            position={link.position}
                        />
                    ))}
                </div>

                <footer className="last-screen-footer">
                    VAMOS TRANSFORMAR A IDEIA EM VISUAL.
                </footer>
            </section>
        </div>
    );
};