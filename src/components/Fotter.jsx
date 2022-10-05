import React from 'react'

function Fotter() {
  return (
    <>
      <hr className=" bg-white text-[#fff] w-full" />
      <div className='flex w-full justify-between items-center px-6 h-auto mt-2 mb-4'>
        <div className='flex flex-col justify-between items-center'>
          <div className='flex flex-col text-left'>
            <h1 className='text-xl font-bold text-[#1e244d] space-x-3'>Call us</h1>
            <br />
            <h1 className='text-xl font-bold text-[#1e244d] space-x-3'>Hotline</h1>
            <span className='text-[40px] font-bold text-[#1e244d] space-x-3'>
              915
            </span>
            <span className=' font-lighter text-[#000000] space-x-3'>
              For calls from other countries
            </span>
    
            <span className=' font-lighter text-[#000000] space-x-3'>
              +994 12 210 00 21
            </span>
            <span className=' font-lighter text-[#000000] space-x-3'>
              Working hours
            </span>
            <span className=' font-bold text-[#131827] space-x-3'>
              B.e. - C.9:00 – 00:00
            </span>
            <span className=' font-bold text-[#131827] space-x-3'>
              Ş - B.10:00 – 00:00
            </span>
          </div>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <div>
            div1
          </div>
          <div>
            div2
          </div>
        </div>
        <div className='flex flex-col justify-between items-center'>
          <div>
            div1
          </div>
          <div>
            div2
          </div>
        </div>
      </div>
    </>
  )
}

export default Fotter
