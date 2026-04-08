import Banner from "@/components/Banner";
import ProductsSection from "@/components/ProductsSection";

export default function OfertasPage() {
  return (
    <main className="ofertas">

      <Banner />

      <h1 className="ofertas__title">
        Ofertas da Semana
      </h1>

      <ProductsSection />

    </main>
  );
}