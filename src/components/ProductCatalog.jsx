import { useMemo, useState } from 'react';
import { PRODUCTS, PRICE_RANGES } from '../data/products';
import SearchFilter from './SearchFilter';
import ProductCard from './ProductCard';

export default function ProductCatalog({ onSelectProduct }) {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const range = PRICE_RANGES.find((r) => r.id === priceRange) || PRICE_RANGES[0];

    return PRODUCTS.filter((p) => {
      const matchesSearch = !query || p.name.toLowerCase().includes(query);
      const matchesCategory = category === 'all' || p.category === category;
      const matchesPrice = p.price >= range.min && p.price < range.max;
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, priceRange]);

  return (
    <div className="product-catalog">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        priceRange={priceRange}
        setPriceRange={setPriceRange}
      />
      <div className="product-grid">
        {filteredProducts.length === 0 ? (
          <p className="no-results">No products match your search.</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={onSelectProduct}
            />
          ))
        )}
      </div>
    </div>
  );
}
