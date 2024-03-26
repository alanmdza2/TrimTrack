'use client'
import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Appointment from "../components/Appointment";
import { token } from '../../public/token'
import Boton from "../components/Boton";

export default function DateReservation() {
    const [selectedDate, setSelectedDate] = useState(null);
    const [availableAppointments, setAvailableAppointments] = useState([]);
    const [fechaHora, setFechaHora] = useState("");
    const [servicio, setServicio] = useState(localStorage.getItem('tipoServicio'))

    const [turno, SetTurno] = useState({
        fechahora: "",
        nota: "",
        idUsuario: "1",
        idServicio: "",
    });

    useEffect(() => {
        if (selectedDate) {
            fetchAppointments(selectedDate);
        }
    }, [selectedDate]);

    const fetchAppointments = (date) => {
        const url = `https://trimtrack-production.up.railway.app/api/turno?fecha=${date}`;
        console.log();
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
        };

        fetch(url, requestOptions)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al obtener los turnos');
                }
                return response.json();
            })
            .then(data => {
                setAvailableAppointments(data);
            })
            .catch(error => {
                console.error('Error al obtener los turnos:', error);
            });
    };

    const handleDateSelect = (date) => {
        date = `${date.$y}-${(date.$M) + 1}-${date.$D}` //armar el date
        setSelectedDate(date);
    };

    function clearString(str) {
        var eight = str.substring(11, 16);
        return eight;
    }

    const generateHourArray = () => {
        const startHour = 8;
        const endHour = 16;
        const hourArray = [];
        for (let hour = startHour; hour <= endHour; hour++) {
            const formattedHour = hour < 10 ? `0${hour}` : `${hour}`;
            hourArray.push(`${formattedHour}:00`);
        }
        return hourArray;
    };
    const handleSubmit = async (e) => {

        e.preventDefault();
        console.log("paso")
        setFechaHora(localStorage.getItem('dia'));
        SetTurno({
            fechaHora: fechaHora,
            nota: "",
            idUsuario: "1",
            idServicio: servicio,
        })

        console.log(turno)
        //Cookies.set('usuario', JSON.stringify(usuario));
        //window.location.href = 'home'
    };

    const updatedHourArray = generateHourArray().filter(hour => !availableAppointments.some(appointment => clearString(appointment.fechahora) === hour));

    return (
        <div>
            <div class="h-screen max-w-full bg-[#303030] flex justify-around">
                <div class=" pt-8 grid grid-cols-2 gap-x-14 ">
                    <div class="colspan-1">
                        <div class="text-2xl font-1 text-white pb-10">
                            Seleccione una fecha y hora
                        </div>
                        <div class="background p-7 rounded-xl">
                            <div class="calendar-background rounded-xl">
                                <Calendar onDateSelect={handleDateSelect} ></Calendar>
                            </div>
                        </div>
                        <div class="text-l font-1 text-white pt-7">
                            <u>Tienes alguna duda? Conoce nuestras politicas de reserva</u>
                        </div>
                    </div>
                    <div class="colspan-1">
                        <div class="pt-16">
                            <div class="h-96 p-6 background rounded-xl overflow-y-scroll scroll-smooth">
                                <div class="flex flex-col w-full">
                                    {updatedHourArray.map((updatedHour, index) => (
                                        <Appointment key={index} hour={updatedHour} />
                                    ))}
                                </div>
                            </div>
                            <div class="grid grid-cols-2 gap-x-8 pt-8">
                                <button onClick={(e) => { e.preventDefault(); window.location.href = '/' }}
                                    class="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Atrás
                                </button>
                                {/* <button onClick={(e) => { e.preventDefault(); window.location.href = 'formulario' }}
                                    class="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Siguiente
                                </button> */}
                                <Boton legend={'Siguiente'} ruta={'formulario'} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}