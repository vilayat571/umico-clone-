import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getResult } from '../redux/slices/resultSlice';
function Form() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [query, setQuery] = useState('');
    const handleChange = (e) => {
        setQuery(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(getResult(query));
        setTimeout(() => {
            navigate('/resultpage');
            setQuery('');
        }, 1500)
    };
    return (
        <form onSubmit={(e) => handleSubmit(e)} className='flex' action='get'>
            <input onChange={(e) => handleChange(e)} placeholder=' Keywords.. '
                value={query} className=' rounded-sm outline-none border-0 indent-2 text-sm w-96' type="text" />
            <button className=' bg-[#7c61e2] ml-2 rounded-sm px-3 '>
               {/*  <SearchIcon className=' text-white w-5' /> */}search
            </button>
        </form>
    )
}

export default Form
