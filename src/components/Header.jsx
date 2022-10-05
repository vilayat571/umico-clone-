import React from 'react';
import { Link } from 'react-router-dom';
/* import { PhoneIncomingIcon } from '@heroicons/react/solid';
 */function Header() {
  return (
    <div className="flex justify-center items-center w-full bg-[#242b59] py-1 font-semibold">
      <div className=' bg-[#242b59] flex justify-between w-[87%] items-center text-white py-2 text-sm font-medium '>
        <div className=' flex font-semibold items-center justify-between'>
          <button>
            Company catalog
          </button>
          <Link className='mx-4' to={'/privacy'} >
            Privacy
          </Link>
          <Link className='mx-4' to={'/termsofuse'} >
            Terms Of Use
          </Link>
          <Link className='mx-4' to={'/about'} >
            About
          </Link>
        </div>
        <div className='flex justify-between items-center'>
          <div className='flex justify-between items-center mx-2'>
          {/*   <PhoneIncomingIcon className="h-5 w-5 text-white" /> */} <span className=' mx-2 font-semibold ' >Call us</span>
          </div>

          {
            localStorage.getItem('token') ? <Link className=' font-semibold mx-4 border-[1px] py-1 rounded-sm border-white  px-6' to={'/account'} >
              My account
            </Link> : <div>
              <Link className=' font-semibold mx-4 border-[1px] py-1 rounded-sm border-white  px-6' to={'/register'} >
                Register
              </Link>
              <Link className=' font-semisemibold mx-4 border-[1px] py-1 rounded-sm border-white  px-6' to={'/login'} >
                Login
              </Link>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Header
