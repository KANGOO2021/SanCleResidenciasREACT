import React from "react";
import { useState } from "react";

import axios from "axios";
import Swal from "sweetalert2";

import Loader from "./Loader";


const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [fecha_ingreso, setFecha_ingreso] = useState('');
    const [fecha_salida, setFecha_salida] = useState('');
    const [mensaje, setMensaje] = useState('');

    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async (e) => { 

    const URI_SERVER = process.env.REACT_APP_URI_SERVER;
    e.preventDefault();
       
        setLoading(true)

        await axios.post(URI_SERVER, {
            nombre: nombre,
            email: email,
            whatsapp: whatsapp,
            fecha_ingreso: fecha_ingreso,
            fecha_salida: fecha_salida,
            mensaje: mensaje
        })

        setLoading(false)
        
        Swal.fire({
        title: 'Consulta enviada exitosamente',
        text: "Gracias por contactarnos!",
        icon: 'success',
        confirmButtonText: 'Aceptar'
        })
        
        setNombre('');
        setEmail('');
        setWhatsapp('');
        setFecha_ingreso('');
        setFecha_salida('');
        setMensaje('');
    }

    return (    

<section className="fsection" id="consultas">

        <form onSubmit= { handleSubmit } className="formContact">
            <div className="ftittle">
                <h2>Consúltenos para su Reserva
                </h2>
            </div>
            <div>
                <label>Nombre:</label>
                <input type="text" name="nombre" placeholder="Ingrese su Nombre" id="nombre" value={nombre} onChange={(e) =>{setNombre(e.target.value)}} required/>
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" placeholder="Ingrese su email" id="email" value={email} onChange={(e) =>{setEmail(e.target.value)}} required/>
            </div>

            <div>
                <label>Cel/Whatsapp:</label>
                <input type="number" name="telefono" placeholder="Ingrese su número" id="telefono" value={whatsapp} onChange={(e) =>{setWhatsapp(e.target.value)}} required/>
            </div>
            <div>
                <label>Desde:</label>
                <input type="date" name="fecha_ingreso" placeholder="Fecha de ingreso" id="fecha_ingreso" value={fecha_ingreso} onChange={(e) =>{setFecha_ingreso(e.target.value)}}required/>
            </div>
            <div>
                <label>Hasta:</label>
                <input type="date" name="fecha_salida" placeholder="Fecha de salida" id="fecha_salida" value={fecha_salida} onChange={(e) =>{setFecha_salida(e.target.value)}}required/>
            </div>
            <div>
                <label>Mensaje:</label>
                <textarea name="mensaje" placeholder="Escribe aquí su consulta" id="mensaje" value={mensaje} onChange={(e) =>{setMensaje(e.target.value)}} required></textarea>
            </div>
            <div>
                    <input type="submit" value="ENVIAR" className="button" id="send"/>
            </div>

            </form>
            {loading && <Loader />}
        </section>
  );
};
export default Formulario; 

