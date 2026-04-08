export default function ProductCard({ image, name, price }) {
  return (
    <article className="product-card">
        <img
            className="product-card__image"
            src={image}
            alt={name}
            loading="lazy"
        />

        <h2 className="product-card__name">{name}</h2>

        <p className="product-card__price">
            {Number(price).toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL"
            })}
        </p>

        <button 
            className="product-card__button"
            aria-label={`Comprar ${name}`}
        >
            Comprar
        </button>
    </article>
  );
}