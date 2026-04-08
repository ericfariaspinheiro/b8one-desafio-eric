import "@/styles/ofertas.scss";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function OfertasPage() {
  return (
    <main className="ofertas">
      <Banner />

      <h1 className="ofertas__title">Ofertas da Semana</h1>

      <div className="ofertas__grid">
        <ProductCard
          image="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
          name="Mochila"
          price="99.90"
        />

        <ProductCard
          image="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg"
          name="Camiseta"
          price="59.90"
        />

        <ProductCard
          image="https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg"
          name="Jaqueta"
          price="199.90"
        />

        <ProductCard
          image="https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg"
          name="Relógio"
          price="149.90"
        />

        <ProductCard
          image="https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg"
          name="Bolsa"
          price="89.90"
        />

        <ProductCard
          image="https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg"
          name="Tênis"
          price="129.90"
        />
      </div>
    </main>
  );
}