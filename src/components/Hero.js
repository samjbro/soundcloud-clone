import React from "react";
import SignIn from "./SignIn";
import styles from "./Hero.module.css";
import HeroCopy from "./HeroCopy";

const Hero = () => {
  return (
    <div className={styles.hero}>
      <SignIn />
      <HeroCopy />
    </div>
  );
};

export default Hero;
