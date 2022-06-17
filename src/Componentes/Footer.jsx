import React from "react";


const Footer = () => {

  const current = new Date();
  const date = `${current.getFullYear()} `;
    return (  
        


        <footer className="footer">
         <div className="hrfooter"> <hr /> </div>
        <span>&copy; {date}</span>
        <span>desarrollado por <span>S&M</span></span>
        <address>
                Buenos Aires- Argentina
        
            </address>
    </footer>
  );
};
            
export default Footer;