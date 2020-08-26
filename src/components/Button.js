import React from "react";
import styles from "./Button.module.css";

export const ButtonVariants = {
  primary: "primary",
  secondary: "secondary",
  transparent: "transparent",
};

export const ButtonSizes = {
  medium: "medium",
  large: "large",
  noPadding: "no-padding",
};

const Button = ({
  variant = ButtonVariants.primary,
  size = ButtonSizes.medium,
  title,
  onClick,
}) => {
  const buttonClasses = [styles.button, styles[variant], styles[size]].join(
    " "
  );
  return (
    <button onClick={onClick} className={buttonClasses}>
      {title}
    </button>
  );
};

export default Button;
