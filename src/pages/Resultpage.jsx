import React from 'react'
import {useSelector } from 'react-redux'
import ProductCart from '../atoms/ProductCart';

function Resultpage() {
  const data = useSelector(state => state.resultReducer.resultData);

  return (
    <div className={`h-auto flex justify-between flex-col items-center py-4`}>
      <div className='w-full h-auto text-3xl font-bold py-6 mb-6'>
        <span className=' bg-[#ff4b82] px-3 py-2 rounded text-white ml-6 mr-2'>
          Realted 
        </span>
        <span className='text-[#242b59]'>
        products counts - {data.total}
        </span>
      </div>
      <div className="grid grid-cols-5 gap-3">
        {
          data.products && data.products.map((item) => {
            return (
              <ProductCart product={item} />
            )
          })
        }
      </div>
    </div>
  )
}

export default Resultpage
