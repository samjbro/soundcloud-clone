import React, { useState } from "react";
import Button from "./Button";
import styles from "./TrendingTracks.module.css";

const data = {
  cover: "/images/trending.jpg",
  title: "title",
  user: "Name",
};

const arr = Array(12).fill(data);

const renderTracks = () => {
  const tracks = arr.map((track, i) => {
    return (
      <div className={styles.track}>
        <div className={styles.trackItem}>
          <img src={track.cover} />
          <div className={styles.playButton}></div>
        </div>
        <div>{track.title}</div>
        <div className={styles.user}>{track.user}</div>
      </div>
    );
  });
  return tracks;
};

const TrendingTracks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Hear what’s trending for free in the SoundCloud community
      </div>
      <div className={styles.trackList}>{renderTracks()}</div>
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
