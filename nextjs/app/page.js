'use client'
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Formulario from "./formulario/page";
import Date from "./fechahora/page";
import Servicio from "./components/Servicio";
import Navbar from "./components/Navbar";
import {token} from '../public/token'

export default function Home() {
  const [servivcio, setServicio] = useState([]);
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
        setServicio(res)
    } catch (error) {
        console.log(error.message);
    }
}
    useEffect(() => {
      getServicio();
  }, [])


 

  return (  
    <>      <Navbar></Navbar>
        <div className='h-screen w-full bg-[#303030] flex justify-around'>
            <div class="w-2/3 mt-5 content-center">
                <div class="text-2xl font-1 text-white pb-10">
                    Seleccione un Servicio
                </div>
                <div>
                    <form action="" className='w-full flex flex-col'>
                        <div className='flex-col justify-center'>
                          {servivcio.map((item) => (
                                  <div>
                                      <Servicio legend={item.descripcion} price={item.price} time={'30 Minutos'} id={item.idservicio}/>
                                  </div>
                        ))}
                        </div>
                        <div className='grid grid-cols-2 gap-8 items-center'>
                            <div class="text-l w-full font-1 text-white pt-7 colspan-1 ">
                                <u>Tienes alguna duda? Conoce nuestras politicas de reserva</u>
                            </div>
                            <button onClick={(e) => {e.preventDefault(); window.location.href = 'fechahora'}}
                                    class="w-2/3 h-2/3 justify-self-end colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                Siguiente
                            </button>
                        </div>

                    </form>
                </div>
            </div>

        </div>
      </>
    )
}
