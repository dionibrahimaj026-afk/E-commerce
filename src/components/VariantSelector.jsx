import { useState } from 'react';

const variants = {
  colors: ['#000', '#FFF', '#C41E3A', '#0066CC'],
  sizes: ['S', 'M', 'L', 'XL'],
};

export default function VariantSelector() {
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  return (
    <div className="variant-selector">
      <div className="variant-group">
        <span className="variant-label">Color</span>
        <div className="swatches">
          {variants.colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`swatch ${selectedColor === color ? 'active' : ''}`}
              style={{ backgroundColor: color }}
              onClick={() => setSelectedColor(color)}
              title={color}
            />
          ))}
        </div>
      </div>
      <div className="variant-group">
        <span className="variant-label">Size</span>
        <div className="size-buttons">
          {variants.sizes.map((size) => (
            <button
              key={size}
              type="button"
              className={`size-btn ${selectedSize === size ? 'active' : ''}`}
              onClick={() => setSelectedSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
