import ProductSkeleton from "@/components/ProductSkeleton";

export default function Loading() {
  return (
    <main className="ofertas">
      <h1 className="ofertas__title">Ofertas da Semana</h1>

      <div className="ofertas__grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </main>
  );
}
