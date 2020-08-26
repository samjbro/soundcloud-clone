import React, { useState } from "react";
import styles from "./TrendingTrack.module.css";
import playButton from "../images/play.svg";
import likeButton from "../images/heart.svg";
import moreButton from "../images/dots.svg";

const TrendingTrack = ({ track }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (e) => {
    setHovered(!hovered);
  };
  return (
    <>
      <div className={styles.cont}>
        <div
          className={styles.trackItem}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          data-index={track.id}
        >
          <img src={track.cover} />

          {hovered && (
            <>
              <div className={styles.playButton}>
                <img src={playButton} />
              </div>
              <div className={styles.likeButton}>
                <img src={likeButton} />
              </div>
              <div className={styles.moreButton}>
                <img src={moreButton} />
              </div>
            </>
          )}
        </div>
        <div>{track.title}</div>
        <div className={styles.user}>{track.user}</div>
      </div>
    </>
  );
};

export default TrendingTrack;
