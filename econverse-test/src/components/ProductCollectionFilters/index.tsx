import { TbDevices2 } from "react-icons/tb";
import { LiaStoreAltSolid } from "react-icons/lia";
import { GiWineBottle } from "react-icons/gi";
import { VscTools } from "react-icons/vsc";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IoIosFitness } from "react-icons/io";
import { PiDress } from "react-icons/pi";
import { Link } from "react-router-dom";



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
        <div id="filter_component_products">
            { filterOtions.map((e, i) => (
                <div key={i}>
                    <Link to={e.path}>
                        {e.icon}
                        <p>{e.filterName}</p>
                    </Link>
                </div>
            ))}
        </div>
    </>);
}

export default ProductCollectionFilters;
