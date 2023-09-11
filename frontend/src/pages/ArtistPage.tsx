import React from "react";
import Artist from "../components/Artist";
import Title from "../components/Title";
import Search from "../components/Search";

const ArtistPage = () => {
  return (
    <>
      <div className="bg-black w-full p-4 text-white">
        <Title />
      </div>
      <Search />
      <Artist />
    </>
  );
};

export default ArtistPage;
