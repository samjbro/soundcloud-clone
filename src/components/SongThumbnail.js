import React, { useState } from "react";
import styles from "./SongThumbnail.module.css";
import { SongOverlay } from "./SongOverlay";

const SongThumbnail = ({ track }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      <div className={styles.trackContainer}>
        <div
          className={styles.trackItem}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => {
            console.log("image");
          }}
        >
          <SongOverlay hovered={hovered} track={track}/>
        </div>
        <div className={styles.title}>{track.title}</div>
        <div className={styles.user}>{track.user}</div>
      </div>
    </>
  );
};

export default SongThumbnail;
