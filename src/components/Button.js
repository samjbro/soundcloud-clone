import React from "react";
import styles from "./Button.module.css";

const variants = ["primary--solid", "secondary--solid", "secondary--outline"];

const sizes = ["medium", "large", "no-padding"];

const Button = ({ onClick, title, variant, size }) => {
  const checkVariant = variants.includes(variant) ? variant : variants[0];
  const checkSize = sizes.includes(size) ? size : sizes[0];

  return (
    <button
      className={`${styles[checkVariant]} ${styles[checkSize]}`}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
