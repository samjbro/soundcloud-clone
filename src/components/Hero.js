import React from "react";
import Logo from "./Logo";
import SignIn from "./SignIn";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img src={process.env.PUBLIC_URL + "/images/hero.jpg"} alt={"hero"} />
      <Logo />
      <SignIn />
    </div>
  );
};

export default Hero;
