import "./style.scss";

function MainBanner() {
    const titleMainBanner = "Venha conhecer nossas promoções";
    const descriptionMainBanner = {
        description: "nos produtos",
        highlight: "50% Off"
    };
    const descriptionMainBtnBanner = "Ver produto";

    return(<>
        <section id="main_banner">
            <div id="main_info_banner">
                <h1>{titleMainBanner}</h1>
                <h3>
                    <strong>{descriptionMainBanner.highlight}</strong> {descriptionMainBanner.description}
                </h3>

                <button>
                    {descriptionMainBtnBanner}
                </button>
            </div>
        </section>
    </>)
}

export default MainBanner;
