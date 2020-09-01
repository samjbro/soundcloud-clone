import React from "react";
import Button, { ButtonVariants, ButtonSizes } from "./Button";
import styles from "./SignIn.module.css";
import cloud from "../images/soundcloud-logo.png";
import textLogo from "../images/text-logo.png";

const SignIn = () => {
  return (
    <div className={styles.topSection}>
      <div className={styles.logoContainer}>
        <div className={styles.logoCloud}>
          <img src={cloud} />
        </div>
        <div className={styles.logoText}>
          <img src={textLogo} />
        </div>
      </div>
      <div className={styles.signIn}>
        <Button
          variant={ButtonVariants.secondary}
          title="Sign in"
          onClick={() => {}}
        />
        <Button title="Create account" onClick={() => {}} />
        <Button
          variant={ButtonVariants.transparent}
          title="For Creators"
          size={ButtonSizes.noPadding}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default SignIn;
