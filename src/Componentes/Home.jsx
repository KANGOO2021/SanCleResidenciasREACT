import React from "react";
import mundomarino from "../assets/img/mundo marino.webp";
import termasmarinas from "../assets/img/termas1.webp";
import facebook from "../assets/img/facebook-logo-3-1.webp";


const Home = () => {
    const fecha = () => {
        const current = new Date();
        const date = `${current.getFullYear()} `;
        const date2 = `${current.getMonth() + 1}`;
        if (date2 <=5) {
            return date
        } else {
            return (current.getFullYear() + 1)
        }
    }
    const años = () => {
        const origen = 2013
        const current = new Date();
        const date = `${current.getFullYear()}`;
        return (date - origen)
    }
   
    return (  
<>
        <section className="section" id="home">
            <div className="tex">
                <p className="p1" id="home2">¡VENI A DISFRUTAR TUS VACACIONES {fecha()} EN SAN CLEMENTE DEL TUYÚ!</p>
            </div>
            <div className="tex2">
                <p className="p2">Visítanos en Facebook, {años()} años de alquiler y traslados consecutivos</p>
                        <a href="https://www.facebook.com/profile.php?id=100007425427174" target="_blank "><img id="face" style={{ width: "50px" }} src={facebook} alt=""/></a>
            </div>
        </section>

        <h2 className="tittle2 ">ATRACTIVOS TURÍSTICOS</h2>
        <hr style={{ width: "90%" }}/>

        <section className="sitios">

            <div className="mm">
                        <img style={{ width: "230px" }} src={mundomarino} alt="" />
                <button type="button " className="btn "><a href="https://www.mundomarino.com.ar/" target="_blank ">SITIO WEB</a></button>
            </div>

            <div className="tm">
                        <img style={{width: "190px"}} src={termasmarinas} alt=""/>
                <button type="button " className="btn "><a href="https://termasmarinas.com.ar/" target="_blank ">SITIO WEB</a></button>
            </div>
        </section> 
</>
            
  );
};
         
export default Home;