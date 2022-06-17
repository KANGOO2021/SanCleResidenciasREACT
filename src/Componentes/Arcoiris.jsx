import React from "react";

import images from '../assets/js/imagesarcoiris'
import '../assets/css/slider.css'
import { motion } from 'framer-motion'

import mapa_arcoiris from "../assets/img/mapa_arcoiris.png";


const Arcoiris = () => {

    return (  
<>
     
  <main className="arcoiris" id="arcoiris">
        <section>
            <div className="atittle">
                <h1>RESIDENCIA ARCOIRIS</h1>
            </div>
        </section>
        <section className="asection">
            <div className="atittle2">
                <h1>Descripción:</h1>
            </div>

            <div>
                <p className="ap">
                    Departamento de 2 ambientes para 4 personas en primer piso, ubicado a 3 cuadras de la peatonal y una más del mar(balneario principal). Excelente ubicación, TENES TODO AL ALCANCE!!! Cerca de Mundo Marino y Las Termas. Es muy luminoso y tranquilo. Cuenta
                    con el siguiente equipamiento: Televisión con DIRECTV (prepago), microondas, cocina con horno, heladera, dos ventiladores de pie y termo eléctrico (para más seguridad). El dpto. es de perfil FAMILIAR.
                </p>
            </div>
        </section>
        <section className="asection2">
            <div className="atittle3">
                <h1>Galería de fotos:</h1>
            </div>
             </section>
        
       <motion.div className='slider-container'>
          <motion.div className='slider' drag='x' 
             dragConstraints={{ right: -20, left: -13400 }}
               dragElastic={0.01}>
               {images.map((image,i) => (
                   <motion.div className='item' key={i}>
                      <img src={image} alt="" />
                    </motion.div>
                ))}
             </motion.div>
                </motion.div>
                
            <section className="asection3">
            <div className="atittle4">
                <h1>Disponibilidad:</h1>
            </div>

            <div className="container_table">
                <div className="january_table">ENERO {'>>>'}</div>
                <div className="table_item1">25/12 al 01/01</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">01/01 al 08/01</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">08/01 al 15/01</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">15/01 al 22/01</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">22/01 al 29/01</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="february_table">FEBRERO {'>>>'}</div>
                <div className="table_item1">29/01 al 05/02</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">05/02 al 12/02</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">12/02 al 19/02</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="table_item1">19/02 al 26/02</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
                <div className="march_table">MARZO {'>>>'}</div>
                <div className="table_item1">26/02 al 05/03</div>
                <div className="table_item2">(DISPONIBLE)</div>
                <div className="table_item3"></div>
            </div>
        </section>

         <section className="asection4">
            <div className="atittle5">
                <h1>Ubicación:</h1>
            </div>
            <div>
                <p className="ap">
                    Av. San Martín 350 Piso:1 Dpto:16
                </p>
            </div>
            <div className="alocation" id="larco1">
                    <div>
                        <img  id="larco" style={{ border: "1px solid black"}} src={mapa_arcoiris} alt=""/>
                   </div>
           
                        {/* <iframe title="Ubicación Dpto Arcoiris" id="larco" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6426.29648543486!2d-56.7260213380479!3d-36.35718798927618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1b5ee0efca1f%3A0xbc0e26705b77956!2sAv.%20San%20Mart%C3%ADn%20350%2C%20B7105%20San%20Clemente%20del%20Tuyu%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1655066241577!5m2!1ses-419!2sar" style={{ border: "1px solid black", allowfullscreen: "", loading: "lazy", alt: "" }}></iframe>  */}
                     
                <div>
                <button type="button" className="btn" id="btna"><a href="https://www.google.com.ar/maps/place/Av.+San+Mart%C3%ADn+350,+B7105+San+Clemente+del+Tuyu,+Provincia+de+Buenos+Aires/@-36.358618,-56.7236288,16z/data=!4m5!3m4!1s0x959c1b5ee0efca1f:0xbc0e26705b77956!8m2!3d-36.3574861!4d-56.7228456" target="_blank ">¿Cómo llegar?</a></button>
                </div>
            </div>
                        
           
                   
        </section> 
     </main>
</>
            
  );
};
            
export default Arcoiris;