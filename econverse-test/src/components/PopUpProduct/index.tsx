import { useState } from "react";
import { useProductModalStore } from "../../store/productModalStore";
import { IoMdClose } from "react-icons/io";


import "./style.scss";

interface Product {
    id: string | number;
    productName: string;
    photo: string;
    price: number;
    descriptionShort: string;
}

function PopUpProduct() {
    const { isOpen, selectedProduct, closeModal } = useProductModalStore() as {
        isOpen: boolean;
        selectedProduct: Product | null;
        closeModal: () => void;
    };

    const [quantity, setQuantity] = useState<number>(1);

    if (!isOpen || !selectedProduct) {
        return null;
    }

    const handleDecrease = () => {
        if (quantity > 1) setQuantity(quantity - 1);
    };

    const handleIncrease = () => {
        setQuantity(quantity + 1);
    };

    return (
        <>
            {isOpen && (
                <div className="popup_overlay" onClick={closeModal}>
                    <article className="popup_container" onClick={(e) => e.stopPropagation()}>
                        <button
                            className="close_btn"
                            onClick={closeModal}
                            aria-label="Fechar modal"
                        >
                            <IoMdClose />
                        </button>

                        <div className="popup_image">
                            <img
                                src={selectedProduct.photo}
                                alt={selectedProduct.productName}
                            />
                        </div>

                        <div className="popup_infos">
                            <h2>
                                {selectedProduct.productName}
                            </h2>
                            
                            <h3>
                                R$ {selectedProduct.price?.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                            </h3>

                            <p>
                                {selectedProduct.descriptionShort}
                            </p>

                            <a href="#" className="view_more_link">
                                Veja mais detalhes do produto &gt;
                            </a>

                            {/* Bloco de Ações: Quantidade e Botão Comprar */}
                            <div className="popup_actions">
                                <div className="quantity_selector">
                                    <button type="button" onClick={handleDecrease}>-</button>
                                    <span>{String(quantity).padStart(2, '0')}</span>
                                    <button type="button" onClick={handleIncrease}>+</button>
                                </div>

                                <button type="button" className="buy_button">
                                    COMPRAR
                                </button>
                            </div>
                        </div>
                    </article>
                </div>
            )}
        </>
    );
}

export default PopUpProduct;
