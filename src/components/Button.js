import React from "react";
import styles from "./Button.module.css";

const Button = ({ bgColor, border, size, children }) => {
  return (
    <button className={`${styles[bgColor]} ${styles[border]} ${styles[size]}`}>
      {children}
    </button>
  );
};

export default Button;
