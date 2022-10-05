import React from 'react';
import { Link } from 'react-router-dom';
function Icons() {
    return (
        <div className='flex w-[200px] font-semibold justify-between items-center'>
            <Link to={'/'} className="w-auto flex font-semibold justify-between items-center text-[16px] text-white" >
                {/* <ShoppingCartIcon className='w-5 mr-2' /> Cart */}
            </Link>
            <Link to={'/'} className="w-auto flex font-semibold justify-between items-center text-[16px] text-white" >
              {/*   <HeartIcon className='w-5 mr-2' /> Favorites */}
            </Link>
        </div >
    )
}

export default Icons
