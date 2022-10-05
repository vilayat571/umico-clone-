import React from 'react'
import Seller from '../partsof/Seller'
import Description from './Description'
import Images from './Images'
function SingleCart({ product }) {

  return (
    <div className='mt-20 flex justify-around w-full items-center'>
      <Images product={product} />
      <Description product={product} />
      <Seller product={product} />
    </div>
  )
}

export default SingleCart
