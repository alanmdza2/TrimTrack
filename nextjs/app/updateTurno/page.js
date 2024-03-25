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
                        Ingrese su Nº de Documento para editar su turno:
                    </div>
                    <div className="serch_dni">
                        <textarea id='dni'></textarea>
                        <button>Buscar</button>
                    </div>
                    <div className="list">
                        <div className="recuest">
                            <div className="data">
                                <p>Miercoles 19 de Marzo</p>
                                <p style={{fontSize: '15px'}}>Corte de pelo. 30 min. $3800</p>
                            </div>
                            <div className="icons"> 
                                <FontAwesomeIcon icon={faPenToSquare}/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div> 
                        <div className="recuest">
                            <div className="data">
                                <p>Miercoles 26 de Marzo</p>
                                <p style={{fontSize: '15px'}}>Tintura de pelo. 45 min. $4800</p>
                            </div>
                            <div className="icons">
                                <FontAwesomeIcon icon={faPenToSquare} fade/>
                                <FontAwesomeIcon icon={faTrash}/>
                            </div>
                        </div> 
                            {/* {turnos.map((turno) =>
                                <div className="recuest">
                                    {obtenerServicio(turno.id)}
                                    <div className="data">
                                        <p>{turno.fechahora}</p>
                                        <p style={{fontSize: '15px'}}> {servicio.descripcion} {servicio.precio}</p>
                                    </div>
                                    <div className="icons">
                                        <i class="fa-regular fa-pen-to-square fa-fade"></i>
                                        <i class="fa-solid fa-trash fa-fade" ></i>
                                    </div>
                                </div> 
                            )} */}
                         


                    </div>
                    
                </div>
            </div>
        
            <div className="foot">
            </div>
        </body>
        )
}