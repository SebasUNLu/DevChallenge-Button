import React from 'react';

const StyledButton = ({ text = 'Default' }) => {
  return (
    <button className='text-[#3F3F3F] bg-[#E0E0E0] py-2 px-4 rounded-md drop-shadow-md hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]'>
      {text}
    </button>
  );
};

export default StyledButton;