import React from 'react';
import BadgeGroup from '../partsof/BadgeGroup';
import Buttons from '../partsof/Buttons';
import ProductDetails from '../partsof/ProductDetails';
function Description({ product }) {
    return (
        <div className='h-96 w-auto flex flex-col items-start '>
            <BadgeGroup product={product} />
            <ProductDetails product={product} />
            <Buttons />
        </div>
    )
}

export default Description
