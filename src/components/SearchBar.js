import React from "react";
import SearchBox from "./SearchBox";
import Button from "./Button";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchBox />
      <div>or</div>
      <Button styleName={"upload"}>Upload your own</Button>
    </div>
  );
};

export default SearchBar;
