import React from "react";
import styles from "./SearchBox.module.css";
import search from "../images/search.svg";

const SearchBox = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for artists, bands, tracks, podcasts"
      />
      <button type="submit">
        <img src={search} className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBox;
