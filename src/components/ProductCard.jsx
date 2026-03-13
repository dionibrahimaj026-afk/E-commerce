export default function ProductCard({ product, onClick }) {
  return (
    <button
      type="button"
      className="product-card"
      onClick={() => onClick(product)}
    >
      <div className="product-card-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-card-info">
        <h3>{product.name}</h3>
        <p className="product-card-price">${product.price.toFixed(2)}</p>
      </div>
    </button>
  );
}
