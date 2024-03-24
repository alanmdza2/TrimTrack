'use client'

import Servicio from '@/components/Servicio'
import Button from '@/components/Button'
import Calendar from '@/components/Calendar'
import Appointment from '@/components/Appointment'
import { useState } from 'react'

const page = () => {
    const [opcion, setOpcion] = useState("");
    const handleChange = (e) => {
        setOpcion(e.target.value)
        console.log(opcion);
    }
    /*const getData = async (e) => {
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
    */
    return (
        <div className='h-screen w-full bg-[#303030] flex justify-around'>
            <div className="w-2/3 mt-5 content-center">
                <div className="text-2xl font-1 text-white pb-10">
                    Seleccione un Servicio
                </div>
                <div>
                    <form action="" className='w-full flex flex-col' onChange={handleChange}>
                        <div className='flex-col justify-center'>
                            <div>
                                <Servicio legend={'Corte de pelo'} price={'$3800'} time={'15 Minutos'} />
                            </div>
                            <div>
                                <Servicio legend={'Corte de Pelo + Barba'} price={'$4000'} time={'30 Minutos'} />
                            </div>
                            <div>
                                <Servicio legend={'Color'} price={'$5500'} time={'60 Minutos'} />
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-8 items-center'>
                            <div className="text-l w-full font-1 text-white pt-7 colspan-1 ">
                                <u>Tienes alguna duda? Conoce nuestras politicas de reserva</u>
                            </div>
                            {/* <button className="w-2/3 h-2/3 justify-self-end colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                Siguiente
                            </button> */}
                        </div>
                        {opcion && (
                            <div className="h-full max-w-full bg-[#303030] flex justify-around">
                                <div className=" pt-8 grid grid-cols-2 content-center gap-x-14 ">
                                    <div className="colspan-1">
                                        <div className="text-2xl font-1 text-white pb-10">
                                            Seleccione una fecha y hora
                                        </div>
                                        <div className="background p-7 rounded-xl">
                                            <div className="calendar-background rounded-xl">
                                                <Calendar></Calendar>
                                            </div>
                                        </div>
                                        <div className="text-l font-1 text-white pt-7">
                                            <u>Tienes alguna duda? Conoce nuestras politicas de reserva</u>
                                        </div>
                                    </div>
                                    <div className="colspan-1">
                                        <div className="pt-16">
                                            <div className="h-96 p-6 background rounded-xl overflow-y-scroll scroll-smooth">
                                                <div className="flex flex-col w-full">
                                                    <Appointment></Appointment>
                                                </div>
                                            </div>
                                            {/* <div className="grid grid-cols-2 gap-x-8 pt-8">
                                                <button className="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                                    Atrás
                                                </button>
                                                <button className="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                                    Siguiente
                                                </button>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page