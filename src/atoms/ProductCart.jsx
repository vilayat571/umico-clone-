import React from 'react'
/* import { ShoppingCartIcon } from '@heroicons/react/solid';
 */import { Link } from 'react-router-dom';

function ProductCart({ product }) {
  return (
    <Link to={`/product/${product.id}`}>
      <div className=' w-60 h-[390px] bg-white  col-span-1 py-2 flex  items-center flex-col rounded-sm'>
        <img src={product.images[0]} className="  w-40 h-44 " alt={product.title} />
        <div className='w-full mt-6'>
          <span className='px-2 ml-6 py-1 text-left rounded-[2px] text-xs font-bold text-white bg-[#f9195d] '>
            -{Math.trunc(product.discountPercentage)}%
          </span>
        </div>
        <div className='w-full mt-3'>
          <span className='px-2 ml-4 py-1 text-left  text-normal font-[900] text-[#f9195d]'>
            {product.price} ₼
            <span style={{ color: " rgb(148, 151, 173)" }} className='px-2 ml-1 py-1 text-left font-[900] text-xs'>
              <s>  {Math.trunc(((product.price * Math.trunc(product.discountPercentage)) / 100 + product.price))} ₼</s>
            </span>
          </span>
        </div>
        <div className='w-full mt-3'>
          <span className='px-2 ml-6 py-1 text-left  text-xs font-[900] bg-[#ffc107] '>
            {(product.price / 6).toFixed(2)} ₼ x 6 ay
          </span>
        </div>
        <div className='w-full mt-3'>
          <span className='px-2 ml-4 py-1 text-left text-xs font-[500]'>
            {product.description.slice(0, 30)}
          </span>
        </div>
        <hr className=' w-full mt-2  bg-[#242b59]' />
        <div className='w-full mt-3 text-[#242b59] text-sm font-bold flex items-center'>
         {/*  <ShoppingCartIcon className=' ml-6 mr-1 w-5' /> */} Add to cart
        </div>
      </div>
    </Link>

  )
};
export default ProductCart;