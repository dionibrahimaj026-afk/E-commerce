import { CartProvider, useCart } from './context/CartContext';
import ImageGallery from './components/ImageGallery';
import VariantSelector from './components/VariantSelector';
import QuantityCart from './components/QuantityCart';
import TabbedDetails from './components/TabbedDetails';
import ReviewRating from './components/ReviewRating';
import './App.css';

function ProductPage() {
  const { addToCart, cartCount } = useCart();

  return (
    <div className="product-page">
      <header className="header">
        <h1>Shop</h1>
        <div className="cart-badge">
          Cart {cartCount > 0 && <span className="count">{cartCount}</span>}
        </div>
      </header>

      <main className="product-layout">
        <section className="product-gallery">
          <ImageGallery />
        </section>

        <section className="product-info">
          <h2>Premium Watch</h2>
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
      <ProductPage />
    </CartProvider>
  );
}

export default App;
