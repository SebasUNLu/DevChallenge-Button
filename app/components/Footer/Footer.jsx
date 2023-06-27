import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <div className='h-16 w-full bg-slate-500 mt-8 flex justify-around'>
      <p className='flex items-center justify-center'>
        © {new Date().getFullYear()} Sebastián Marchetti
      </p>
      <div className='flex items-center justify-center'>
        <a
          href="https://www.linkedin.com/in/sebasti%C3%A1n-pedro-marchetti/"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon width={32} height={32} icon={faLinkedin} color='#0C67C2' />
        </a>
        <a
          href="https://github.com/SebasUNLu"
          aria-label="LinkedIn"
          target="_blank"
          rel="noopener noreferrer"
          className='ml-8'
        >
          <FontAwesomeIcon width={32} height={32} icon={faGithub} color='white' />
        </a>
      </div>
    </div>
  );
};

export default Footer;