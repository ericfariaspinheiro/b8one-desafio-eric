import "@/styles/ofertas.scss";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

async function getProducts() {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
        throw new Error("Erro ao buscar produtos");
    }

    const data = await response.json();

    return data.slice(0, 6);
}

export default async function OfertasPage() {
    const products = await getProducts();

    return (
        <main className="ofertas">
            <Banner />

            <h1 className="ofertas__title">Ofertas da Semana</h1>

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
        </main>
    );
}