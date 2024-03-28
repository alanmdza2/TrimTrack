import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <p className='pl-2 flex flex-row'>Al reservar y confirmar un turno, estás de acuedo con nuestra
                <Link className='underline pl-1'
                    href={'/politicasdereserva'}> política de privacidad
                </Link>
                .</p>
        </div>
    )
}

export default Footer