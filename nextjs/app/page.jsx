'use client'
import Servicio from '@/components/Servicio'
import Calendar from '@/components/Calendar'
import Appointment from '@/components/Appointment'
import { useState, useEffect } from 'react'

const page = () => {
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3OCIsImlhdCI6MTcxMTMzMjI5MCwiZXhwIjoxNzExMzMzNzMwfQ.KY3qPwGuzWCo39RfRDRfTTKZWDCi86GBpmncWBzKb5Q';
    const [data, setData] = useState([]);
    const [opcion, setOpcion] = useState("");
    const [servicio, setServicio] = useState("");
    const handleChange = (e) => {
        setOpcion(e.target.value)
        console.log(opcion);
    }
    const getServicio = async () => {
        try {
            const api = 'https://trimtrack-production.up.railway.app/api/servicio';
            const data = await fetch(api, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                }
            });
            const res = await data.json();
            console.log(res);
            setData(res)
        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getServicio();
    }, [])

    return (
        <div className='h-full w-full bg-[#303030] flex justify-around'>
            <div className="w-2/3 mt-5 content-center">
                <div className="text-2xl font-1 text-white pb-10">
                    Seleccione un Servicio
                </div>
                <div>
                    <form action="" className='w-full flex flex-col' onChange={handleChange}>
                        <div className='flex-col justify-center'>
                            {data.map((item) => {
                                console.log(item);
                                <div key={item.idservicio}>
                                    <Servicio legend={item.descripcion} price={item.precio} time={'15 Minutos'} id={item.idservicio} />
                                </div>
                            })}
                        </div>
                        {opcion && (
                            <div>
                                <div className="max-w-full bg-[#303030] flex justify-around">
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
                                        </div>
                                        <div className="colspan-1">
                                            <div className="pt-16">
                                                <div className="h-96 p-6 background rounded-xl overflow-y-scroll scroll-smooth">
                                                    <div className="flex flex-col w-full">
                                                        <Appointment />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <h3>Completa tus Datos</h3>
                                    <div className='grid grid-cols-2'>
                                        <div className='flex flex-col text-white items-center'>
                                            <p>Nombre y apellido</p>
                                            <input className='w-5/6 rounded-md h-9 text-black' type="text" />
                                        </div>
                                        <div className='flex flex-col text-white items-center'>
                                            <p>Nº de documetno</p>
                                            <input className='w-5/6 rounded-md h-9 text-black' type="number" />
                                        </div>
                                    </div>
                                    <div className='grid grid-cols-2'>
                                        <div className='flex flex-col text-white items-center'>
                                            <p>Telefono</p>
                                            <input className='w-5/6 rounded-md h-9 text-black' type="text" />
                                        </div>
                                        <div className='flex flex-col text-white items-center'>
                                            <p>Comentarios</p>
                                            <textarea className='w-5/6 rounded-md h-9 text-black' ></textarea>
                                        </div>
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
                        )}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default page