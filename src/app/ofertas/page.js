import { Suspense } from "react";
import "@/styles/ofertas.scss";

import Banner from "@/components/Banner";
import ProductGrid from "@/components/ProductGrid";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";

export default function OfertasPage() {
  return (
    <main className="ofertas">
      <Banner />

      <h1 className="ofertas__title">Ofertas da Semana</h1>

      <Suspense fallback={<ProductGridSkeleton />}>
        <ProductGrid />
      </Suspense>
    </main>
  );
}