import React from "react";
import cartImg from "../../../assets/icons/cart.svg";
import style from "./HoverCartButton.module.css";

const HoveringCartButton = ({className, onClick}) => {
  return (
    <button onClick={onClick} className={style[className]}>
      <img className={style.imageSvg} src={cartImg} alt="cart" />
    </button>
  );
};

export default HoveringCartButton;
