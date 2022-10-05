import React from 'react'
import Badge from './Badge'

function BadgeGroup({ product }) {
    return (
        <div className='flex flex-row justify-between'>
            <Badge title={`${Math.trunc(product.discountPercentage)}% endirim`} sitil={' ml-2 rounded-[1px] bg-[#ff4b82]  flex justify-center items-center text-center px-1 text-[11px] text-white font-bold'} />
            <Badge title={`Ən yaxşı qiymət`} sitil={' ml-2 rounded-[1px] bg-[#4caf50]  flex justify-center items-center text-center px-1 text-[11px] text-white font-bold'} />
            <Badge title={`<> ƏDV`} sitil={` ml-2 rounded-[1px] bg-[#3f51b5]  flex justify-center items-center text-center px-1 text-[11px] text-white font-bold`} />
            <Badge title={`Pulsuz çatdırılma`} sitil={`ml-2 rounded-[1px] border-[1px] border-[#4caf50]  flex justify-center items-center text-center px-1 text-[11px] text-[#4caf50] font-bold`} />
            <Badge title={`2 ilədək kredit`} sitil={` ml-2 rounded-[1px] bg-[#f7ad4f]  flex justify-center items-center text-center px-1 text-[11px] text-white font-bold`} />
        </div>
    )
}

export default BadgeGroup
