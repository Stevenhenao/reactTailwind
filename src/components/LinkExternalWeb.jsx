import React from 'react';

const LinkExternal = ({ text, path }) => (
  <a
    href={path}
    target='_blank'
    rel='noreferrer'
    className='text-white hover:text-blue-700'
  >
    {text}
  </a>
);

export { LinkExternal };
