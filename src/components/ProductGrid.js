"use client";

import ProductCard from "@/components/ProductCard";

export default function ProductGrid({ products }) {

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