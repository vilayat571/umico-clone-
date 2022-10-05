import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getBadges } from '../redux/slices/badgeSlice'
function PromoImage() {
  const dispatch = useDispatch();
  const data = useSelector(state => state.badgeReducer.badges);
  useEffect(() => {
    dispatch(getBadges())
  }, [dispatch]);
  console.log(data)
  return (
    <div className="h-[400px] flex justify-between flex-col items-center" >
      {
        data && data.map((item) => (
          <img alt='badgesekli' className=' w-[280px] h-[122px] rounded-sm  ' src={item.url} key={item.id} />
        ))
      }
    </div>
  )
}

export default PromoImage
