import Logo from "../../assets/Logo.png";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook, FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./style.scss";

function Footer() {
    const footerInfoLinks = [
        { 
            nameSectionFooter: "Institucional",
            navLinks: [
                { name: "Sobre Nós", path: "/institutional" },
                { name: "Movimento", path: "/institutional" },
                { name: "Trabalhe conosco", path: "/institutional" }
            ] 
        },
        { 
            nameSectionFooter: "Ajuda",
            navLinks: [
                { name: "Suporte", path: "/institutional" },
                { name: "Fale Conosco", path: "/institutional" },
                { name: "Perguntas Frequentes", path: "/institutional" }
            ] 
        },
        { 
            nameSectionFooter: "Termos",
            navLinks: [
                { name: "Termos e Condições", path: "/institutional" },
                { name: "Política de Privacidade", path: "/institutional" },
                { name: "Troca e Devolução", path: "/institutional" }
            ] 
        }
    ];

    return (
        <footer className="footer-container">
            <div className="footer-main">
                <div className="footer-brand">
                    <img src={Logo} alt="Econverse Logo" className="footer-logo" />
                    <p className="brand-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className="social-icons">
                        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FaInstagram /></a>
                        <a href="https://facebook.com" target="_blank" rel="noreferrer"><FiFacebook /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FiLinkedin /></a>
                    </div>
                </div>

                <div className="footer-divider"></div>

                <div className="footer-nav">
                    {footerInfoLinks.map((section, index) => (
                        <div key={index} className="nav-section">
                            <h4 className="section-title">{section.nameSectionFooter}</h4>
                            <div className="section-links">
                                {section.navLinks.map((link, idx) => (
                                    <Link key={idx} to={link.path} className="nav-link">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="footer-bottom">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </footer>
    );
}

export default Footer;