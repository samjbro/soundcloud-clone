import React from "react";
import Button from "./Button";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        title="Sign in"
        variant="secondary--outline"
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        title="Create account"
      />
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        title="For Creators"
        variant="secondary--solid"
        size="no-padding"
      />
    </div>
  );
};

export default SignIn;
