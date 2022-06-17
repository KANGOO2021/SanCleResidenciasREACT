import React from "react";

import images from '../assets/js/imagesmedanos'
import '../assets/css/slider.css'
import { motion } from 'framer-motion'

document.addEventListener('touchstart', { passive: true });
const Medanos = () => {
    return (  
<>
<main className="medanos" id="medanos">
        <section>
            <div className="mtittle">
                <h1>RESIDENCIA MÉDANOS</h1>
            </div>
        </section>
        <section className="msection">
            <div className="mtittle2">
                <h1>Descripción:</h1>
            </div>

            <p className="mp">
                Departamento de 2 ambientes para 4 personas en planta baja en un hermoso condominio, ubicado a 4 cuadras de la peatonal y a media cuadra de la playa. Excelente ubicación, TENES TODO AL ALCANCE!!! Cerca de Mundo Marino y Las Termas. Es muy luminoso, colorido
                y tranquilo. Cuenta con el siguiente equipamiento: Televisión con DIRECTV (prepago), microondas, cocina con horno, heladera, dos ventiladores de pie y termo eléctrico(para más seguridad).El dpto. es de perfil FAMILIAR. No se admiten mascotas
                de ningún tipo.
            </p>
        </section>
        <section className="msection2">
            <div className="mtittle3">
                <h1>Galería de fotos:</h1>
            </div>
                </section>  
                
         <motion.div className='slider-container'>
          <motion.div className='slider' drag='x' 
            dragConstraints={{ right: -20, left: -12500}}
               dragElastic={1}     >
               {images.map((image,i) => (
                   <motion.div className='item' key={i}>
                      <img src={image} alt="" />
                    </motion.div>
                ))}
             </motion.div>
                </motion.div>
           
       
        <section className="msection3">
            <div className="mtittle4 ">
                <h1>Disponibilidad:</h1>
            </div>

            <div className="container_table">
                <div className="january_table1">ENERO {'>>>'}</div>
                <div className="table_item1m">24/12 al 31/12</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">31/12 al 07/01</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">07/01 al 14/01</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">14/01 al 21/01</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">21/01 al 28/01</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="february_table1">FEBRERO {'>>>'}</div>
                <div className="table_item1m">28/01 al 04/02</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">04/02 al 11/02</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">11/02 al 18/02</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="table_item1m">18/02 al 25/02</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
                <div className="march_table1">MARZO {'>>>'}</div>
                <div className="table_item1m">25/02 al 04/03</div>
                <div className="table_item2m">(DISPONIBLE)</div>
                <div className="table_item3m"></div>
            </div>
        </section>

        <section className="msection4">
            <div className="mtittle5">
                <h1>Ubicación:</h1>
            </div>
            <div>
                <p className="mp ">
                    Calle 32 Bis 88 PB Dpto:23
                </p>
            </div>
        <div className="mlocation">
             <iframe title="Ubicación Dpto Médanos" id="lmed" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6426.856478890625!2d-56.72660856768686!3d-36.35040475949783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x959c1d71df17470f%3A0x7e0ca61cea2ade0a!2sC.%2032%20Bis%2088%2C%20San%20Clemente%20del%20Tuyu%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1655067162155!5m2!1ses-419!2sar" style={{ border: "1px solid black", allowfullscreen: "", loading: "lazy", alt:""}}></iframe>
                        
         </div>
        </section>
     
            </main>
        
        </>
            
  );
};
            
export default Medanos;