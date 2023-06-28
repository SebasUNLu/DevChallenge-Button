import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <>
      <div className='w-full relative'>
        <div className='absolute t-0 l-0 w-full h-64 bg-gradient-to-t from-white to-transparent to-40%'></div>
        <div className="h-64 w-full flex items-center justify-center gif-background bg-gradient-to-t from-white to-transparent">
          <h1 className='text-orange-600 text-3xl font-bold'>Dev Challenge - Buttons</h1>
        </div>
      </div>
      <div className='flex items-center justify-center p-4 text-xl font-bold'>
        <h2>By Sebastián Marchetti :)</h2>
      </div>
      <div className='px-8 py-4'>
        <p className='text-center text-lg'>
          Este es el primero de 8 desafios propuestos en la página <Link href={"https://devchallenges.io/"} target='_blank' className='font-bold text-orange-600'>DevChallenges.io</Link> que consiste en crear un componente Boton reutilizable y customizable. Entre las opciones de personalización están el tamaño, color, variante de estilo, habilitar, habilitar sombra y elección de entre 5 íconos, tanto al comienzo como al final del texto.</p>
        <p className='text-center text-lg my-2'>Las tecnologías utilizadas fueron React con Next.js y tailwind para los estilos</p>
        <p className='text-center text-lg'>Estas opciones pueden usarse en varias combinaciones como se muestran a continuación:</p>
      </div>
    </>
  );
};

export default Header;