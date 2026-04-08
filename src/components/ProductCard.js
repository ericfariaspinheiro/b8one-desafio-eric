export default function ProductCard({ image, name, price, rating }) {

  const discount = 0.1;
  const oldPrice = price;
  const newPrice = price * (1 - discount);

  const stars = Math.round(rating);

  return (
    <article className="product-card">

      <img
        className="product-card__image"
        src={image}
        alt={name}
        loading="lazy"
      />

      <h2 className="product-card__name">
        {name}
      </h2>

      <div className="product-card__rating">
        {"★".repeat(stars)}
        {"☆".repeat(5 - stars)}
      </div>

      <p className="product-card__old-price">
        De: {" "}
        {Number(oldPrice).toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL"
        })}
      </p>

      <p className="product-card__price">
        Por: 
        {Number(newPrice).toLocaleString("pt-BR", {
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