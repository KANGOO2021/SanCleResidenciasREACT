import React from "react";

import collagearcoiris from "../assets/img/collagearcoiris.webp";

import collagemedanos from "../assets/img/collagemedanos.webp";


const Traslados = () => {
    return (  
        <>
        <section className="tsection" id="trasladot">
        <div className="ttittle">
            <h1>Traslados para la familia:</h1>
        </div>

        <div>
            <p className="tp">
                Los traslados se realizan en una Kangoo para el grupo familiar(máx. 4 pasajeros). Son ida y vuelta, puerta a puerta, de tu domicilio al departamento que hayas reservado y posteriormente al terminar tu estadía, se realiza el regreso a tu casa. Son opcionales
                y apartes del alquiler.
            </p>
        </div>
    </section>

    <section className="traslados" id="traslate">
        <div className="icons">
            <i className="fas fa-house-user" id="icon5"></i>
            <h2>Tu casa</h2>
        </div>
        <div className="icons">
            <i className="fas fa-angle-double-left" id="icon6"></i>
            <h2 className="tregreso">Regreso</h2>
        </div>
        <div className="icons">
            <i className="fas fa-shuttle-van" id="icon7"></i>
            <h2>Traslado</h2>
        </div>
        <div className="icons">
            <i className="fas fa-angle-double-right" id="icon8"></i>
            <h2 className="tida">ida</h2>
        </div>

        <div className="dicons">
            <div className="icons">
                        <img style={{ width: "150px", marginRight: "10px", borderRadius: "7px"}} src={collagearcoiris} alt=""/>
                <h2>Arcoiris</h2>
            </div>
            <div className="icons">
                        <img style={{ width: "150px", marginRight: "10px", borderRadius: "7px"}} src={collagemedanos} alt="" />
                <h2>Médanos</h2>
            </div>
        </div>

    </section>
</>
  );
};
            
export default Traslados;