import React from "react";

export default function Header(){
   return(
      <div class="container h-20 max-w-full bg-[#1E1F22]">
         <div class="grid grid-cols-6 place-items-center">
            <div class="flex items-stretch">
               <div class="self-center">
               <img src="/burger.svg"  alt="burger-icon"/>
               </div>
            </div>
            <div class="col-start-2 col-span-4">
               KIEV<br></br>
               Salon masculino
            </div>
            <div>03</div>
         </div>
      </div>
   );
}