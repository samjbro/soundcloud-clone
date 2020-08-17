import React from "react";
import styles from "./Button.module.css";

const handleClick = () => {
  //do something
};

const Button = ({ styleName, children }) => {
  return (
    <button onClick={handleClick} className={styleName}>
      {children}
    </button>
  );
};

export default Button;
