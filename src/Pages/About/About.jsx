import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Transition from '../../components/Transition/Transition';
import './about.css';

const About = () => {

    // Configuración de animaciones de GSAP
    const about = gsap.timeline();

    // Referencias a elementos del DOM
    const aboutH1 = useRef(null);
    const aboutH2 = useRef(null);
    const aboutH3 = useRef(null);
    const aboutImg = useRef(null);
    const aboutB = useRef(null);

    useEffect(() => {

        // Animaciones de entrada para diferentes elementos
        about.to(aboutH1.current, {
            duration: 0.6,
            opacity: 1,
        }, 0.3);

        about.to(aboutH2.current, {
            duration: 0.6,
            opacity: 1,
        }, 0.3);

        about.to(aboutH3.current, {
            duration: 0.6,
            opacity: 1,
        }, 0.3);

        about.to(aboutImg.current, {
            duration: 0.5,
            opacity: 1,
        }, 0.4);

        about.to(aboutB.current, {
            duration: 1,
            backgroundColor: '#000',
        }, 0.1);
    });

    return (

        <main>

            {/* Componente de transición */}
            <Transition timeline={about} />

            {/* Imagen de fondo */}
            <figure className="about-image about-overlay" ref={aboutImg}></figure>

            {/* Contenedor de texto */}
            <section className='text-container'>

                {/* Sección 1 */}
                <div className='about-text' ref={aboutH1}>
                    <h1>KII</h1>
                    <p>KII es una criptomoneda que cuenta con su propia red de blockchain, teniendo la mejor plataforma de cambio entre monedas y criptomonedas.</p>
                </div>

                {/* Sección 2 */}
                <div className='about-text' ref={aboutH2}>
                    <h1>KII Coin</h1>
                    <p>Pagos seguros e instantáneos para el usuario del mundo real. Kii ofrece un ecosistema para construir la clase media en las economías emergentes.</p>
                </div>

                {/* Sección 3 */}
                <div className='about-text' ref={aboutH3}>
                    <h1>¿Por qué KII?</h1>
                    <p>KII es una nueva criptomoneda construida sobre nuestro nuevo y revolucionario blockchain que permite que el usuario envíe pagos a familiares y amigos a un costo mucho más barato que los típicos proveedores de remesas.</p>

                    {/* Botón "Leer más" */}
                    <div className='container-button' >
                        <button ref={aboutB}>Leer más</button>
                    </div>

                </div>

            </section>

        </main>

    );
    
};

export default About;
