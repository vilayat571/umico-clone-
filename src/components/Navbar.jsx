import React from 'react'
import Icons from '../atoms/Icons'
import Logo from '../atoms/Logo'
import Searchbar from '../atoms/Searchbar'

function Navbar() {
  return (
    <div className=' bg-[#242b59] h-16 flex justify-evenly items-center'>
      <div>
      <Logo />
      </div>
      <div>
        <Searchbar />
      </div>
      <div>
        <Icons />
      </div>
    </div>
  )
}

export default Navbar
