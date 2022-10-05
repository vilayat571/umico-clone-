import React from 'react';
import CategoryComponent from '../atoms/CategoryComponent';
import ContentFotter from '../atoms/ContentFotter';
import PromoImage from '../atoms/PromoImage';
import Slider from '../atoms/Slider';
function ProductsHead() {
  return (
    <div className='flex justify-around items-center flex-col w-full bg-white'>
      <div className='flex justify-between items-start mt-4 w-[90%]'>
        <CategoryComponent />
        <Slider />
        <PromoImage />
      </div>
      <div className="w-full flex justify-center items-center">
        <ContentFotter />
      </div>
    </div>
  )
};
export default ProductsHead;