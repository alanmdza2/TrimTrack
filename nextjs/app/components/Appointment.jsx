import React from "react";

export default function Appointment({hour}){
    return(
        <div className=" h-10 bg-[#ffffff] mb-5 text-center content-center rounded-lg text-black">
            {hour} hs
        </div>
    );
}
