import React from 'react';
import {
  IoSchoolSharp,
  IoPersonSharp,
  IoBusinessSharp,
  IoMegaphoneSharp,
} from 'react-icons/io5';
import Informacion from 'components/informacion/informacion';

const Home = () => (
  <div className='lg:mx-20 sm:mx-8 md:mx-10'>
    <div>
      <div className='text-black flex flex-row border-b-blue-700 border-b font-bold text-lg mb-4'>
        <div className='m-1'>
          <IoPersonSharp />
        </div>
        <div>Acerca de mí</div>
      </div>
      <div className='my-4'>
        <p>
          Tengo 24 años, me interesó estudiar ingeniería de sistemas cuando
          tenia 13 años y quería crear mi propio juego. De todos los proyectos
          en los que he trabajado destaco Apolo para la empresa de pensiones y
          cesantías Protección, en el buscabamos centralizar toda la informacion
          de los diferentes servicios de Protección en una base de datos no
          relacional, realizar un modulo administrativo y sincronizar la
          información entre las bases de datos de Protección. Actualmente me
          encuentro trabajando para una empresa ubicada en Estados Unidos
          llamada Empower, trabajo para el modulo de transferencias de fondos
          entre diferentes cuentas bancarias. En mis tiempos libressuelo viajar,
          tocar la batería o salir a volar un drone que construí, me gusta
          conocer restaurantes probar todas las diferentes hamburguesas que
          venden.
        </p>
      </div>
    </div>
    <div>
      <div className='text-black flex flex-row border-b-blue-700 border-b font-bold text-lg mb-4'>
        <div className='m-1'>
          <IoSchoolSharp />
        </div>
        <div>Educación</div>
      </div>
      <div>
        <Informacion
          titulo='Universidad De Antioquia'
          fecha='2015 - Actual'
          descripcion='Ingeniería de Sistemas (noveno semestre)'
        />
      </div>
      <div>
        <Informacion
          titulo='Sofka'
          fecha='Mayo 2019 - Agosto 2019'
          descripcion='Trainning Automatización de pruebas'
        />
      </div>
    </div>
    <div>
      <div className='text-black flex flex-row border-b-blue-700 border-b font-bold text-lg mb-4'>
        <div className='m-1'>
          <IoBusinessSharp />
        </div>
        <div>Experiencia</div>
      </div>
      <div>
        <Informacion
          titulo='Sofka'
          fecha='2019 - 2021'
          descripcion='Automatizador de pruebas'
        />
      </div>
      <div>
        <Informacion
          titulo='Globant'
          fecha='2021 - Actual'
          descripcion='Test automation engineer'
        />
      </div>
    </div>
    <div>
      <div className='text-black flex flex-row border-b-blue-700 border-b font-bold text-lg mb-4'>
        <div className='m-1'>
          <IoMegaphoneSharp />
        </div>
        <div>Referencias</div>
      </div>
      <div>
        <Informacion titulo='Sofka' descripcion='contactossofka@sofka.com.co' />
      </div>
    </div>
  </div>
);

export default Home;
