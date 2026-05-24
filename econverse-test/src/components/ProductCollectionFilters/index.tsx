import { TbDevices2 } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GiWineBottle } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { PiDress } from "react-icons/pi";
import { Link } from "react-router-dom";

import "./style.scss";

function ProductCollectionFilters() {
    const filterOtions = [
        {
            filterName: "Tecnologia",
            icon: <TbDevices2 />,
            path: "/product_collection"
        },
        {
            filterName: "Supermercado",
            icon: <LiaStoreAltSolid />,
            path: "/product_collection"
        },
        {
            filterName: "Bebidas",
            icon: <GiWineBottle/>,
            path: "/product_collection"
        },
        {
            filterName: "Ferramentas",
            icon: <VscTools/>,
            path: "/product_collection"
        },
        {
            filterName: "Saúde",
            icon: <FaHandHoldingHeart/>,
            path: "/product_collection"
        },
        {
            filterName: "Esportes e Fitness",
            icon: <IoIosFitness/>,
            path: "/product_collection"
        },
        {
            filterName: "Moda",
            icon: <PiDress/>,
            path: "/product_collection"
        }
    ]

    return(<>
        <nav id="filter_component_products">
            { filterOtions.map((e, i) => (
                <div key={i}>
                    <Link to={e.path}>
                        <div className="icon-product-filter">
                            {e.icon}
                        </div>
                    </Link>

                    <div className="text-filter-products">
                        <p>{e.filterName}</p>
                    </div>
                </div>
            ))}
        </nav>
    </>);
}

export default ProductCollectionFilters;
