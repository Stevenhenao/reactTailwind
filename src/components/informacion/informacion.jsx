const Informacion = ({ titulo, fecha, descripcion }) => {
  return (
    <div className='text-black flex flex-row my-4 '>
      <div className='flex flex-col w-1/2 mr-3'>
        <div>{titulo}</div>
        <div>{fecha}</div>
      </div>
      <div className='ml-3 w-1/2'>{descripcion}</div>
    </div>
  );
};

export default Informacion;
