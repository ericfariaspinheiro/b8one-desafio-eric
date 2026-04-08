"use client";

import { useEffect, useState } from "react";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
import ProductGridSkeleton from "@/components/ProductGridSkeleton";

const PRODUCTS_PER_PAGE = 6;

export default function ProductsSection() {

  const [products, setProducts] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {

    const loadProducts = async () => {

      try {

        const response = await fetch(
          "https://fakestoreapi.com/products"
        );

        if (!response.ok) throw new Error("API error");

        const data = await response.json();

        setProducts(data);

      } catch (error) {

        console.error("Erro ao carregar produtos:", error);
        setProducts([]);

      }

    };

    loadProducts();

  }, []);

  if (!products) {
    return <ProductGridSkeleton />;
  }

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const paginatedProducts = products.slice(start, end);

  return (
    <>
      <ProductGrid products={paginatedProducts} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onPageChange={setPage}
      />
    </>
  );
}