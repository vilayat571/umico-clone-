import React from 'react';
function ContentFotter() {
    return (
        <div className=' flex justify-between items-center w-[85%] h-28 '>
            <div className='flex items-center'>
                <div className='bg-[#54cebf] rounded-full px-2 py-2'
                >
            {/*         <ShoppingBagIcon className='w-5 text-white' />
             */}
                </div>
                <div className='text-sm font-[500] text-[#1e244d] ml-2'>
                    Over 100 000 products
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#7c61e3] rounded-full px-2 py-2'>

                {/*     <ShoppingCartIcon className='w-5 text-white' />
                 */}
                </div>
                <div className='text-sm font-[500] text-[#13244d] ml-2'>
                    Free delivery from 20 ₼
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#ff4b82] rounded-full px
                -2 py-2'>
            {/*         <BanIcon className='w-5 text-white' />
             */}
                </div>
                <div className='text-sm font-[500] text-[#1e244d] ml-2'>
                    Discounts and promotions
                </div>
            </div>
            <div className='flex items-center'>
                <div className='bg-[#e69e04] rounded-full px-2 py-2'
                >
            {/*         <CheckCircleIcon className='w-5 text-white' />
             */}
                </div>
                <div className='text-sm font-[500] text-[#1e244d] ml-2'>
                    Payment over the cards
                </div>
            </div>
        </div>
    )
}

export default ContentFotter
