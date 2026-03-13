import { CartProvider, useCart } from './context/CartContext';
import { WishlistProvider, useWishlist } from './context/WishlistContext';
import ImageGallery from './components/ImageGallery';
import VariantSelector from './components/VariantSelector';
import QuantityCart from './components/QuantityCart';
import TabbedDetails from './components/TabbedDetails';
import ReviewRating from './components/ReviewRating';
import './App.css';

const PRODUCT = { id: 'premium-watch', name: 'Premium Watch', price: 129.99 };

function ProductPage() {
  const { addToCart, cartCount } = useCart();
  const { toggleWishlist, isInWishlist, wishlistCount } = useWishlist();

  return (
    <div className="product-page">
      <header className="header">
        <h1>Shop</h1>
        <div className="header-actions">
          <button
            type="button"
            className="wishlist-badge"
            title="Wishlist"
            aria-label={`Wishlist ${wishlistCount} items`}
          >
            ♥ Wishlist {wishlistCount > 0 && <span className="count">{wishlistCount}</span>}
          </button>
          <div className="cart-badge">
            Cart {cartCount > 0 && <span className="count">{cartCount}</span>}
          </div>
        </div>
      </header>

      <main className="product-layout">
        <section className="product-gallery">
          <ImageGallery />
        </section>

        <section className="product-info">
          <div className="product-title-row">
            <h2>Premium Watch</h2>
            <button
              type="button"
              className={`wishlist-btn ${isInWishlist(PRODUCT.id) ? 'active' : ''}`}
              onClick={() => toggleWishlist(PRODUCT)}
              aria-label={isInWishlist(PRODUCT.id) ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              {isInWishlist(PRODUCT.id) ? '♥' : '♡'}
            </button>
          </div>
          <p className="price">$129.99</p>

          <VariantSelector />

          <QuantityCart onAddToCart={addToCart} />

          <TabbedDetails />

          <ReviewRating />
        </section>
      </main>
    </div>
  );
}

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <ProductPage />
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
