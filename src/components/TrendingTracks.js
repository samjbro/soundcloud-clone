import React, { useState } from "react";
import Button from "./Button";
import styles from "./TrendingTracks.module.css";

const TrendingTracks = () => {
  const [hovered, setHovered] = useState(false);

  const handleHover = (e) => {
    e.type === "mouseenter"
      ? setHovered(e.target.getAttribute("data-img"))
      : setHovered(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Hear what’s trending for free in the SoundCloud community
      </div>
      <div className={styles.trackList}></div>
      <div>
        <Button
          onClick={() => {
            console.log("clicked");
          }}
          title="Explore trending playlists"
          variant="primary--solid"
          size="large"
        />
      </div>
    </div>
  );
};

export default TrendingTracks;
