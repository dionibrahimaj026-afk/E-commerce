import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import ImageGallery from './ImageGallery';
import VariantSelector from './VariantSelector';
import QuantityCart from './QuantityCart';
import TabbedDetails from './TabbedDetails';
import ReviewRating from './ReviewRating';

export default function ProductDetail({ product, onBack }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
  };

  return (
    <main className="product-layout">
      <section className="product-gallery">
        <button type="button" className="back-to-catalog" onClick={onBack}>
          ← Back to products
        </button>
        <ImageGallery images={product.images} />
      </section>

      <section className="product-info">
        <div className="product-title-row">
          <h2>{product.name}</h2>
          <button
            type="button"
            className={`wishlist-btn ${isInWishlist(product.id) ? 'active' : ''}`}
            onClick={() => toggleWishlist(product)}
            aria-label={isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'}
          >
            {isInWishlist(product.id) ? '♥' : '♡'}
          </button>
        </div>
        <p className="price">${product.price.toFixed(2)}</p>

        <VariantSelector />

        <QuantityCart onAddToCart={handleAddToCart} />

        <TabbedDetails />

        <ReviewRating />
      </section>
    </main>
  );
}
