import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/img/logo.webp";
import '../App.css';

import {
  DivIcon,
  Container,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "../assets/js/menuhamburguesa";

import {
  FaEnvelope,
  FaBuilding,
  FaCar,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,

} from "react-icons/fa";
import { IconContext } from "react-icons";


const Navegacion = () => {

     const [showMobileMenu, setShowMobileMenu] = useState(false);
    return (
<>
  <header>
        <div className="logo">
            <img src={logo} alt=""/>
        </div>
        <div className="title">
            <h1><span>SANCLE</span>RESIDENCIAS</h1>
            <hr /> 
            <h3>ALQUILER DEPARTAMENTOS SAN CLEMENTE DEL TUYÚ</h3>
        </div>
    </header>
    <header className="bars">
                
        <Container>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em", marginLeft: "30px" } }}>
        

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
            <DivIcon>
                Menú
            </DivIcon>
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  <NavLink to="/">INICIO</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBuilding />
                  <NavLink to="/arcoiris">DPTO ARCOIRIS</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBuilding />
                  <NavLink  to="/medanos">DPTO MEDANOS</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaCar />
                  <NavLink  to="/traslados">TRASLADOS</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaEnvelope />
                  <NavLink  to="/consultas">CONSULTAS</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  <NavLink  to="/contacto">CONTACTO</NavLink>
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>

    </header>
    <nav className="navbar" id="navbarhh">

        <ul className="menu">
            <li>
                <NavLink to="/">HOME</NavLink>
            </li>
                 <li className="content">
                    <div className="dropdown">
                     RESIDENCIAS{' '}
                           
                            <FontAwesomeIcon  icon={faCaretDown} />
                            
                         <div className="dropdown-content">
                            <NavLink to="/arcoiris">ARCOIRIS</NavLink>
                            <NavLink  to="/medanos">MÉDANOS</NavLink>
                         </div>
                    </div>

            </li>
            <li>
                <NavLink  to="/traslados">TRASLADOS</NavLink>
            </li>
            <li>
                <NavLink  to="/consultas">CONSULTAS</NavLink>
            </li>
            <li>
                <NavLink  to="/contacto">CONTACTO</NavLink>
            </li>
        </ul>
        </nav>
 </>
            
  );
};
export default Navegacion;


