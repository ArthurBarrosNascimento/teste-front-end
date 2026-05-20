import { Link } from "react-router-dom";

function ProductCard() {
    const buyBtnText = "comprar"
    return(<>
        <div id="/product_card_main">
            <Link to="/product_collection">
                <div id="product_img">

                </div>
                <div id="product_description">

                </div>
                <div id="product_discount_price">

                </div>
                <div id="product_price">

                </div>
                <div id="product_payment_methods">

                </div>
                <div id="product_info_delivery">
                        
                </div>
            </Link>
            <div id="product_buy_btn">
                <button>
                    {buyBtnText}
                </button>
            </div>
        </div>
    </>)
}

export default ProductCard;
