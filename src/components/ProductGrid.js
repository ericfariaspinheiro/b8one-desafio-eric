import ProductCard from "@/components/ProductCard";

async function getProducts() {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products",
      {
        cache: "no-store"
      }
    );

    if (!response.ok) {
      console.error("API error:", response.status, response.statusText);
      return [];
    }

    const data = await response.json();
    return data.slice(0, 6);
  } catch (error) {
    console.error("Fetch failed:", error);
    return [];
  }
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