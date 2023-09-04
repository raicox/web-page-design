import { useRoutes, BrowserRouter } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Home from '../Home/Home';
import About from '../About/About';
import KiiBlockChain from '../KiiBlockChain/KiiBlockChain';
import './App.css';

function App() {

  // Definición de las rutas de la aplicación usando react-router-dom
  function AppLinks() {

    let AppRoutes = useRoutes([

      { path: '/', element: <Home /> }, // Ruta principal que muestra el componente Home
      { path: '/about', element: <About /> }, // Ruta para la página "About"
      { path: '/KiiBlockChain', element: <KiiBlockChain /> }, // Ruta para la página "KiiBlockChain"

    ]);

    return AppRoutes; // Retorna las rutas definidas

  }

  return (
    
    <>

      {/* Configuración del enrutador usando BrowserRouter */}
      <BrowserRouter>

        {/* Renderiza las rutas definidas por AppLinks */}
        <AppLinks />

        {/* Renderiza la barra de navegación común a todas las páginas */}
        <Navbar />
        
      </BrowserRouter>

    </>
  );
}

export default App;