import React from "react";
import Button from "./Button";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Button bgColor={"transparent"} border={"whiteBorder"} size={"medium"}>
        Sign in
      </Button>
      <Button bgColor={"orange"} border={"noBorder"} size={"medium"}>
        Create account
      </Button>
      <Button bgColor={"transparent"} border={"noBorder"} size={"medium"}>
        For Creators
      </Button>
    </div>
  );
};

export default SignIn;
