//import React, { useState, useEffect } from 'react';
import '../../public/style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash,faPenToSquare } from '@fortawesome/free-solid-svg-icons';

export default function Update (){
    // const [turnos, setTurno] = useState([]);
    // const [servicio, setServicio] = useState([]);

    // useEffect(() => {
    //     async function obtenerTurnos() {
    //         var textarea = document.getElementById("miTextarea");
    //         var datos = textarea.value;
    //         setTurno(await '/api/turno/{datos}');
    //     }
    //   }, []);

    // useEffect(() => {
    //     async function obtenerServicio(id) {
    //         setServicio(await '/api/servicio/${id}');
    //     }
    //   }, []);


    return(
        <body>
        <div className="nav"></div>
    
        <div className="main">
            <div style={{width: "78%", margin: '0 auto',  marginTop: '10%'}}>
                <div>
                    Ingrese sus datos:
                </div>
                <div className='fild'>
                    <p>Nombre y apellido</p>
                    <textarea id='nombre'></textarea>
                </div>
                <div className='fild' style={{display: "flex"}}>
                    <div>
                        <p>Nº de documetno</p>
                        <textarea id='documento'></textarea>
                    </div>
                    <div style={{marginLeft: "auto"}}> 
                        <p>Telefono</p>
                        <textarea id='telefono'></textarea>
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
        )
}