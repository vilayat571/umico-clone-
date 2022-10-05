import React from 'react';
import MegaPercentage from '../../atoms/MegaPercentage';
import MostFamous from '../../atoms/MostFamous';
import Products from '../../atoms/Products';
import ProductsHead from '../../components/ProductsHead';
function Product() {
  return (
    <div>
      <ProductsHead />
      <Products />
      <MegaPercentage />
      <MostFamous />
    </div>
  )
};
export default Product;