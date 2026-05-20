import { Link } from "react-router-dom";
import ProductCard from "../ProductCard/index";
import type { RelatedProductsType } from "../../types/relatedProductsType";

function RelatedProducts({ hasFilter }: RelatedProductsType) {
    const SectionRelatedProductsTitle = "Produtos relacionados";
    const relatedProductsFilter = [
        
        {
            filterOption:"celular" ,
            path:""
        },
        {
            filterOption:"acessórios" ,
            path:""
        },
        {
            filterOption:"tablets",
            path:""
        },
        {
            filterOption:"NOTEBOOKS",
            path:""
        },
        {
            filterOption:"TVs",
            path:""
        },
        {
            filterOption:"Ver todos",
            path: "/product_collection"
        }
    ];

    return(<>
        <div>
            <div>
                <h3>{SectionRelatedProductsTitle}</h3>
            </div>
            { hasFilter != "" ? (
                <div>    
                { relatedProductsFilter.map((e, i) => (
                    <div key={i} className="boxFilterOption">
                        <Link to={ e.path != "" ? e.path : ""}>
                            <p>{e.filterOption}</p>
                        </Link>
                    </div>
                ))}
            </div>
                ) : (
                    <div>
                        <Link to={ relatedProductsFilter[5].path}>
                            <p>{relatedProductsFilter[5].filterOption}</p>
                        </Link>
                    </div>
                )
            }
            <ProductCard />
        </div>
    </>)
}

export default RelatedProducts;
