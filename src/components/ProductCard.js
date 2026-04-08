export default function ProductCard({ image, name, price }) {
  return (
    <article className="product-card">
      <img
        className="product-card__image"
        src={image}
        alt={name}
      />

      <h2 className="product-card__name">{name}</h2>

      <p className="product-card__price">R$ {price}</p>

      <button className="product-card__button">
        Comprar
      </button>
    </article>
  );
}