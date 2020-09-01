import React from "react";
import styles from "./MiscAds.module.css";
import appstore from "../images/appstore.png";
import google_play from "../images/google-play.png";
import neverStop from "../images/never_stop_listening.jpg";

import Button, { ButtonVariants, ButtonSizes } from "./Button";

const MiscAds = () => {
  return (
    <>
      <div className={styles.neverstop__container}>
        <div className={styles.neverStop__image}>
          <img src={neverStop} />
        </div>
        <div className={styles.neverStop__textcontainer}>
          <div className={styles.neverStop__title}>Never stop listening</div>

          <div className={styles.neverStop__gradient}></div>
          <div className={styles.neverStop__copy}>
            SoundCloud is available on Web, iOS, Android, Sonos, Chromecast, and
            Xbox One.
          </div>
          <div className={styles.neverStop__ads}>
            <img src={appstore} />
            <img src={google_play} />
          </div>
        </div>
      </div>

      <div className={styles.creators}>
        <div className={styles.creators__title}>Calling all creators</div>
        <div className={styles.creators__copy}>
          Get on SoundCloud to connect with fans, share your sounds, and grow
          your audience. What are you waiting for?
        </div>
        <Button
          variant={ButtonVariants.secondary}
          title="Find out more"
          onClick={() => {}}
        />
      </div>
      <div className={styles.thanks__container}>
        <div className={styles.thanks__title}>
          Thanks for listening. Now join in.
        </div>
        <div className={styles.thanks__copy}>
          Save tracks, follow artists and build playlists.All for free
        </div>
        <Button
          title="Create account"
          size={ButtonSizes.large}
          onClick={() => {}}
        />
      </div>
      <div className={styles.thanks__signin}>
        <div>Already have an account? &emsp;</div>
        <Button title="Sign in" size={ButtonSizes.medium} onClick={() => {}} />
      </div>
    </>
  );
};
export default MiscAds;
