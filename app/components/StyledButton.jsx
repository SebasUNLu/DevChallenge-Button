import React from 'react';


const StyledButton = ({ text = 'Default', disableShadow = false }) => {

  const style = "text-[#3F3F3F] bg-[#E0E0E0] py-2 px-4 rounded-md hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]"
  const styleShadow = !disableShadow ? "drop-shadow-md" : ""

  return (
    <button className={`${style} ${styleShadow}`}>
      {text}
    </button>
  );
};

export default StyledButton;