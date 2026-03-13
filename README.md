# E-commerce Product Page

An intern/junior-level React product page with interactive features built using Vite.

## Features

1. **Interactive Image Gallery** — Main hero image that swaps when clicking thumbnails
2. **Variant Selection** — Size and color swatches with active state styling
3. **Quantity Selector & Cart** — +/- buttons with validation and global cart state
4. **Tabbed Product Details** — Description, Specs, and Shipping tabs
5. **Review & Star Rating** — Average ratings and customer feedback list

## Tech Stack

- React 19
- Vite 7

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── ImageGallery.jsx
│   ├── VariantSelector.jsx
│   ├── QuantityCart.jsx
│   ├── TabbedDetails.jsx
│   └── ReviewRating.jsx
├── context/
│   └── CartContext.jsx
├── App.jsx
└── main.jsx
```
