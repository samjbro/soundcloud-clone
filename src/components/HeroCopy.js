import React from "react";
import styles from "./HeroCopy.module.css";
import Button, { ButtonSizes } from "./Button";

const HeroCopy = () => {
  return (
    <div className={styles.copyContainer}>
      <div className={styles.header}>Connect on SoundCloud</div>
      <div className={styles.main}>
        Discover, stream, and share a constantly expanding mix of music
        <br /> from emerging and major artists around the world.
      </div>
      <Button
        title="Sign up for free"
        size={ButtonSizes.large}
        onClick={() => {}}
      />
    </div>
  );
};

export default HeroCopy;
