import { useRouter } from 'next/navigation'
import React from 'react'

const Boton = ({ legend, ruta }) => {
  const router = useRouter();
  return (
    <button className='colspan-1 bg-[#5865F2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl'
      onClick={(e) => {
        console.log(ruta);
        if (ruta !== undefined) {
          e.preventDefault()
          router.push(`${ruta}`)
        }
      }}>
      {legend}
    </button>
  )
}

export default Boton