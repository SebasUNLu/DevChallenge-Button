import React from 'react';

// variant = [ default, outline, text ]

const theme = {
  colors: {
    default: {
      default: "text-[#3F3F3F] bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]",
      outline: "bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] text-[#3D5AFE] border-[#3D5AFE] border border-solid",
      text: "text-[#3D5AFE] bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A]"
    },
    primary: {
      default: "text-white bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB]",
      outline: "bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] text-[#3D5AFE] border-[#3D5AFE] border border-solid",
      text: "text-[#3D5AFE] bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A]"
    },
    secondary: {
      default: "text-white bg-[#455A64] hover:bg-[#1C313A] focus:bg-[#1C313A]",
      outline: "bg-white hover:bg-[#455A641A] focus:bg-[#455A641A] text-[#455A64] border border-solid border-[#455A64]",
      text: "bg-white hover:bg-[#455A641A] focus:bg-[#455A641A] text-[#455A64]"
    },
    danger: {
      default: "text-white bg-[#D32F2F] hover:bg-[#9A0007] focus:bg-[#9A0007]",
      outline: "bg-white hover:bg-[#D32F2F1A] focus:bg-[#D32F2F1A] text-[#D32F2F] border border-solid border-[#D32F2F]",
      text: "bg-white hover:bg-[#D32F2F1A] focus:bg-[#D32F2F1A] text-[#D32F2F]"
    }
  },
  sizes: {
    sm: "h-[32px] py-[0.375em] px-[0.75em]",
    md: "h-[36px] py-[0.5em] px-[1em]",
    lg: "h-[42px] py-[0.688.em] px-[1.375em]",
  },
  disable: {
    solid: "text-[#9E9E9E] bg-[#E0E0E0]",
    text: "bg-white text-[#9E9E9E]"
  }
}
const variantTypes = ["solid", "outline", "text"]

const StyledButton = ({ color = "default", variant = "default", text = 'Default', disableShadow = false, disable = false, size = "md" }) => {

  const styleGeneral = "rounded-md font-sans font-medium text-sm";

  // Seteo el estilo default del boton (solido, con el color default)
  let styleVariant = theme.colors.default.solid;
  if (disable)
    styleVariant = theme.disable.solid
  else {
    // Reviso si los colores y variantes son correctos 
    // Colores --> default, primary, secondary, danger
    // Variantes --> default, outline, text
    // Si los valores no son correctos, se les asigna los defaults
    const colorChosen = color in theme.colors ? color : "default";
    const variantChosen = variantTypes.includes(variant) ? variant : "default"
    styleVariant = theme.colors[colorChosen][variantChosen]
  }

  const styleShadow = variant === "default" && !disableShadow && !disable ? "drop-shadow-md" : "";

  let styleSize = theme.sizes.md
  switch (size) {
    case "sm": styleSize = theme.sizes.sm;
      break;
    case "lg": styleSize = theme.sizes.lg;
      break;
    default: break;
  }

  return (
    <button className={`${styleGeneral} ${styleShadow} ${styleVariant} ${styleSize}`} disabled={disable}>
      {text}
    </button>
  );
};

export default StyledButton;