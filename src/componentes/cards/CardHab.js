import { useState, useRef } from "react";

import './style.css';
export default function () {

    const [mudanca, setMudanca] = useState();
    const carousel = useRef(null);

    const handleLeftClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft -= carousel.current.offsetWidth;
    };

    const handleRightClick = (e) => {
        e.preventDefault();
        console.log(carousel.current.offsetWidth);
        carousel.current.scrollLeft += carousel.current.offsetWidth;
    };

    return (
    <div className="container-carousel-habilidades">
        <div className="carousel" ref={carousel}>
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
        <div className="buttons">
                <button onClick={handleLeftClick}><img src="assets/botao.png" alt="botao left" title="botao left" /></button>
                <button onClick={handleRightClick}><img src="assets/botao.png" alt="botão right" title="botão right" /></button>
            </div>
    </div>

    );
}