'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Formulario (){
    
    const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIyNzEwODQzMiIsImlhdCI6MTcxMTM0NzM1MywiZXhwIjoxNzExMzQ4NzkzfQ.xjYbaPg2ASe1glea_3bc-y6wAJQ9enTVzwuXv-ug2Mo';


    const [usuario, setUsuario] = useState({
        nombreapellido: "",
        telefono: "",
        mail: "",
        contrasenia: "",
        dni: ""
      });

    const handleChangeUsuario = (e) => {
        setUsuario({
          ...usuario,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmitUsuairo = async (e) => {
        e.preventDefault();
         try {
             const response = await fetch(`https://trimtrack-production.up.railway.app/api/auth/register`, {
               method: 'POST',
               headers: {
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${token}`
                
               },
               body: JSON.stringify(usuario),
             });
           } catch (error) {
             console.error('Error agregando usuario:', error);
           }
        //Cookies.set('usuario', JSON.stringify(usuario));
        //window.location.href = 'home'
      };
    return(
        <form method="POST" onSubmit={handleSubmitUsuairo}>
        <body>
        <div className="nav"></div>
    
        <div className="main">
            <div style={{width: "78%", margin: '0 auto',  marginTop: '10%'}}>
                <div>
                    Ingrese sus datos:
                </div>
                <div className='fild'>
                    <p>Nombre y apellido</p>
                    <textarea id='nombre' name='nombreapellido' onChange={handleChangeUsuario}></textarea>
                </div>
                <div className='fild' style={{display: "flex"}}>
                    <div>
                        <p>Nº de documetno</p>
                        <textarea id='documento' name='dni' onChange={handleChangeUsuario}></textarea>
                    </div>
                    <div style={{marginLeft: "auto"}}> 
                        <p>Telefono</p>
                        <textarea id='telefono' name='telefono'onChange={handleChangeUsuario}></textarea>
                    </div>
                </div>
                <div className='fild'>
                    <p>Comentarios</p>
                    <textarea id="comentario" style={{height: "120px"}}></textarea>
                </div>
                <div className='fild' style={{textAlign: "center"}}>
                    <p>Estoy de acuerdo con las politicas reservadas</p>
                </div>
                <div className='butons'>
                    <button>Finalizar</button>
                    <button>Atras</button>
                </div>
                
            </div>
        </div>
    
        <div className="foot">
        </div>
    </body>
    </form>
        )
}