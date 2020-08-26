import React from "react";
import Hero from "./Hero";
import SearchBar from "./SearchBar";

const Home = () => {
  return (
    <div className="hero__container">
      <Hero />
      <SearchBar />
    </div>
  );
};

export default Home;
