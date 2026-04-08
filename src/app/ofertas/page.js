import "@/styles/ofertas.scss";
import Banner from "@/components/Banner";

export default function OfertasPage() {
  return (
    <main className="ofertas">
      <Banner />

      <h1 className="ofertas__title">Ofertas da Semana</h1>

      <div className="ofertas__grid">
        <div>Produto 1</div>
        <div>Produto 2</div>
        <div>Produto 3</div>
        <div>Produto 4</div>
        <div>Produto 5</div>
        <div>Produto 6</div>
      </div>
    </main>
  );
}