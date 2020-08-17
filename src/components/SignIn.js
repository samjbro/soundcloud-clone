import React from "react";
import Button from "./Button";
import styles from "./SignIn.module.css";

const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <Button styleName={"signIn"}>Sign in</Button>
      <Button styleName={"createAcc"}>Create account</Button>
      <Button styleName={"creators"}>For Creators</Button>
    </div>
  );
};

export default SignIn;
