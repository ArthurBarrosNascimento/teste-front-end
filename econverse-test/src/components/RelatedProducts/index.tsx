import { Link } from "react-router-dom";
import ProductCard from "../ProductCard";
import type { RelatedProductsType } from "../../types/relatedProductsType";
import type { ProductType } from "../../types/productType";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { IoChevronBack, IoChevronForward } from "react-icons/io5";

import "swiper/css";
import "swiper/css/navigation";

import "./style.scss";

function RelatedProducts({ hasFilter }: RelatedProductsType) {
    const SectionRelatedProductsTitle = "Produtos relacionados";

    const relatedProductsFilter = [
        {
            filterOption: "celular",
            path: ""
        },
        {
            filterOption: "acessórios",
            path: ""
        },
        {
            filterOption: "tablets",
            path: ""
        },
        {
            filterOption: "NOTEBOOKS",
            path: ""
        },
        {
            filterOption: "TVs",
            path: ""
        },
        {
            filterOption: "Ver todos",
            path: "/product_collection"
        }
    ];

    const products: ProductType[] = [
        {
            productName: "Iphone 11 PRO MAX BRANCO 1",
            descriptionShort: "Iphone 11 PRO MAX BRANCO 1",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 15000
        },
        {
            productName: "IPHONE 13 MINI 1",
            descriptionShort: "IPHONE 13 MINI 1",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 9000
        },
        {
            productName: "Iphone 11 PRO MAX BRANCO 2",
            descriptionShort: "Iphone 11 PRO MAX BRANCO 2",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 14990
        },
        {
            productName: "IPHONE 13 MINI 2",
            descriptionShort: "IPHONE 13 MINI 2",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 12000
        },
        {
            productName: "Iphone 11 PRO MAX BRANCO 3",
            descriptionShort: "Iphone 11 PRO MAX BRANCO 3",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 4550
        },
        {
            productName: "IPHONE 13 MINI 3",
            descriptionShort: "IPHONE 13 MINI 3",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 38000
        },
        {
            productName: "Iphone 11 PRO MAX BRANCO 4",
            descriptionShort: "Iphone 11 PRO MAX BRANCO 4",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 42000
        },
        {
            productName: "IPHONE 13 MINI 4",
            descriptionShort: "IPHONE 13 MINI 4",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 520
        },
        {
            productName: "Iphone 11 PRO MAX BRANCO 5",
            descriptionShort: "Iphone 11 PRO MAX BRANCO 5",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 149990
        },
        {
            productName: "IPHONE 13 MINI 5",
            descriptionShort: "IPHONE 13 MINI 5",
            photo:
                "https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png",
            price: 100000
        }
    ];

    return (
        <section id="related-products">

            <div id="related-products-title">
                <h3>{SectionRelatedProductsTitle}</h3>
            </div>

            {hasFilter !== "" ? (
                <nav id="filter_options">

                    {relatedProductsFilter.map((e, i) => (
                        <Link
                            key={i}
                            to={e.path !== "" ? e.path : ""}
                        >
                            <div className="boxFilterOption">
                                <p>{e.filterOption}</p>
                            </div>
                        </Link>
                    ))}

                </nav>
            ) : (
                <div id="sectionSeeMore">
                    <Link to={relatedProductsFilter[5].path}>
                        <p>{relatedProductsFilter[5].filterOption}</p>
                    </Link>
                </div>
            )}

            <button className="custom-prev">
                <IoChevronBack />
            </button>

            <button className="custom-next">
                <IoChevronForward />
            </button>

            <Swiper
                modules={[Navigation]}

                navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                }}

                spaceBetween={20}

                breakpoints={{
                    320: {
                        slidesPerView: 1,
                    },

                    768: {
                        slidesPerView: 2,
                    },

                    1024: {
                        slidesPerView: 4,
                    },
                }}
            >
                {products.map((product, index) => (
                    <SwiperSlide key={index}>
                        <ProductCard product={product} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

export default RelatedProducts;