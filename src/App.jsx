import { useState } from 'react';
import { CartProvider, useCart } from './context/CartContext';
import { WishlistProvider, useWishlist } from './context/WishlistContext';
import { OrderProvider } from './context/OrderContext';
import ProductCatalog from './components/ProductCatalog';
import ProductDetail from './components/ProductDetail';
import CartDropdown from './components/CartDropdown';
import OrdersPage from './components/OrdersPage';
import './App.css';

function ProductPage() {
  const { cartCount } = useCart();
  const { wishlistCount } = useWishlist();
  const [cartOpen, setCartOpen] = useState(false);
  const [showOrders, setShowOrders] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  if (showOrders) {
    return <OrdersPage onBack={() => setShowOrders(false)} />;
  }

  return (
    <div className="product-page">
      <header className="header">
        <h1>Shop</h1>
        <div className="header-actions">
          <button
            type="button"
            className="header-link"
            onClick={() => setShowOrders(true)}
          >
            Orders
          </button>
          <button
            type="button"
            className="wishlist-badge"
            title="Wishlist"
            aria-label={`Wishlist ${wishlistCount} items`}
          >
            ♥ Wishlist {wishlistCount > 0 && <span className="count">{wishlistCount}</span>}
          </button>
          <button
            type="button"
            className="cart-badge"
            onClick={() => setCartOpen(true)}
          >
            Cart {cartCount > 0 && <span className="count">{cartCount}</span>}
          </button>
        </div>
      </header>

      {selectedProduct ? (
        <ProductDetail
          product={selectedProduct}
          onBack={() => setSelectedProduct(null)}
        />
      ) : (
        <ProductCatalog onSelectProduct={setSelectedProduct} />
      )}

      <CartDropdown
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        onOrderPlaced={() => setShowOrders(true)}
      />
    </div>
  );
}

function App() {
  return (
    <OrderProvider>
      <CartProvider>
        <WishlistProvider>
          <ProductPage />
        </WishlistProvider>
      </CartProvider>
    </OrderProvider>
  );
}

export default App;
