import React from 'react';

// variant = [ default, outline, text ]

const theme = {
  colors: {
    default: {
      solid: "text-[#3F3F3F] bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]",
      outline: "bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] text-[#3D5AFE] border-[#3D5AFE] border border-solid",
      text: "text-[#3D5AFE] bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A]"
    },
    primary: {
      solid: "text-white bg-[#2962FF] hover:bg-[#0039CB] focus:bg-[#0039CB]",
      outline: "bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A] text-[#3D5AFE] border-[#3D5AFE] border border-solid",
      text: "text-[#3D5AFE] bg-white hover:bg-[#2962FF1A] focus:bg-[#2962FF1A]"
    },
    secondary: {
      solid: "text-white bg-[#455A64] hover:bg-[#1C313A] focus:bg-[#1C313A]",
      outline: "bg-white hover:bg-[#455A641A] focus:bg-[#455A641A] text-[#455A64] border border-solid border-[#455A64]",
      text: "bg-white hover:bg-[#455A641A] focus:bg-[#455A641A] text-[#455A64]"
    },
    danger: {
      solid: "text-white bg-[#D32F2F] hover:bg-[#9A0007] focus:bg-[#9A0007]",
      outline: "bg-white hover:bg-[#D32F2F1A] focus:bg-[#D32F2F1A] text-[#D32F2F] border border-solid border-[#D32F2F]",
      text: "bg-white hover:bg-[#D32F2F1A] focus:bg-[#D32F2F1A] text-[#D32F2F]"
    }
  },
}
const variantTypes = ["solid", "outline", "text"]

const StyledButton = ({ color = "default", variant = "solid", text = 'Default', disableShadow = false, }) => {

  const styleGeneral = "py-2 px-4 rounded-md font-sans font-medium text-sm";

  // Seteo el estilo default del boton (solido, con el color default)
  let styleVariant = theme.colors.default.solid;

  // Reviso si los colores y variantes son correctos 
  // Colores --> default, primary, secondary, danger
  // Variantes --> solid (default), outline, text
  // Si los valores no son correctos, se les asigna los defaults (default y solid respectivamente)
  const colorChosen = color in theme.colors ? color : "default";
  const variantChosen = variantTypes.includes(variant) ? variant : "default"
  styleVariant = theme.colors[colorChosen][variantChosen]

  const styleShadow = variant === "default" && !disableShadow ? "drop-shadow-md" : ""

  return (
    <button className={`${styleGeneral} ${styleShadow} ${styleVariant}`}>
      {text}
    </button>
  );
};

export default StyledButton;