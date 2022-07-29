import Titulo from 'components/titulos/tituloSinLogo';
import { Outlet } from 'react-router-dom';
import InformacionSide from 'components/contactos/contactos';
import { Habilidades } from 'components/habilidades/habilidades';
import Profile from 'images/Captura.PNG';
// delete this
const Layout = () => {
  return (
    <main className='h-auto lg:w-full w-screen flex flex-row bg-gray-300 bg-cover'>
      <ul className='lg:translate-x-0 w-80 bg-slate-800 p-4 shadow-lg bg-scroll'>
        <div>
          <img
            className='rounded-full relative w-48 h-48 my-8 ml-4'
            src={Profile}
            alt='horse'
          />
        </div>
        <div className='my-10 text-white'>
          <Titulo texto='Contactos' />
        </div>
        <div className='flex flex-row'>
          <div>
            <InformacionSide />
          </div>
        </div>
        <div className='my-10 text-white'>
          <Titulo texto='Habilidades' />
        </div>
        <div>
          <Habilidades />
        </div>
      </ul>
      <header className='lg:translate-x-0 w-full'>
        <div>
          <nav>
            <div className='text-2xl font-bold'>Steven Henao Mejía</div>
            <div className='text-1xl'>Ingeniero de Sistemas</div>
          </nav>
        </div>
        <div className='mt-20'>
          <Outlet />
        </div>
      </header>
    </main>
  );
};

export default Layout;
