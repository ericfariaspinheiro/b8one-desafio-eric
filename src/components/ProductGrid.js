import ProductCard from "@/components/ProductCard";

async function getProducts() {
  const response = await fetch(
    "https://fakestoreapi.com/products",
    {
      next: { revalidate: 60 }
    }
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar produtos");
  }

  const data = await response.json();

  return data.slice(0, 6);
}

export default async function ProductGrid() {
  const products = await getProducts();

  return (
    <div className="ofertas__grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.title}
          price={product.price}
        />
      ))}
    </div>
  );
}