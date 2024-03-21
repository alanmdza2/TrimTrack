import React from 'react'
import Servicio from '@/components/Servicio'
import Button from '@/components/Button'

const page = () => {
    return (
        <section className='bg-'>
            <div>
                <h4>Seleccione un Servicio</h4>
            </div>
            <div><h5>Placeholder barra de progreso</h5></div>
            <div>
                <Servicio legend={'Corte de pelo'} price={'$3800'} time={'15 Minutos'} />
                <Servicio legend={'Corte de Pelo + Barba'} price={'$4000'} time={'30 Minutos'} />
                <Servicio legend={'Color'} price={'$5500'} time={'60 Minutos'} />
            </div>
            <div>
                <p>¿Tenes alguna duda? Conoce nuestra politica de reservas.</p>
                <Button legend={'Siguiente'} />
            </div>
        </section>
    )
}

export default page