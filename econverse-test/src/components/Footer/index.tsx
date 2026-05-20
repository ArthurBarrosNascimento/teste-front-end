import Logo from "../../assets/Logo.png";

import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { Link } from "react-router-dom";


function Footer() {
    const footerInfoLinks = [
        { 
            nameSectionFooter: "Institucional",
            navLinks: [
                {
                    name: "Sobre Nós",
                    path: "/institutional"
                },
                {
                    name: "Movimento",
                    path: "/institutional"
                },
                {
                    name: "Trabalhe conosco",
                    path: "/institutional"
                }
            ] 
        },
        { 
            nameSectionFooter: "Ajuda",
            navLinks: [
                {
                    name: "Suporte",
                    path: "/institutional"
                },
                {
                    name: "Fale Conosco",
                    path: "/institutional"
                },
                {
                    name: "Perguntas Frequentes",
                    path: "/institutional"
                }
            ] 
        },
        { 
            nameSectionFooter: "Termos",
            navLinks: [
                {
                    name: "Termos e Condições",
                    path: "/institutional"
                },
                {
                    name: "Política de Privacidade",
                    path: "/institutional"
                },
                {
                    name: "Troca e Devolução",
                    path: "/institutional"
                }
            ] 
        }
    ]


    return(<>
        <div>
            <div>
                <div>
                    <img src={Logo} alt="" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div>
                        <a href="">
                            <FaInstagram />
                        </a>

                        <a href="">
                            <FiFacebook />
                        </a>

                        <a href="">
                            <FiLinkedin />
                        </a>
                    </div>
                </div>
                <div>
                    {footerInfoLinks.map((e, i) => (
                        <div key={i}>
                            <p>{e.nameSectionFooter}</p>
                            {e.navLinks.map((f, i) => (
                                <Link key={i} to={f.path}>
                                    {f.name}
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
        </div>
    </>)
}

export default Footer;
