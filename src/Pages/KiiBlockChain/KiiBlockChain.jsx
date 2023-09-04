import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import imgB from '../../assets/background-block.jpg'
import './kiiBlockChain.css'
import Transition from '../../components/Transition/Transition';

const Contact = () => {

    // Inicialización de una línea de tiempo de animación de GSAP
    const block = gsap.timeline();

    // Referencias a elementos DOM para animar
    const blockImg = useRef(null);
    const blockBF = useRef(null);
    const blockBS = useRef(null);
    const blockBT = useRef(null);
    const blockBFo = useRef(null);

    useEffect(() => {

        // Animación de entrada para el primer cuadro
        block.to(blockBF.current, {
            duration: 3,
            y: 420,
            keyframes: {
                x: [-20, 10, -10, 20],
                ease: "power2.inOut",
            },
            opacity: 1
        }, 0.2);

        // Animación de entrada para el segundo cuadro
        block.to(blockBS.current, {
            duration: 4,
            y: 600,
            keyframes: {
                x: [-30, 10, -10, 30,],
                ease: "power2.inOut",
            },
            opacity: 1
        }, 0.3);

        // Animación de entrada para el tercer cuadro
        block.to(blockBT.current, {
            duration: 4,
            y: 1080, 
            keyframes: {
                x: [-30, 10, -10, 30],
                ease: "power2.inOut",
            },
            opacity: 1
        }, 0.3);

        // Animación de entrada para el cuarto cuadro
        block.to(blockBFo.current, {
            duration: 4,
            y: 550, 
            keyframes: {
                x: [-30, 10, -10, 30],
                ease: "power2.inOut",
            },
            opacity: 1
        }, 0.8);

        // Animación de entrada para la imagen de fondo
        block.to(blockImg.current, {
            duration: 5,
            opacity: 1,
        }, 0.3)
    });

    return (
        <main className='main-container-block'>

            {/* Imagen de fondo */}
            <img src={imgB} alt="background" className='main-background'/>

            {/* Componente de transición que utiliza la línea de tiempo de animación */}
            <Transition timeline={block}/>

            {/* Cuadro de imagen superpuesto */}
            <figure className="block-image block-overlay" ref={blockImg}></figure>

            {/* Cuadro 1 con botón */}
            <div className='block-box-first block-fallbox' ref={blockBF}>
                <button className='box-button'>Kii Explorer</button>
            </div> 

            {/* Cuadro 2 con botón */}
            <div className='block-box-second block-fallbox' ref={blockBS}>
                <button className='box-button'>Whitepaper</button>
            </div>

            {/* Cuadro 3 con botón */}
            <div className='block-box-third block-fallbox' ref={blockBT}>
                <button className='box-button'>Git Book</button>
            </div>

            {/* Cuadro 4 con botón */}
            <div className='block-box-fourth block-fallbox' ref={blockBFo}>
                <button className='box-button'>Paperwallet</button>
            </div>

       </main>

    );

};

export default Contact
