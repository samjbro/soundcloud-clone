import React from "react";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import TrendingTracks from "./components/TrendingTracks";

function App() {
  return (
    <div className="hero__container">
      <Hero />
      <SearchBar />
      <TrendingTracks />
    </div>
  );
}

export default App;
