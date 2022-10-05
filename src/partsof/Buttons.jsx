import React from 'react'

function Buttons() {
    return (
        <div className='mt-4 flex flex-col items-center'>
            <div>
                <button className='ml-2 text-white border-[1px] rounded-sm px-6 font-bold py-2 text-normal border-[#7c61e2] bg-[#7c61e2]'>
                    Səbətə əlavə etmək
                </button>
                <button className='ml-2 border-[1px] rounded-sm px-6 py-2 text-normal text-[#7c61e2] font-bold border-[#7c61e2]'>
                    Kreditlə almaq
                </button>
            </div>
            <div>
                <button className='ml-2 border-[1px] rounded-sm px-4 w-96 mt-3 py-2 text-normal text-[#7c61e2] font-bold border-[#7c61e2]'>
                    Bir kliklə almaq
                </button>
            </div>
        </div>
    )
}

export default Buttons
