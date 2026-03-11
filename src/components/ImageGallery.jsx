import { useState } from 'react';

const images = [
  'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
  'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop',
];

export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="image-gallery">
      <div className="hero-image">
        <img src={images[activeIndex]} alt={`Product view ${activeIndex + 1}`} />
      </div>
      <div className="thumbnails">
        {images.map((img, i) => (
          <button
            key={i}
            type="button"
            className={`thumb ${i === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(i)}
          >
            <img src={img} alt={`Thumbnail ${i + 1}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
