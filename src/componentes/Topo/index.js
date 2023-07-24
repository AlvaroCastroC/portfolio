import React, { useState, useRef } from "react";
import "./style.css";


export default function Topo () {

    const dropDownRef = useRef(null)
    const [isActive, setIsActive] = useState(false)
    const onClick = () => setIsActive(!isActive)




    return (
        <header>
            <div className="limite-container ">
                <div className="container-topo">
                    <div> <h3>Portfólio</h3> </div>

                    <div className="container-menu">
                        <button onClick={onClick} className="menu-button"> 
                        <p>Menu</p>
                        </button>

                            <div Ref={dropDownRef} className={`menu ${isActive ? "active" : "inactive"} `}>
                                <ul type ='none' > 
                                    <li > <a href="#inicio">Topo</a> </li>
                                    <li> <a href='#sobre'>Sobre</a> </li>
                                    <li> <a href="#habilidades"> Habilidades</a> </li>
                                    <li> <a href="#projetos"> Projetos</a> </li>
                                    <li> <a href="#contato"> Contato</a> </li>

                                </ul>
                            </div>
                    </div>
                </div>

            </div>
        </header>
    );
}