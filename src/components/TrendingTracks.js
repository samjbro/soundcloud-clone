import React from "react";
import Button, { ButtonSizes, ButtonVariants } from "./Button";
import styles from "./TrendingTracks.module.css";
import TrendingTrack from "./TrendingTrack";

const data = {
  cover: "/images/trending.jpg",
  title: "WAP feat. Megan Thee Stallion",
  user: "Cardi B",
};

const arr = Array(12)
  .fill(data)
  .map((item, i) => {
    return Object.assign({}, item, { id: i + 1 });
  });

const TrendingTracks = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        Hear what’s trending for free in the SoundCloud community
      </div>
      <div className={styles.trackList}>
        {arr.map((track) => (
          <TrendingTrack key={track.id} track={track} />
        ))}
      </div>
      <div>
        <Button
          title="Explore trending playlists"
          size={ButtonSizes.large}
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default TrendingTracks;
