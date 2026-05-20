function MainBanner() {
    const titleMainBanner = "Venha conhecer nossas promoções";
    const descriptionMainBanner = "50% Off nos produtos ";
    const descriptionMainBtnBanner = "Ver produto";

    return(<>
        <div id="main_banner">
            <img src="" alt="" />
            <div id="main_info_banner">
                <h1>{titleMainBanner}</h1>
                <h3>{descriptionMainBanner}</h3>

                <button>
                    {descriptionMainBtnBanner}
                </button>
            </div>
        </div>
    </>)
}

export default MainBanner;
