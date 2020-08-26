import React from "react";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import TrendingTracks from "./TrendingTracks";

const Home = () => {
  return (
    <div className="hero__container">
      <Hero />
      <SearchBar />
      <TrendingTracks />
    </div>
  );
};

export default Home;
