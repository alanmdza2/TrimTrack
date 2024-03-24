'use client'
import React from "react";
import Calendar from "../../components/Calendar";
import Appointment from "../../components/Appointment";

export default function DateReservation() {
    return (
        <div>
            <div className="h-screen max-w-full bg-[#303030] flex justify-around">
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
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                    <Appointment></Appointment>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-8 pt-8">
                                <button className="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Atrás
                                </button>
                                <button className="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Siguiente
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}