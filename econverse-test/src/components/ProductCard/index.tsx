import { Link } from "react-router-dom";

import type { ProductType } from "../../types/productType";
import { useProductModalStore } from "../../store/productModalStore";

import "./style.scss";

type ProductCardProps = {
    product: ProductType;
};

function ProductCard({ product }: ProductCardProps) {
    const buyBtnText = "Comprar";

    const openModal =
        useProductModalStore(
            (state) => state.openModal
        );
      
    return (
        <article className="product_card_main">
            <Link
                to="/product_collection"
                className="product_card_link"
            >
                <div className="product_img">
                    <img
                        src={product.photo}
                        alt={product.productName}
                    />
                </div>

                <div className="description-product-infos">
                    <div className="product_description">
                        <p>{product.descriptionShort}</p>
                    </div>

                    <div className="product_price">
                        <p>R$ {product.price?.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                    </div>

                    <div className="product_payment_methods">
                        <p>ou 2x sem juros</p>
                    </div>

                    <div className="product_info_delivery">
                        <p>Frete grátis</p>
                    </div>
                </div>

            </Link>

            <div className="product_buy_btn_container">
                <button
                    className="product_buy_btn"
                    onClick={() =>
                        openModal(product)
                    }
                >
                    {buyBtnText}
                </button>
            </div>
        </article>
    );
}

export default ProductCard;
