import React from 'react'

const Servicio = ({ legend, price, time }) => {
    return (
        <section className=''>
            <div>
                <div>{legend}</div>
                <div>{price}, {time}</div>
            </div>

        </section>
    )
}

export default Servicio