import { useState } from 'react';

export default function QuantityCart({ onAddToCart }) {
  const [count, setCount] = useState(1);

  const handleDecrement = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };

  const handleAddToCart = () => {
    onAddToCart(count);
  };

  return (
    <div className="quantity-cart">
      <div className="quantity-selector">
        <button type="button" onClick={handleDecrement} aria-label="Decrease quantity">
          −
        </button>
        <span className="quantity-value">{count}</span>
        <button type="button" onClick={handleIncrement} aria-label="Increase quantity">
          +
        </button>
      </div>
      <button type="button" className="add-to-cart" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
}
