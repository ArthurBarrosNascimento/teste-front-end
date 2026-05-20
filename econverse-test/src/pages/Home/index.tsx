import Header from "../../components/Header";
import MainBanner from "../../components/MainBanner";
import PartnersStore from "../../components/PartnersStore";
import ProductCollectionFilters from "../../components/ProductCollectionFilters";
import RelatedProducts from "../../components/RelatedProducts";
import BrandingProduct from "../../components/BrandingProducts";
import NewsLetter from "../../components/NewsLetter";
import Footer from "../../components/Footer";

function Home() {
    return(<>
        <Header />
        <MainBanner />
        <ProductCollectionFilters />
        <RelatedProducts hasFilter="true" />
        <PartnersStore />
        <RelatedProducts hasFilter="" />
        <PartnersStore />
        <BrandingProduct />
        <RelatedProducts hasFilter="" />
        <NewsLetter />
        <Footer />
    </>)
}

export default Home;
