import React from "react";
import SearchBox from "./SearchBox";
import Button, { ButtonVariants, ButtonSizes } from "./Button";
import styles from "./SearchBar.module.css";

const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchBox />
      <div>or</div>
      <Button
        title="Upload your own"
        size={ButtonSizes.large}
        onClick={() => {}}
      />
    </div>
  );
};

export default SearchBar;
