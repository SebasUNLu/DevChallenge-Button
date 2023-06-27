import React from 'react';

// variant = [ default, outline, text ]

const StyledButton = ({ variant = "default", text = 'Default', disableShadow = false }) => {
  
  const styleGeneral = "text-[#3F3F3F]  py-2 px-4 rounded-md font-sans font-medium text-sm"
  
  // default --> "default"
  let styleVariant = "bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]"
  switch (variant) {
    case "outline":
      styleVariant = "bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] text-[#3D5AFE] border-[#3D5AFE] border border-solid"
      break;
    case "text":
      styleVariant = "text-[#3D5AFE] bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A]"
      break;
  }

  const styleShadow = variant === "default" && !disableShadow ? "drop-shadow-md" : ""

  return (
    <button className={`${styleGeneral} ${styleShadow} ${styleVariant}`}>
      {text}
    </button>
  );
};

export default StyledButton;