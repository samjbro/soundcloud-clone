import React, { useState } from "react";
import styles from "./TrendingTrack.module.css";
import playButton from "../images/play.svg";
import likeButton from "../images/heart.svg";
import moreButton from "../images/dots.svg";

const TrendingTrack = ({ track }) => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (e) => {
    e.type === "mouseenter" ? setHovered(true) : setHovered(false);
  };
  return (
    <>
      <div className={styles.trackContainer}>
        <div
          className={styles.trackItem}
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
          onClick={() => {
            console.log("image");
          }}
        >
          <img src={track.cover} />
          {hovered && (
            <>
              <div
                className={styles.playButton}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("play");
                }}
              >
                <img src={playButton} />
              </div>
              <div className={styles.likeButton}>
                <img
                  src={likeButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("like");
                  }}
                />
                <img
                  src={moreButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("more");
                  }}
                />
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
