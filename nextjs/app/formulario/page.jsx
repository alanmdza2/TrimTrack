'use client'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { token } from '../../public/token'
import Boton from '../components/Boton';

export default function Formulario() {

  const [usuario, setUsuario] = useState({
    nombreapellido: "",
    telefono: "",
    mail: "",
    contrasenia: "",
    dni: ""
  });

  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    console.log("usuario creado")
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
  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="main">
        <div style={{ width: "78%", margin: '0 auto', marginTop: '10%' }}>
          <div>
            Ingrese sus datos:
          </div>
          <div className='fild'>
            <p>Nombre y apellido</p>
            <textarea id='nombre' name='nombreapellido' onChange={handleChange}></textarea>
          </div>
          <div className='fild' style={{ display: "flex" }}>
            <div>
              <p>Nº de documetno</p>
              <textarea id='documento' name='dni' onChange={handleChange}></textarea>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <p>Telefono</p>
              <textarea id='telefono' name='telefono' onChange={handleChange}></textarea>
            </div>
          </div>
          <div className='fild'>
            <p>Comentarios</p>
            <textarea id="comentario" style={{ height: "120px" }}></textarea>
          </div>
          <div className='fild' style={{ display: "flex" }}>
            <input type="checkbox" name="" id="" style={{ marginRight: "15px" }} />
            <p>Estoy de acuerdo con las politicas reservadas</p>
          </div>
          <div className='butons'>
            <Boton legend={'Finalizar'} onClick={(e) => {handleSubmit(e)}} />
            <Boton legend={'Atras'} onClick={(e) => {handleSubmit(e)}} />
          </div>
        </div>
      </div>
    </form >

  )
}