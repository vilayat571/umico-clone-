import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getSlider } from '../redux/slices/sliderSlice';

function Slider() {
  const dispatch = useDispatch();
  const [number, setNumber] = useState(0)
  const slider = useSelector(state => state.sliderReducer.slider);
  useEffect(() => {
    dispatch(getSlider())
  }, [dispatch]);
  useEffect(() => {
    number < 2 ? setTimeout(() => {
      setNumber(number + 1);
    }, 3000) : number === 2 && setTimeout(() => {
      setNumber(0)
    }, 3000)
  }, [number]);
  return (
    <div className='mr-3'>
      {
        slider.length > 0 && <img className=' w-[720px] h-[400px]  '
          src={slider[number].url} alt="" />
      }
    </div>
  )
}
export default Slider;