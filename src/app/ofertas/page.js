import Banner from "@/components/Banner";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";

const PRODUCTS_PER_PAGE = 6;

async function getProducts() {
  try {

    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      console.error("API response error:", response.status);
      return [];
    }

    const data = await response.json();

    return Array.isArray(data) ? data : [];

  } catch (error) {

    console.error("Fetch failed:", error);

    return [];

  }
}

export default async function OfertasPage({ searchParams }) {

  const params = await searchParams;

  const page = Number(params.page) || 1;

  const products = await getProducts();

  const totalPages = Math.ceil(products.length / PRODUCTS_PER_PAGE);

  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const end = start + PRODUCTS_PER_PAGE;

  const paginatedProducts = products.slice(start, end);

  return (
    <main className="ofertas">

      <Banner />

      <h1 className="ofertas__title">
        Ofertas da Semana
      </h1>

      <ProductGrid products={paginatedProducts} />

      <Pagination
        currentPage={page}
        totalPages={totalPages}
      />

    </main>
  );
}