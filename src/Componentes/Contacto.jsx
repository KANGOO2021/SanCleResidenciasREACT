import React from "react";


const Contacto = () => {
    return (  
    <section className="contact" id="contact">
        <div className="icons">
            <i className="fas fa-home" id="icon1"></i>
            <h2 className="hicons">Dirección</h2>
            <p className="picons">Horacio Casco 5275 - CABA</p>

        </div>
        <div className="icons ">
            <i className="far fa-clock" id="icon2"></i>
            <h2 className="hicons">Horario de atención</h2>
            <p className="picons">Todos los días de 8 a 22 hs</p>


        </div>
        <div className="icons ">
            <i className="fab fa-whatsapp" id="icon3"></i>
            <h2 className="hicons">Whatsapp</h2>
            <p className="picons">Cel/Whatsapp: 1140679793</p>

        </div>
        <div className="icons ">
            <i className="fas fa-envelope-square" id="icon4"></i>
            <h2 className="hicons">Email</h2>
            <p className="picons">ser2004munoz@yahoo.com.ar</p>

        </div>

    </section>    
    
  );
};
            
export default Contacto;