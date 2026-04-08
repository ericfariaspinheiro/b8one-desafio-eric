import ProductSkeleton from "@/components/ProductSkeleton";

export default function ProductGridSkeleton() {
  return (
    <div className="ofertas__grid">
      {Array.from({ length: 6 }).map((_, index) => (
        <ProductSkeleton key={index} />
      ))}
    </div>
  );
}