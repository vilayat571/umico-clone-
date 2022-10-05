import React from 'react';
/* import { HeartIcon, } from '@heroicons/react/solid';
 */import Badge from './Badge';
function ProductDetails({ product }) {
    return (
        <div className='flex flex-col ml-2 mt-2 mb-4'>
            <div className='text-[#242b59] text-2xl font-[900]'>{product.title}</div>
            <div className='text-[#000000] font-[500] text-[11px] flex mt-2    '>
                <span>Product number : {product.id}</span>
                <button className=' ml-4 flex items-center'>{/* <HeartIcon className='w-4 mr-1 text-red-500' />  */}Add to favorites</button>
            </div>
            <div className='flex flex-col text-xl mt-2 font-bold text-[#242b59]'>
                <div className='mt-2 font-[900]'>{Math.trunc(product.price)} ₼</div>
                <div className='mt-2 flex items-center'>
                    <img src="https://umico.az/images/icon-installment.svg" width={25} alt="" />
                    <Badge title={'Pay with credit'} sitil={'bg-[#fdd845] font-[900] text-sm px-1 py-1 text-black ml-2 rounded-[1px]'} />
                    <span className=' text-sm text-black ml-2 '>{(product.price / 6).toFixed(2)} ₼ x 6 month credit</span>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
