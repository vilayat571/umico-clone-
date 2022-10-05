import React, { useState } from 'react';
/* import ReactImageMagnify from 'react-image-magnify'; */
function Images({ product }) {
    const [isIndex, setIsIndex] = useState(0)
    const handleSelect = (index) => {
        setIsIndex(index);
    };
    return (
        <div className='flex '>
            <div className='flex flex-col'>
                {
                    product ? product.images.map((image, index) => (
                        <button className='border-0 outline-none' onClick={() => handleSelect(index)} key={index}>
                            <img
                                className={
                                    isIndex === index ? 'w-10 px-1 py-1  h-10  mt-1 cursor-pointer border-[2px] border-[#7b67c8]'
                                        : 'w-10 px-1 py-1  h-10  mt-1 cursor-pointer'}
                                src={image} alt={image} />
                        </button>
                    )) : "Loading.."
                }
            </div>
            <div className='flex justify-between items-start'>
                <div className="ml-6 w-96 h-96">
                    <img src={product.images[isIndex]} alt="" />
                   {/*  <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'product images',
                            width:384,
                            height:384,
                            src: product.images[isIndex]
                        },
                        largeImage: {
                            src: product.images[isIndex],
                            width:400,
                            height:400
                        }
                    }} /> */}
                </div>
                <span style={{ background: "linear-gradient(180deg,#7c62e3 13.51%,#53cebf 118.63%)" }} className='
           w-28 h-28  relative right-12 bottom-12
          rounded-full flex flex-col justify-center items-center
          text-white text-center
          '>
                    <img src="https://umico.az/images/icons/birCredit.svg" className=' w-9 h-9' alt="" />
                    <span className="font-bold">
                        6 aylıq
                    </span>
                    taksit
                </span>
            </div>
        </div>
    )
}

export default Images
