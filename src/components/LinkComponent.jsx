import React from 'react';
import { Link } from 'react-router-dom';

const LinkComponent = ({ text, path }) => (
  <Link target='_blank' to={path}>
    <span className='text-white hover:text-blue-700'>{text}</span>
  </Link>
);

export { LinkComponent };
