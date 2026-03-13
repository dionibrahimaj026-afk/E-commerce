import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

const PRODUCT = { name: 'Premium Watch', price: 129.99 };

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (quantity) => {
    setCartItems((prev) => [...prev, { product: PRODUCT.name, quantity, price: PRODUCT.price }]);
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const cartTotal = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, clearCart, cartCount, cartTotal }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
