import React from 'react'

const Servicio = ({ legend, price, time }) => {
    return (
            <div className='bg-[#424549] flex flex-row justify-between w-1/3 m-3 py-1 rounded-md'>
                <div className='flex flex-col px-10'>
                    <div><p className='text-lg'>{legend}</p></div>
                    <div><p className='text-xs'>{time}</p></div>
                </div>
                <div className='flex items-center px-10'>
                    <p className='text-lg'>{price}</p>
                </div>
            </div>
    )
}

export default Servicio