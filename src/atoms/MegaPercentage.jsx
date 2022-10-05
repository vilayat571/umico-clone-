import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../redux/slices/allproductSlice';
import ProductCart from './ProductCart';

function MegaPercentage() {
  const data = useSelector(state => state.allproductReducer.data);
  const dispatch = useDispatch();
  const megaEndirim = data.products && data.products.filter((item) => {
    return item.discountPercentage > 15
  });
  useEffect(() => {
    dispatch(getAllData());
  }, [dispatch]);
  return (
    <div className='flex flex-col mt-6'>
      <div className='w-full h-auto text-3xl font-bold px-6 py-6 mb-6'>
        <span className=' bg-[#ff4b82] px-3 py-2 rounded text-white ml-6 mr-2'>
          Mega
        </span>
        <span className='text-[#242b59]'>
          percentage
        </span>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-5 gap-2">
          {
            megaEndirim !== undefined ? megaEndirim.slice(0,10).map((product, index) => {
              return (
                <ProductCart key={index} product={product} />
              )
            }) : <div>Loading..</div>
          }
        </div>
      </div>
    </div>
  )
}

export default MegaPercentage
