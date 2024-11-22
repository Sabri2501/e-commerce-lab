// components/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();
  // Here, you would fetch or use product data for the given ID
  return <div>Product Detail for ID: {id}</div>;
}

export default ProductDetail;
