import { useRef, useEffect } from 'react';
import { Power4, gsap } from 'gsap';
import './transition.css';

function Transition() {

    // Referencia al elemento que se animará
    const change = useRef(null);

    useEffect(() => {

        // Animación con GSAP para cambiar la opacidad del elemento
        gsap.to(change.current, {
            duration: 3,
            opacity: 0,
            ease: Power4.easeOut, // Efecto de atenuación personalizado

        });

    }, []);

    return (

        <div className="transition-effect" ref={change}></div>
    );
}

export default Transition;
