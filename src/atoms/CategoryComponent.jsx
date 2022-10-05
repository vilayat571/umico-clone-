import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCategory } from '../redux/slices/categorySlice';

function CategoryComponent() {
    const dispatch = useDispatch();
    const category = useSelector(state => state.categoryReducer.category);
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);
    return (
        <div className='
        no-scrollbar
           h-[400px]
          overflow-auto px-5
           text-[#242b59] tracking-wide font-medium
           ' >
            {
                category && category.map((item,index) => {
                    return (
                        <Link key={index} to={`/categories/${item}`} className='block px-3 py-1 text-[14px] capitalize'>
                            {item}
                        </Link>
                    )
                })
            }
        </div>
    )
};
export default CategoryComponent;
