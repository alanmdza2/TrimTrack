//instalar npm i react-hook-form
//
"use client"

import { useForm } from 'react-hook-form'




function Home() {


  const { register , handleSubmit } = useForm();

  return(

    <div>

      <form onSubmit={handleSubmit(data => {console.log(data)})}>


      <label htmlFor="fechayhora">Seleccione una fecha y hora</label>

      

      <label htmlFor="nombreyapellido">Nombre y Apellido*</label>
      <input type="text" id="nombreyapellido" className="inputNombre"
      {...register('nombreyapellido')}/>

      <table>
      <tr>
        <td><label htmlFor="documento">N° de Documento*</label></td>
        <td><label htmlFor="telefono">Telefono*</label></td>
      </tr>

      <tr>
        <td><input type="text" id="documento" className="inputDocumento"
        {...register('documento')}/>
        </td>

        <td><input type="text" id="telefono"  className="inputTelefono"
        {...register('telefono')}/>
        </td>
      </tr>

      </table>

      
      <label htmlFor="comentario" >Comentario*</label>
      <input type="text" id="comentario"  className="inputComentario"
      {...register('comentario')}/>

      <table className="politicas">
      <tr>
      <td>
      <input type="checkbox" name="myCheckbox" defaultChecked={false} />
      </td>
      <td><p>Estoy de acuerdo con las politicas de reserva</p></td>

      </tr>
      </table>
    
      <table>
      <td><button type="submit" className="button1">Atras</button></td>
      
      <td><button type="submit" className="button1" >Finalizar</button></td>
      
      </table>


      </form>
      

    </div>

  )


}

export default Home