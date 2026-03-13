import { CATEGORIES, PRICE_RANGES } from '../data/products';

export default function SearchFilter({ search, setSearch, category, setCategory, priceRange, setPriceRange }) {
  return (
    <div className="search-filter">
      <input
        type="search"
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
        aria-label="Search products"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="filter-select"
        aria-label="Filter by category"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.label}
          </option>
        ))}
      </select>
      <select
        value={priceRange}
        onChange={(e) => setPriceRange(e.target.value)}
        className="filter-select"
        aria-label="Filter by price"
      >
        {PRICE_RANGES.map((range) => (
          <option key={range.id} value={range.id}>
            {range.label}
          </option>
        ))}
      </select>
    </div>
  );
}
