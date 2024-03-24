'use client'
import React from "react";
import Navbar from "../components/Navbar";
import Calendar from "../components/Calendar";
import Appointment from "../components/Appointment";

export default function DateReservation() {
    return (
        <div>
            <Navbar></Navbar>
            <div class="h-screen max-w-full bg-[#303030] flex justify-around">
                <div class=" pt-8 grid grid-cols-2 content-center gap-x-14 ">
                    <div class="colspan-1">
                        <div class="text-2xl font-1 text-white pb-10">
                            Seleccione una fecha y hora
                        </div>
                        <div class="background p-7 rounded-xl">
                            <div class="calendar-background rounded-xl">
                                <Calendar></Calendar>
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
                            <div class="grid grid-cols-2 gap-x-8 pt-8">
                                <button class="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
                                    Atrás
                                </button>
                                <button class="colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl">
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