import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/slices/productSlice';
import ProductCart from './ProductCart';
function Products() {
    const data = useSelector(state => state.productReducer.products);
    const [limit, setLimit] = useState(15)
    const dispatch = useDispatch();

    useEffect(() => {
        
        dispatch(getProducts({ limit }));
    }, [dispatch,limit ]);
    const handleClick = () => {
        setLimit(limit + 5);
        dispatch(getProducts({ limit }));
    }
    return (
        <div>
            <div className="flex justify-center mt-10">
                <div className="grid grid-cols-5 gap-2">
                    {
                        data.products !== undefined ? data.products.map((product, index) => {
                            return (
                                <ProductCart key={index} product={product} />
                            )
                        }) : 'Loading..'
                    }
                </div>
            </div>
            <div className='w-full mt-12 text-center font-bold'>
                {
                    limit === 30 ?
                        <button className=' border-[1px] rounded-sm text-[#8075ae] border-[#8075ae] px-12 py-2'
                            disabled="disabled">
                            Products was not already
                        </button> :
                        <button onClick={() => handleClick()} className=' border-[1px] rounded-sm text-[#8075ae] border-[#8075ae] px-12 py-2'>
                            Show more
                        </button>
                }
            </div>
        </div>
    )
}

export default Products
