import React from 'react'

const Servicio = ({ legend, price, time, selected, id }) => {
    const handleChange = async (e) => {
        localStorage.setItem('tipoServicio', e.target.value);
        console.log(localStorage.getItem('tipoServicio'))
      }
    return (
        <div className='bg-[#424549] w-full rounded-md mb-5'>
            <div class="grid grid-cols-2">
                <div class="colspan-1">
                    <div className='px-10'>
                        <div><p className='text-lg text-white'>{legend}</p></div>
                        <div><p className='text-xs text-white'>{time}</p></div>
                    </div>
                    <div className=' px-10'>
                        <p className='text-lg text-white   '>{price}</p>
                    </div>
                </div>
                <div class="colspan-1 content-center justify-self-end pr-10">
                    <input type="checkbox" name="" value={id} onChange={handleChange}/>
                </div>
            </div>

        </div>
    )
}

export default Servicio