import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Habilidades = () => {
  return (
    <div>
      <div className='text-white font-bold text-base flex flex-row mb-4'>
        <div className='w-24'>Java</div>
        <div className='flex flex-row text-lg'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
      <div className='text-white font-bold text-base flex flex-row mb-4'>
        <div className='w-24'>Selenium</div>
        <div className='flex flex-row text-lg'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
      </div>
      <div className='text-white font-bold text-base flex flex-row mb-4'>
        <div className='w-24'>SQL</div>
        <div className='flex flex-row text-lg'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
      <div className='text-white font-bold text-base flex flex-row mb-4'>
        <div className='w-24'>Inglés</div>
        <div className='flex flex-row text-lg'>
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiOutlineStar />
        </div>
      </div>
    </div>
  );
};

export { Habilidades };
