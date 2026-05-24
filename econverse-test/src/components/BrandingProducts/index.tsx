import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";

import "./style.scss";

function BrandingProduct() {

    const brandingProducts = [
        {
            name: "branding 1",
            image: Logo
        },
        {
            name: "branding 2",
            image: Logo
        },
        {
            name: "branding 3",
            image: Logo
        },
        {
            name: "branding 4",
            image: Logo
        },
        {
            name: "branding 5",
            image: Logo
        },
    ];

    return (
        <>
            <section id="brandingSections">
                <div id="title_branding">
                    <h3>Navegue por marcas</h3>
                </div>

                <div className="branding_container">
                    {brandingProducts.map((e, i) => (
                        <Link
                            to="/product_collection"
                            key={i}
                            className="branding_link"
                        >
                            <article className="branding_card">
                                <img
                                    src={e.image}
                                    alt={e.name}
                                />
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
}

export default BrandingProduct;