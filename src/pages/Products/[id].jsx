import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ProductCart from '../../atoms/ProductCart';

function Single() {
  const [data, setData] = useState(null);
  const { id } = useParams();
  useEffect(() => {

    fetch(`https://dummyjson.com/products/category/${id}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [id]);
  return (
    <div className=' w-full flex flex-col justify-center items-center'>
      <div className='w-full h-auto text-3xl font-bold px-6 pt-6 pb-2'>
        <span className=' bg-[#ff4b82] px-3 py-2 rounded text-white ml-6 mr-2'>
          Related
        </span>
        <span className='text-[#242b59]'>
          products
        </span>
      </div>
      <div className=' m-auto w-full h-auto  relative top-4 grid grid-cols-5 gap-2'>
        {
          data ? data.products.map((product, index) => (<ProductCart key={index} product={product} />)) : 'Loading..'
        }
      </div>
    </div>
  )
}

export default Single;