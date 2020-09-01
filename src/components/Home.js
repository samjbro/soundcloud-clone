import React from "react";
import Hero from "./Hero";
import SearchBar from "./SearchBar";
import TrendingTracks from "./TrendingTracks";
import MiscAds from "./MiscAds";

const Home = () => {
  return (
    <div className="hero__container">
      <Hero />
      <SearchBar />
      <TrendingTracks />
      <MiscAds />
    </div>
  );
};

export default Home;
