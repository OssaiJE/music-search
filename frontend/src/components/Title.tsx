import React from "react";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <Link to="/">
      <div className="font-[700] text-[24px] text-center w-200 flex items-center">
        <img src="/music.svg" alt="" width={40} height={40} className="mr-2" />
        MUSIC SEARCH
      </div>
    </Link>
  );
};

export default Title;
