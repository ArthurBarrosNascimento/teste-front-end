import { AiOutlineSafety } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { FaRegCreditCard } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RxAvatar } from "react-icons/rx";
import { IoCartOutline } from "react-icons/io5";
import { LuCrown } from "react-icons/lu";




import { Link } from "react-router-dom";

import logo from '../../assets/Logo.png'


export function Header() {
    const topBarInfo = [
        {
            description: "Compra 100% segura",
            icon: <AiOutlineSafety />
        },
        {
            description: "Frete grátis acima de R$ 200",
            icon: <TbTruck />
        },
        {
            description: "Parcele suas compras",
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
        <div id="header_main">
            <div id="topbar">
                {topBarInfo.map((e, i) => (
                    <div key={i}>
                        {e.icon}
                        <p>{e.description}</p>
                    </div>
                ))}
            </div>
                
            <div id="info_main_header">

                <div id="logo_header">
                    <img src={ logo } alt="" />
                </div>

                <div id="search_bar_header">
                    <input
                        type="text" 
                        placeholder="O que você está buscando"
                    
                    />

                    <FaSearch />
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

            <div id="nav_link_header">
                { navLinks.map((e, i) => (
                    <div key={i}>
                        <Link to={e.path}>
                            { e.icon && e.icon }
                            {e.description}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </>)
}

export default Header;
