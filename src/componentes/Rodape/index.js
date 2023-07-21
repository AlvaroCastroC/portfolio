import React from "react";
import './style.css';


export default function Rodape() {
    return(
    <footer id="contato">
        <div className="limite-container">

            <nav className="container-contato">
                <div className="box">
                    <h4>Contato</h4>

                    <ul type = 'none' className="contato">
                    
                        <li>(99) 99163-8167 </li>
                        <li>alvarocastrocunha@icloud.com </li>
                        <li>Imperatriz - Ma</li>
            
                     </ul>
                </div>

                <div className="box">
                    <h4>Redes sociais</h4>

                    <ul type = 'none' className="rede-social">
                    
                        <li> <a href="https://www.linkedin.com/in/alvaro-cunha-091172240" target="_blank"><img src="assets/linkedin-branco.png" alt="Logo do LinkedIn" title="Link do meu LinkedIn"/></a> </li>
                        <li> <a href="https://github.com/AlvaroCastroC" target="_blank"><img src="assets/github-branco.png" alt="logo do github" title="Link para o meu Github" /></a> </li>
                    </ul>
                </div>
            </nav>
        </div>

        <div className="criador">
                 <p>Portfólio desenvolvido por Álvaro de Castro Cunha </p>
            </div>
    </footer>
    );
}