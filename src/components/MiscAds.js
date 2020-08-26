import React from "react";
import styles from "./MiscAds.module.css";
import neverStop from "../images/never_stop_listening.jpg";
import creatorsImg from "../images/hp_creator_image.jpg";
import Button, { ButtonVariants, ButtonSizes } from "./Button";

const MiscAds = () => {
  return (
    <>
      <div className={styles.neverStopContainer}>
        <div className={styles.neverStopImg}>
          <img src={neverStop} />
        </div>
        <div className={styles.neverStopText}>
          <div className={styles.neverStopTitle}>Never stop listening</div>
          <div className={styles.neverStopGradient}></div>
          <div className={styles.neverStopText}>
            SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </div>
          <div className={styles.neverStopAds}></div>
        </div>
      </div>

      <div className={styles.creators}>
        <img src={creatorsImg} />
        <div className={styles.creators__textTitle}></div>
        <div classname={styles.creators__text}>
          <div className={styles.creators__textTitle}></div>
          <div className={styles.creators__textCopy}></div>
          <div className={styles.creators__btn}></div>
        </div>
        <div className={styles.thanksContainer}>
          <div className={styles.thanks__title}></div>
          <div className={styles.thanks__copy}></div>
          <Button
            title="Create account"
            size={ButtonSizes.large}
            onClick={() => {}}
          />
          <div className={styles.thanks__signIn}>
            <div>Already have an account?</div>
            <Button
              title="Sign in"
              size={ButtonSizes.medium}
              onClick={() => {}}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default MiscAds;
