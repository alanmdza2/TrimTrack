import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <p className='pl-2 flex flex-row'>Al reservar un turno, estas de acuedo con nuestras
                <Link className='underline pl-1'
                    href={'/politicasdereserva'}> politicas de reserva
                </Link>
                .</p>
        </div>
    )
}

export default Footer