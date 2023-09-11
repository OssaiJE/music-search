import React, { useState } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate({
      pathname: "/search",
      search: `?q=${searchQuery}`,
    });
  };

  const handleKeyDown = (e: { key: string; }) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="flex items-center w-full justify-end">
      <div className="flex gap-1 w-[90%] ms:w-[60%] justify-center">
        <div className="relative w-[85%]">
          <input
            className="w-[100%] border-[1px] outline-none rounded p-2 text-black text-base font-bold"
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            placeholder="Search for a song"
            onKeyDown={handleKeyDown}
          />
        </div>
        <Button text="Search" handleClick={handleSearch} />
      </div>
    </div>
  );
};

export default Search;
