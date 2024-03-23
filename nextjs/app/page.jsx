'use-client'
import React, { useEffect } from 'react'
import Servicio from '@/components/Servicio'
import Button from '@/components/Button'

const page = () => {
    const getData = async (e) => {
        const api = 'http://localhost:8080/api/turno';
        const data = await fetch(api, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                //'bearer': 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJpYXQiOjE3MTEyMDU0MDIsImV4cCI6MTcxMTIwNjg0Mn0.pHifingm8l4e5eQJjKQ68bW8GppyDo3oxzad8QzdfEc'
            }
        });
        const res = await data.json();
        console.log(res);
    }

    useEffect(() => {
        getData();
    }, [])

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