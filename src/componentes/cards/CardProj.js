import './style.css';
import { useRef } from 'react';


export default function CardProj() {

    const carouselProjetos = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carouselProjetos.current.offsetWidth);
        carouselProjetos.current.scrollLeft -= carouselProjetos.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carouselProjetos.current.offsetWidth);
        carouselProjetos.current.scrollLeft += carouselProjetos.current.offsetWidth;
    };


    return (
        <div className="container-carousel-projetos">
            <div className="carousel-projetos" ref={carouselProjetos}>

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

         <div className="buttons">
                <button onClick={handleLeftClick}><img src="assets/botao.png" alt="botao left" title="botao left" /></button>
                <button onClick={handleRightClick}><img src="assets/botao.png" alt="botão right" title="botão right" /></button>
        </div>

        </div>
    );
}