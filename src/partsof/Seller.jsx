import React from 'react'
import Seller1 from './Seller1'

function Seller({ product }) {
    return (
        <div className='flex flex-col items-start justify-between h-96'>
            <Seller1 product={product} />
            <div></div>
            <div></div>
        </div>
    )
}

export default Seller
