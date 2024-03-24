import React from "react";

export default function Navbar() {
   return (
      <div class="h-20 max-w-full bg-[#1E1F22] content-center">
         <div class="grid grid-cols-6 place-items-center">
            <div class="flex items-stretch">
               <div class="self-center">
                  <svg class="w-7 h-7 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                     <path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                  </svg>
               </div>
            </div>
            <div class="col-start-2 col-span-4">
               <h1 class="text-white text-4xl font-2">KIEV</h1>
            </div>

         </div>
      </div>
   );
}