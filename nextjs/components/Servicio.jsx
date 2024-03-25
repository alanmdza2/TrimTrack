import React from 'react'

const Servicio = ({ informacion }) => {
    return (
        <div>
            {informacion.map((item) => (
                <div key={item.idservicio} className='bg-[#424549] w-full rounded-md mb-5'>
                    <div className="grid grid-cols-2 items-center">
                        <div className="colspan-1">
                            <div className='px-10'>
                                <div><p className='text-lg text-white'>{item.descripcion}</p></div>
                                <div><p className='text-xs text-white'></p>30 Minutos</div>
                            </div>
                            <div className=' px-10'>
                                <p className='text-lg text-white'>{item.precio}</p>
                            </div>
                        </div>
                        <div className="colspan-1 content-center justify-self-end pr-10">
                            <input type="checkbox" name={item.idservicio} id={item.idservicio} />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Servicio