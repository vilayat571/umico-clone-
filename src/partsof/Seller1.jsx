import React from 'react';

function Seller1({ product }) {
    return (
        <div className='w-50 h-50 px-6 py-4 bg-[#f6f7f9] flex flex-col'>
            <div className="mt-2 w-auto flex flex-col">
                <span className='text-sm font-bold text-[#1e244d]'>Seller show</span>
                <span className='mt-2 text-xs text-[#000000]'>{product.brand}</span>
            </div>
            <div className="mt-2 flex flex-col">
                <span className=' mt-2 text-sm font-bold text-[#1e244d]'>Product raiting</span>
                <span className='mt-2 text-xs text-[#000000]'>{product.rating}</span>
            </div>
        </div>
    )
};
export default Seller1;