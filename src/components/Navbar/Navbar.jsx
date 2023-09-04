import {NavLink} from 'react-router-dom'
import KiiL from '../../assets/KII-logo.gif'
import './navbar.css'

const Navbar = () => {
    return (
        <nav className="nav-header">
            <div className="logo">
                <img src={KiiL} alt="Logo-Kii" />
            </div>
            <div className='list-container'>

                <ul>
                    <li>Crear Sesión</li>
                    <li>Registrarse</li>
                </ul>

                <ul>    
                    <NavLink 
                        to='/'
                        className='link'
                    >
                        <li>
                            KII Home
                        </li>
                    </NavLink>
                    
                    <NavLink 
                        to='/about'
                        className='link'
                    >
                        <li>
                            ¿Qué es KII?
                        </li>
                    </NavLink>
                    <NavLink 
                        to='/kiiBlockChain'
                        className='link'
                    >
                        <li>
                            Kii BlockChain
                        </li>
                    </NavLink>
                </ul>
            
            </div>
        </nav>
    )
}

export default Navbar