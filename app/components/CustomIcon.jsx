import React from 'react';
import { AiOutlineHome, AiFillDelete, AiOutlineStar, AiFillCloseCircle, AiOutlineStop } from "react-icons/ai";

const CustomIcon = ({ iconName = undefined, end = false }) => {
  const style = end ? 'ml-2' : 'mr-2'
  if (iconName === "home") return <AiOutlineHome className={style} />
  if (iconName === "delete") return <AiFillDelete className={style} />
  if (iconName === "star") return <AiOutlineStar className={style} />
  if (iconName === "close") return <AiFillCloseCircle className={style} />
  if (iconName === "stop") return <AiOutlineStop className={style} />
  return undefined;
};

export default CustomIcon;