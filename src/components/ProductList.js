import React, { useState } from 'react';
import Product from './Product';

const sampleProducts = [
  {
    id: 1,
    name: 'Smartphone',
    price: 699.99,
    category: 'Electronics', // Added category
    image: require('./smartphone.jpg'),
  },
  {
    id: 2,
    name: 'Headphones',
    price: 299.99,
    category: 'Accessories', // Added category
    image: require('./headphone.jpg'),
  },
  {
    id: 3,
    name: 'Laptop',
    price: 999.99,
    category: 'Electronics', // Added category
    image: require('./laptop.webp'),
  },
  {
    id: 4,
    name: 'Watch',
    price: 199.99,
    category: 'Accessories', // Added category
    image: require('./watch.jpg'),
  },
  {
    id: 5,
    name: 'Tablet',
    price: 399.99,
    category: 'Electronics', // Added category
    image: require('./tablet.jpg'),
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 79.99,
    category: 'Audio', // Added category
    image: require('./bs.jpg'),
  },
  {
    id: 7,
    name: 'Camera',
    price: 400.99,
    category: 'Photography', // Added category
    image: require('./camera.jpg'),
  },
  {
    id: 8,
    name: 'EarBuds',
    price: 60.99,
    category: 'Audio', // Added category
    image: require('./eb.avif'),
  },
  {
    id: 9,
    name: 'Drone',
    price: 599.99,
    category: 'Photography', // Added category
    image: require('./drone.jpg'),
  },
];

function ProductList({ addToCart }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredProducts, setFilteredProducts] = useState(sampleProducts);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);

    if (category === 'All') {
      setFilteredProducts(sampleProducts); // Show all products
    } else {
      setFilteredProducts(
        sampleProducts.filter(product => product.category === category)
      ); // Filter products by selected category
    }
  };

  return (
    <div>
      {/* Filter Buttons */}
      <div className="filter">
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Electronics')}>Electronics</button>
        <button onClick={() => handleCategoryChange('Accessories')}>Accessories</button>
        <button onClick={() => handleCategoryChange('Audio')}>Audio</button>
        <button onClick={() => handleCategoryChange('Photography')}>Photography</button>
      </div>

      {/* Product List */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
