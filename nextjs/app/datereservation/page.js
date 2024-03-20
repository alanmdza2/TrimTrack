'use client'
import React from "react";
import Header from "../components/Header";
import ReactPlayer from 'react-player/lazy';

export default function DateReservation() {
    return (
        <div>
            <Header></Header>
            <div class="container h-screen max-w-full bg-[#303030] flex justify-left ">
                <div class="mt-20 ml-20">
                    <div class="text">
                        Seleccione una fecha y hora
                    </div>
                    <ReactPlayer url='https://www.youtube.com/watch?v=ysz5S6PUM-U' />
                </div>

            </div>
        </div>
    );
}