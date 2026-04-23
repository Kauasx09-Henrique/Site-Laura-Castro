import React, { useState } from 'react';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import './styles/contactFoto.css';

export const ContactFoto = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        service: 'Ensaio Individual',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, service, message } = formData;

        const text = `Olá Ana Laura! Meu nome é ${name}.%0A%0A*Email:* ${email}%0A*Interesse:* ${service}%0A%0A*Mensagem:*%0A${message}`;
        const whatsappUrl = `https://wa.me/556193730804?text=${text}`;

        window.open(whatsappUrl, '_blank');
    };

    return (
        <section className="contact-foto-section" id="contact">
            <div className="contact-foto-nav">
                <span>2028</span>
                <span>get in touch</span>
                <span>booking</span>
                <span>contact</span>
            </div>

            <div className="contact-layout">
                <div className="contact-info-col">
                    <h2 className="contact-subtitle">BOOKING & INQUIRIES</h2>
                    <h1 className="contact-main-title">LET'S<br />CREATE<br />TOGETHER</h1>

                    <div className="contact-details">
                        <div className="detail-item">
                            <span className="detail-label">BASE</span>
                            <span className="detail-value">Brasília, DF - Brasil</span>
                        </div>
                        <div className="detail-item">
                            <span className="detail-label">SOCIAL</span>
                            <div className="social-links">
                                <a href="https://wa.me/556193730804" target="_blank" rel="noreferrer" className="social-icon">
                                    <FaWhatsapp size={32} />
                                </a>
                                <a href="https://www.instagram.com/lauracastro.fotografias/" target="_blank" rel="noreferrer" className="social-icon">
                                    <FaInstagram size={32} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contact-form-col">
                    <form className="editorial-form" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="name">NOME COMPLETO</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Como prefere ser chamado?"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="email">E-MAIL</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="seu@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="service">INTERESSE</label>
                                <div className="select-wrapper">
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                    >
                                        <option value="Ensaio Individual">Ensaio Individual</option>
                                        <option value="Ensaio Casal">Ensaio Casal</option>
                                        <option value="Cobertura de Evento">Cobertura de Evento</option>
                                        <option value="Editorial / Moda">Editorial / Moda</option>
                                        <option value="Outros">Outros</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">CONTE-ME SOBRE SUA IDEIA</label>
                            <textarea
                                id="message"
                                name="message"
                                rows={5}
                                required
                                placeholder="Detalhes, datas previstas, referências..."
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-btn">
                            ENVIAR MENSAGEM ↗
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};