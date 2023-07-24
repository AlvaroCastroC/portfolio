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
                    
                        <li><a href="https://wa.me/xxxx" target="_blank"><img src="assets/whatsapp.png" alt="" title="Fale comigo"/><p>Whatsapp</p>
                        </a></li>

                        <li><img src="assets/email.png" alt="" title="Mande um email"/><p>E-mail</p></li>
            
                     </ul>
                </div>

                <div className="box">
                    <h4>Redes sociais</h4>

                    <ul type = 'none' className="rede-social">
                    
                        <li> <a href="https://www.linkedin.com/in/alvaro-cunha-091172240" target="_blank"><img src="assets/github-branco.png" alt="" title="Link para o GitHub"/><p>GitHub</p> </a></li>

                        <li> <a href="https://github.com/AlvaroCastroC" target="_blank"><img src="asstes/linkedin-branco.png" alt="" title="Link para o LinkedIn" /> <p>LinkedIn</p> </a></li>
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