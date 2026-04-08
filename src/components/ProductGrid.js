import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products = [] }) {

  if (!products.length) {
    return <p>Nenhum produto encontrado</p>;
  }

  console.log("Renderizando ProductGrid com produtos:", products);
  return (
    <div className="ofertas__grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.title}
          price={product.price}
          rating={product.rating.rate}
        />
      ))}
    </div>
  );
}