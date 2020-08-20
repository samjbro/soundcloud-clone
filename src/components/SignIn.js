import React from "react";
import Button, { ButtonVariants } from "./Button";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Button 
        variant={ButtonVariants.secondary}
        title="Sign in"
        onClick={() => {}}
      />
      <Button 
        title="Create account"
        onClick={() => {}}
      />
      <Button 
        variant={ButtonVariants.transparent}
        title="For Creators"
        onClick={() => {}}
      />
    </div>
  );
};

export default SignIn;
