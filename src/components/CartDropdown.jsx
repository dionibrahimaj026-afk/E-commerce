import { useCart } from '../context/CartContext';
import { useOrders } from '../context/OrderContext';

export default function CartDropdown({ isOpen, onClose, onOrderPlaced }) {
  const { cartItems, clearCart, cartTotal } = useCart();
  const { createOrder } = useOrders();

  const handlePlaceOrder = () => {
    if (cartItems.length === 0) return;
    createOrder(cartItems, cartTotal);
    clearCart();
    onClose();
    onOrderPlaced();
  };

  if (!isOpen) return null;

  return (
    <div className="cart-dropdown-overlay" onClick={onClose}>
      <div className="cart-dropdown" onClick={(e) => e.stopPropagation()}>
        <div className="cart-dropdown-header">
          <h3>Cart</h3>
          <button type="button" className="close-btn" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        {cartItems.length === 0 ? (
          <p className="cart-empty">Your cart is empty</p>
        ) : (
          <>
            <ul className="cart-items">
              {cartItems.map((item, i) => (
                <li key={i}>
                  <span>{item.product}</span>
                  <span>× {item.quantity}</span>
                  <span>${(item.quantity * item.price).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <p className="cart-total">Total: ${cartTotal.toFixed(2)}</p>
            <button type="button" className="place-order-btn" onClick={handlePlaceOrder}>
              Place Order
            </button>
          </>
        )}
      </div>
    </div>
  );
}
