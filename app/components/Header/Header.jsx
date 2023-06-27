import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='h-16 w-full flex items-center justify-center'>
        <h1>Dev Challenge - Buttons</h1>
      </div>
      <div className='flex items-center justify-center p-4'>
        <h2>By Sebastián Marchetti :)</h2>
      </div>
      <div className='px-8 py-4'>
        <p className='text-center'>
          Este es el primero de 8 desafios propuestos en la página <Link href={""} target='_blank'>DevChallenges.io</Link> que consiste en crear un componente Boton reutilizable y customizable. Entre las opciones de personalización están el tamaño, color, variante de estilo, habilitar, habilitar sombra y elección de entre 5 íconos, tanto al comienzo como al final del texto.</p>
        <p className='text-center'>Estas opciones pueden usarse en varias combinaciones como se muestran a continuación</p>
      </div>
    </>
  );
};

export default Header;