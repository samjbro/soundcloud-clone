import React from "react";

const SearchBox = () => {
  return (
    <form>
      <input
        type="text"
        placeholder="Search for artists, bands, tracks, podcasts"
      />
      <button type="submit">
        <i class="fa fa-search"></i>
      </button>
    </form>
  );
};

export default SearchBox;
