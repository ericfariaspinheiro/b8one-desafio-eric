import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";

export default function OfertasPage() {
  return (
    <main className="ofertas">

      <Banner />

      <div className="ofertas__content">
        <h1 className="ofertas__title">
          Ofertas da Semana
        </h1>

        <ProductsSection />
      </div>
    </main>
  );
}