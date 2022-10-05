import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCategory } from '../redux/slices/categorySlice';
import Form from '../partsof/Form';

function Searchbar() {
    const dispatch = useDispatch();
    const [value, setValue] = useState('/');
    const navigate = useNavigate()
    const category = useSelector(state => state.categoryReducer.category);
    useEffect(() => {
        dispatch(getCategory());
    }, [dispatch]);
    const handleChange = (e) => {
        setValue(e.target.value);
        navigate(value !== '/' && `/${value}`)
    }
    return (
        <div className='flex'>
            <select value={value}
                className={' bg-[#7c61e2] mr-2 rounded-sm font-bold py-2 px-2 text-sm text-white capitalize border-0 outline-none no-scrollbar'}
                onChange={(e) => handleChange(e)}>
                <optgroup>
                    {
                        category ? category.map((item, index) => (
                            <option key={index} value={item}>
                                {item}
                            </option>
                        )) : "Loading.."
                    }
                </optgroup>
            </select>
            <Form />
        </div>
    )
}

export default Searchbar
