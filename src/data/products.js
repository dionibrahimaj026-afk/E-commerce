export const PRODUCTS = [
  {
    id: 'premium-watch',
    name: 'Premium Watch',
    price: 129.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'classic-sneakers',
    name: 'Classic Sneakers',
    price: 89.99,
    category: 'footwear',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'leather-bag',
    name: 'Leather Bag',
    price: 159.99,
    category: 'accessories',
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'cotton-tshirt',
    name: 'Cotton T-Shirt',
    price: 29.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1521572163471-631350d0f0c0?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1521572163471-631350d0f0c0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'wireless-headphones',
    name: 'Wireless Headphones',
    price: 199.99,
    category: 'electronics',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=600&h=600&fit=crop',
    ],
  },
  {
    id: 'denim-jacket',
    name: 'Denim Jacket',
    price: 79.99,
    category: 'clothing',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1576995853123-5a10305d93c0?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=600&h=600&fit=crop',
    ],
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'clothing', label: 'Clothing' },
  { id: 'footwear', label: 'Footwear' },
  { id: 'accessories', label: 'Accessories' },
  { id: 'electronics', label: 'Electronics' },
];

export const PRICE_RANGES = [
  { id: 'all', label: 'Any price', min: 0, max: Infinity },
  { id: 'under50', label: 'Under $50', min: 0, max: 50 },
  { id: '50-100', label: '$50 - $100', min: 50, max: 100 },
  { id: '100-200', label: '$100 - $200', min: 100, max: 200 },
  { id: 'over200', label: 'Over $200', min: 200, max: Infinity },
];
