import { LinkExternal } from 'components/LinkExternalWeb';
import {
  TiSpiral,
  TiSocialLinkedin,
  TiSocialGithub,
  TiLocation,
} from 'react-icons/ti';

const Contactos = ({ titulo, texto, path }) => {
  return (
    <div>
      <div className='text-white font-bold text-base'>
        {titulo}
        <div className='ml-6 text-xs'>
          <LinkExternal text={texto} path={path} />
        </div>
      </div>
    </div>
  );
};

const InformacionSide = () => {
  return (
    <div>
      <ul>
        <li className='flex flex-row mb-4'>
          <div>
            <TiSpiral className='text-white my-0 text-lg' />
          </div>
          <div>
            <Contactos
              titulo='Correo'
              texto='steven.henao@udea.edu.co'
              path='steven.henao@udea.edu.co'
            />
          </div>
        </li>
        <li className='flex flex-row mb-4'>
          <div>
            <TiSocialLinkedin className='text-white my-0 text-lg' />
          </div>
          <div>
            <Contactos
              titulo='LinkedIn'
              texto='steven-h-0682aa187'
              path='https://www.linkedin.com/in/steven-h-0682aa187/'
            />
          </div>
        </li>
        <li className='flex flex-row mb-4'>
          <div>
            <TiSocialGithub className='text-white my-0 text-lg' />
          </div>
          <div>
            <Contactos
              titulo='Github'
              texto='Stevenhenao'
              path='https://github.com/Stevenhenao'
            />
          </div>
        </li>
        <li className='flex flex-row mb-4'>
          <div>
            <TiLocation className='text-white my-0 text-lg' />
          </div>
          <div>
            <Contactos
              titulo='Dirección'
              texto='Envigado - Antioquia'
              path='https://www.google.com/maps/place/Envigado,+Antioquia/data=!4m2!3m1!1s0x8e4682493b86ae61:0xe3a1b3e88840ab4?sa=X&ved=2ahUKEwi3prC_5Jf5AhWDRDABHf9VCGkQ8gF6BAgCEAE'
            />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default InformacionSide;
