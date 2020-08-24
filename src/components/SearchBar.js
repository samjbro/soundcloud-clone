import React from "react";
import SearchBox from "./SearchBox";
import Button from "./Button";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchBox />
      <div>or</div>
      <Button
        onClick={() => {
          console.log("clicked");
        }}
        title="Upload your own"
        variant="primary--solid"
        size="large"
      />
    </div>
  );
};

export default SearchBar;
