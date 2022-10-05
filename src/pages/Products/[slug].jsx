import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductCart from '../../atoms/ProductCart';
import SingleCart from '../../atoms/SingleCart';
function Singleproduct() {
  const { slug } = useParams();
  const [data, setData] = useState(null);
  const [overData, setOverData] = useState(null);
  useEffect(() => {
   
    fetch(`https://dummyjson.com/products/${slug}`)
      .then((res) => res.json())
      .then((product) => setData(product));
  }, [slug]);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${data !== null && data.category !== 'false' && data.category}`)
      .then((res) => res.json())
      .then((veri) => setOverData(veri));
  }, [data]);
  return (
    <div className='h-auto bg-white'>
      <div className='text-xs bg-white text-[#4f2cce] pt-3 font-[600] ml-24 capitalize'>
        <Link to="/"> Əsas</Link> {">"}
        <Link to="/"> Məhsul kateqoriyaları</Link> {">"}
        <Link to={`/categories/${data !== null && data.category !== 'false' && data.category}`}>
          {data && data.category}
        </Link>{">"}
        {data && data.title}
      </div>
      <hr className=' w-full mt-3  bg-[#000000]' />
      {
        data && <SingleCart product={data} />
      }
      <div className=' w-full flex flex-col justify-center items-center bg-[#f7f7f7]'>
      <div className='w-full h-auto text-3xl mt-8 font-bold py-6 mb-6'>
        <span className=' bg-[#ff4b82] px-3 py-2 rounded text-white ml-6 mr-2'>
          Realted 
        </span>
        <span className='text-[#242b59]'>
        products 
        </span>
      </div>
        <div className=" m-auto  h-auto pb-12 bg-[#f7f7f7] relative top-2 grid grid-cols-5 gap-2">
          {
            overData ? overData.products.map((product, index) => (
            <ProductCart key={index} product={product} />)
            ) : 'Loading..'
          }
        </div>
      </div>
    </div>
  )
}

export default Singleproduct
