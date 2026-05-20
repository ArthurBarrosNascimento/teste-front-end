import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png"

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
    ]
    
    return(<>
        <div>
            <div id="title_branding">
                <h3>Navegue por marcas</h3>
            </div>
            <div>
                {brandingProducts.map((e, i) =>(
                    <Link to="/product_collection" key={i}>
                        <div>
                            <img src={e.image} alt={e.name} />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>);
}

export default BrandingProduct;
