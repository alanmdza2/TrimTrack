'use client'
import Servicio from '@/components/Servicio'
import Calendar from '@/components/Calendar'
import Appointment from '@/components/Appointment'
import { useState, useEffect } from 'react'

const page = () => {
    const [opcion, setOpcion] = useState("");
    const handleChange = (e) => {
        setOpcion(e.target.value)
        console.log(opcion);
    }
    const getData = async () => {
        try {
            const api = 'https://trimtrack-production.up.railway.app/api/turno';
            const data = await fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3OCIsImlhdCI6MTcxMTMyMjg4MCwiZXhwIjoxNzExMzI0MzIwfQ.0Fo_T1Mm26U5EFcOBYRaqXXcIiHcufYewm2VUWHBVWs'
                }
            });
            const res = await data.json();
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData();
    }, [])

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
                            {/* <button className="w-2/3 h-2/3 justify-self-end colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                Siguiente
                            </button> */}
                        </div>
                        {opcion && (
                            <div>
                                <div className="h-full max-w-full bg-[#303030] flex justify-around">
                                    <div className=" pt-8 grid grid-cols-2 content-center gap-x-14 ">
                                        <div className="colspan-1">
                                            <div className="text-2xl font-1 text-white pb-10">
                                                Seleccione una fecha y hora
                                            </div>
                                            <div className="background p-7 rounded-xl">
                                                <div className="calendar-background rounded-xl">
                                                    <Calendar />
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
                                                        <Appointment />
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
                                <div>
                                    <div className="h-full max-w-full bg-[#303030] flex justify-around">
                                        <div>
                                            Ingrese sus datos:
                                        </div>
                                        <div className='fild'>
                                            <p>Nombre y apellido</p>
                                            <textarea id='nombre'></textarea>
                                        </div>
                                        <div className='fild' style={{ display: "flex" }}>
                                            <div>
                                                <p>Nº de documetno</p>
                                                <textarea id='documento'></textarea>
                                            </div>
                                            <div style={{ marginLeft: "auto" }}>
                                                <p>Telefono</p>
                                                <textarea id='telefono'></textarea>
                                            </div>
                                        </div>
                                        <div className='fild'>
                                            <p>Comentarios</p>
                                            <textarea id="comentario" style={{ height: "120px" }}></textarea>
                                        </div>
                                        <div className='fild' style={{ textAlign: "center" }}>
                                            <p>Estoy de acuerdo con las politicas reservadas</p>
                                        </div>
                                        <div className='butons'>
                                            <button>Finalizar</button>
                                            <button>Atras</button>
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