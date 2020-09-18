import React from 'react'
import styles from "./SongOverlay.module.css";
import playButton from "../images/play.svg";
import likeButton from "../images/heart.svg";
import moreButton from "../images/dots.svg";

export const SongOverlay = ({hovered, track}) => {
    
    return (
        <>
                      <img src={track.cover} alt="cover"/>
          {hovered && (
            <div className={styles.songButtons}>
              <div
                className={styles.playButton}
                onClick={(e) => {
                  e.stopPropagation();
                  console.log("play");
                }}
              >
                <img src={playButton} alt="play button" />
              </div>
              <div className={styles.imageButtons}>
                <img
                  src={likeButton} alt="like button"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("like");
                  }}
                />
                <img
                  src={moreButton} alt="more options"
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log("more");
                  }}
                />
              </div>
            </div>
          )}
        </>
    )
}
