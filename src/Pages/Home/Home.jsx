import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import TypeIt from "typeit-react";
import Transition from '../../components/Transition/Transition';
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsTiktok } from "react-icons/bs";
import { BsDiscord } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import './home.css';

const Home = () => {
    
    // Configuración de animaciones de GSAP
    const home = gsap.timeline();

    // Referencias a elementos del DOM
    const homeH1 = useRef(null);
    const homeImgChain = useRef(null);
    const homeImgIcon = useRef(null);

    useEffect(() => {

        // Animaciones para diferentes elementos
        home.to(homeH1.current, {
            duration: 0.6,
            x: 0,
            opacity: 1,
        }, 0.3);

        home.to(homeImgChain.current, {  
            opacity: 1,
            smooth: true,
            loop: true,
            keyframes: {
                x: [0, 2, -5, 5, 0, 0, 2, -5, 5, 0],
                y: [0, 2, -5, 5, 0, 0, 2, -5, 5, 0],
            },
            duration: 4,
        }, 1);

        home.to(homeImgIcon.current, {
            duration: 0.6,
            opacity: 1,
        }, 0.3);
    });

    return (
        <div>
            
            {/* Componente de transición */}
            <Transition timeline={home}/>
    
            {/* Cadena de imágenes en el fondo */}
            <div className='home-image-chain home-overlay-chain' ref={homeImgChain}></div>

            {/* Contenedor principal */}
            <div className='container-home'>

                {/* Título */}
                <h1 ref={homeH1}>KII</h1>

                {/* Animación de texto con TypeIt */}
                <TypeIt 
            
                    ref={homeH1}
                    className='typel'
                    options={{
                        speed: 100,
                        cursorChar: ''
                    }}

                    getBeforeInit={(instance) => {

                        instance
                            .type('Confianza').pause(750).delete(9).pause(500)
                            .type('Libertad').pause(500).delete(8).pause(500)
                            .type('Global');

                        return instance;

                    }}>
                </TypeIt>

            </div>

            {/* Contenedor de iconos sociales */}
            <div className='container-icons' ref={homeImgIcon}>

                <BsFacebook color='white' size='2rem' className='icon icon-f'/>
                <BsInstagram color='white' size='2rem' className='icon icon-i'/>
                <BsYoutube color='white' size='2rem' className='icon icon-y' />
                <BsTiktok color='white' size='2rem' className='icon icon-t'/>
                <BsDiscord color='white' size='2rem' className='icon icon-d'/>
                <AiFillTwitterCircle color='white' size='2rem' className='icon icon-tw'/>

            </div>

        </div>
    );
};

export default Home;
