"use client";

import { useEffect, useState } from "react";

import ProductCard from "@/components/ProductCard";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";

export default function ProductGrid() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) throw new Error("API error");

        const data = await response.json();

        setProducts(data.slice(0, 6));

      } catch (error) {
        console.error("Erro ao carregar produtos:", error);
      }
    };

    loadProducts();
  }, []);

  if (!products) {
    return <ProductGridSkeleton />;
  }

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