import React from "react";
import './style.css';


export default function Principal() {
    return (
        <main>
            <div >

                <section className="banner" id="inicio">

                    <div className="limite-container">
                        <div className="container-banner ">
                            <div className="titulo-banner">
                                
                                <h1><span>Olá, eu me chamo</span><br></br>Álvaro de Castro</h1>
                                <p>Sou desenvolvedor Front-end</p>
                            </div>

                            <div className="container-imagens">
                               <img className="imagem1" src="assets/react.png" alt="logo do react" />
                        
                               <img className="imagem2" src="assets/javascript.png" alt="Logo do javascript" />

                               <img className="imagem3" src="assets/html.png"alt="Logo do html"  />
                              
                            </div>
                     <img src="assets/meninoNot.png" className="imagem4"/>
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

                        <div className="container-card">

                            <div className="card-box">

                                <div className="card-image">
                                    <img src="assets/html-css.png" alt="logo do html e css" title="Logo HTML e CSS" />
                                </div>
                                <div className="card-descricao">
                                    <h4>HTML e CSS</h4>
                                    <p>Conhecimentos em semâticas, e estilizações do sites. Com aprofundamento com a estilização de site, adquiri conhecimento em responsividade, e animações. 
                                    </p>
                                </div>

                            </div>

                            <div className="card-box">
                                
                                <div className="card-image">
                                    <img src="assets/javascript.png"alt="logo do javascipt" title="Logo javascipt" />
                                </div>
                                <div className="card-descricao">
                                    <h4>javascipt</h4>
                                    <p>Conhecimento em algoritmo e lógica de programação. <br/> Após o curso na DevMedia adquiri o conhecimento aprofundado na linguagem, me possibilitanto criar sistema de conversões, cáculos e comparativos.</p>

                                </div>

                            </div>

                            <div className="card-box">
                                
                                <div className="card-image">
                                    <img src="assets/react.png" alt="logo do react" title="Logo do React" className="react-image" />
                                </div>
                                <div className="card-descricao">
                                    <h4>React</h4>
                                    <p>Conhecimento em aplicações, SPAs e interatividade com os sites.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section className="secao-projetos" id="projetos"> 
                   <div className="limite-container">
                         <h2> Meus projetos </h2>

                       <div className="container-card">

                            <div className="card-box-projetos">
                                    <div className="card-image-projetos">
                                        <img src="assets/gelateria.png" alt="Banner de Gelateria" title="Banner de Gelateria" />
                                    </div>
                                    <div  className="card-descricao-projetos">
                                        <p>
                                            Projeto criado com <span className="react">React</span> e algumas funcionalidades, usando Router para navegação de páginas 
                                        </p>
                                    </div>
                                    <div className="container-botao">
                                        <a href="https://alvarocastroc.github.io/gelateria" target="_blank">Acessar</a>
                                        <a href="https://github.com/AlvaroCastroC/gelateria" target="_blank">Repositório</a>
                                    </div>

                            </div>

                            <div className="card-box-projetos">
                                    <div className="card-image-projetos">
                                        <img src="assets/barbearia.png" alt="Banner de Barbearia" title="Banner de Barbearia" />
                                    </div>
                                    <div  className="card-descricao-projetos">
                                        <p>
                                            Projeto criado com <span className="react">React</span> e <span className="js">JavaScript</span>, tendo com uma funcionalidade que é o DarkMode.
                                        </p>
                                    </div>
                                    <div className="container-botao">
                                        <a href="https://alvarocastroc.github.io/barbearia/" target="_blank">Acessar</a>
                                        <a href="https://github.com/AlvaroCastroC/barbearia" target="_blank">Repositório</a>
                                    </div>

                            </div>

                            <div className="card-box-projetos">
                                    <div className="card-image-projetos">
                                        <img src="assets/pousada.png" alt="Banner de Pousada" title="Banner de Pousada" />
                                    </div>
                                    <div  className="card-descricao-projetos">
                                        <p>
                                            Projeto criado somente com <span className="html">HTML</span> e <span className="css">CSS</span>, fazendo uma navegação básica de páginas. 
                                        </p>
                                    </div>
                                    <div className="container-botao">
                                        <a href="https://alvarocastroc.github.io/Pousada-web/" target="_blank">Acessar</a>
                                        <a href="https://github.com/AlvaroCastroC/Pousada-web" target="_blank">Repositório</a>
                                    </div>

                            </div>

                            <div className="card-box-projetos">
                                    <div className="card-image-projetos">
                                        <img src="assets/clinica.png" alt="Banner de clínica" title="Banner de clínica" />
                                    </div>

                                    <div  className="card-descricao-projetos">
                                        <p>
                                            Projeto criado somente co  <span className="html">HTML</span> e <span className="css">CSS</span>, mas utilizando algumas estilizações com <span className="css">CSS</span>.
                                        </p>
                                    </div>
                                    <div className="container-botao">
                                        <a href="https://alvarocastroc.github.io/Clinica/" target="_blank">Acessar</a>
                                        <a href="https://github.com/AlvaroCastroC/Clinica" target="_blank">Repositório</a>
                                    </div>

                            </div>

                            <div className="card-box-projetos">
                                    <div className="card-image-projetos">
                                        <img src="assets/agencia.png" alt="Banner de Agência" title="Banner de Agência" />
                                    </div>

                                    <div className="card-descricao-projetos">
                                        <p>
                                            Projeto criado com <span className="html">HTML</span> e <span className="css">CSS</span>, visando a utilização do formulário.
                                        </p>
                                    </div>
                                    <div className="container-botao">
                                        <a href="https://alvarocastroc.github.io/Agencia-de-viagens/" target="_blank">Acessar</a>
                                        <a href="https://github.com/AlvaroCastroC/Agencia-de-viagens" target="_blank">Repositório</a>
                                    </div>

                            </div>
                       </div>

                    </div>
                </section>
            </div>
        </main>
    );
}