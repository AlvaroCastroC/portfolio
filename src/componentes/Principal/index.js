import React from "react";
import './style.css';

import CardHab from "../cards/CardHab";
import CardProj from "../cards/CardProj";
export default function Principal() {
    
    return (
        <main>
            <div >

                <section className="banner" id="inicio">

                    <div className="limite-container">
                        <div className="container-banner ">
                            <div className="titulo-banner">
                                
                                <p>Olá, eu me chamo</p>
                                <h1>Álvaro de Castro</h1>
                                <p>Sou desenvolvedor Front-end</p>
                            </div>

                            <div className="container-imagens">
                               <img className="imagem1" src='assets/react.png' alt="logo do react" />
                        
                               <img className="imagem2" src='assets/javascript.png' alt="Logo do javascript" />

                               <img className="imagem3" src='assets/html.png' alt="Logo do html"  />
                              
                            </div>
                     <img src='assets/meninoNot.png' className="imagem4"/>
                        </div >
                    </div>

                </section>
                
                <section className="secao-sobre" id="sobre">
                    <div className="limite-container">
                         <h2> Sobre mim </h2>

                       <div className="container-sobre">

                       <div>
                            <img src="assets/foto.jpg" alt="foto pessoal" title="Selfie pessoal" />
                       </div>

                        <div>
                            <p> Nasci em julho de 2002, e desde 2020 eu sigo o caminho da carreira de programador.
                            </p>

                            <p>
                            Sou formado em <span className="fonte-sobre">Análise e Desenvolvimento de Sistema.</span> 
                            </p><p>Me especializei na DevMedia, com o curso de full-stack.
                            </p>
                            <p>
                            Minhas tecnologias utilizadas são,<span className="fonte-sobre"> HTML, CSS, JavaScript e React.</span>
                            </p> 
                        </div>
                        
                        </div>
                    </div>
                </section>

                <section className="secao-habilidades" id="habilidades">
                    <div className="limite-container">
                        
                        <h2> Minhas habilidades</h2>

                        <CardHab />

                    </div>
                </section>

                <section className="secao-projetos" id="projetos"> 
                   <div className="limite-container">
                         <h2> Meus projetos </h2>

                       

                       <CardProj />

                    </div>
                </section>
            </div>
        </main>
    );
}