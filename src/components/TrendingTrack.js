import React, { useState } from "react";
import styles from "./TrendingTrack.module.css";
import playButton from "../images/play.svg";
import likeButton from "../images/heart.svg";
import moreButton from "../images/dots.svg";

const TrendingTrack = ({ track }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = () => {
    setHovered(!hovered);
  };
  return (
    <>
      <div className={styles.buttonContainer}>
        <div
          className={styles.trackItem}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <img src={track.cover} />

          {hovered && (
            <>
              <div
                className={styles.playButton}
                onClick={() => {
                  console.log("play");
                }}
              >
                <img src={playButton} />
              </div>
              <div
                className={styles.likeButton}
                onClick={() => {
                  console.log("like");
                }}
              >
                <img src={likeButton} />
              </div>
              <div
                className={styles.moreButton}
                onClick={() => {
                  console.log("more");
                }}
              >
                <img src={moreButton} />
              </div>
            </>
          )}
        </div>
        <div className={styles.title}>{track.title}</div>
        <div className={styles.user}>{track.user}</div>
      </div>
    </>
  );
};

export default TrendingTrack;
