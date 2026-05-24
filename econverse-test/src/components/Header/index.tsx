import { AiOutlineSafety } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";
import { FaBox } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";


import "./style.scss"

import { Link } from "react-router-dom";

import logo from '../../assets/Logo.png'


export function Header() {
    const topBarInfo = [
        {
            before: "Compra",
            highlight: "100% segura",
            after: "",
            icon: <AiOutlineSafety />
        },
        {
            before: "",
            highlight: "Frete grátis",
            after: "acima de R$ 200",
            icon: <TbTruck />
        },
        {
            before: "",
            highlight: "Parcele",
            after: "suas compras",
            icon: <FaRegCreditCard />
        },
    ];

    const navIcons = [
        {
            path: '/orders',
            icon: <FaBox />
        },
        {
            path: '/favorite_products',
            icon: <CiHeart />
        },
        {
            path: '/user_profile',
            icon: <RxAvatar />
        },
    ];

    const navLinks = [
        {
            description: 'Todas Categorias',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Supermercado',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Livros',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Moda',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Lançamentos',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Ofertas do dia',
            path: "product_collection",
            icon: ""
        },
        {
            description: 'Assinatura',
            path: "product_collection",
            icon: <LuCrown/>
        }
    ]

    return(<>
        <header id="header_main">
            <div id="topbar">
                {topBarInfo.map((e, i) => (
                    <div key={i} className="item_nav">
                        {e.icon}
                        <p>
                            {e.before && <span>{e.before} </span>}

                            <strong>{e.highlight}</strong>

                            {e.after && <span> {e.after}</span>}
                        </p>
                    </div>
                ))}
            </div>
                
            <div id="info_main_header">

                <div id="logo_header">
                    <img src={ logo } alt="Logo Econverse" />
                </div>

                <div id="search_bar_header">
                    <input
                        type="text" 
                        placeholder="O que você está buscando"
                    
                    />

                    <CiSearch />
                </div>

                <div id="other_infos">
                    { navIcons.map((e, i) => (
                        <Link key={i} to={e.path}>
                            {e.icon}
                        </Link>
                    ))}

                    <div id="btn_cartDrawer">
                        <button>
                            <IoCartOutline/>
                        </button>
                    </div>
                </div>
            </div>

            <nav id="nav_link_header">
                { navLinks.map((e, i) => (
                    <div key={i}>
                        <Link to={e.path}>
                            { e.icon && e.icon }
                            {e.description}
                        </Link>
                    </div>
                ))}
            </nav>
        </header>
    </>)
}

export default Header;
