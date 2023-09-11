import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import SearchResultCard from "./SearchResultCard";
import { axiosInstance } from "../config/axiosInstance";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Button from "./Button";

const SearchResult = () => {
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const [emptyRes, setEmptyRes] = useState("");
  const [loadmore, setLoadmore] = useState(1);
  const navigate = useNavigate();

  const route = useLocation();
  const searchQuery = route?.search?.split("=")[1];
  const searchSong = () => {
    setLoading(true);
    axiosInstance
      .get(`/search?q=${searchQuery}`)
      .then((res) => {
        setSearchResults(res?.data?.data?.data);
        if (res?.data?.data?.data?.length === 0) {
          setEmptyRes(`No result for ${searchQuery}`);
        }
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchSong();
  }, []);
  return (
    <div>
      <div className="flex mt-[40px] justify-center px-5">
        <>
          {loading ? (
            <ClipLoader size={50} color="green" />
          ) : emptyRes ? (
            <div>
              <div className="w-full text-[red] text-xs text-center">
                {emptyRes}
              </div>
              <Button handleClick={() => navigate("/")} text="Back to Search" />
            </div>
          ) : (
            <div className="flex gap-[40px] flex-wrap justify-center">
              {searchResults?.slice(0, loadmore * 4)?.map((track, index) => (
                <SearchResultCard track={track} key={index} />
              ))}
            </div>
          )}
        </>
      </div>
      {searchResults?.length > 0 &&
        loadmore * 4 <= searchResults?.length - 1 && (
          <div className="flex justify-center w-[100%] mt-[40px]">
            <Button
              handleClick={() => setLoadmore((prev) => prev + 1)}
              text="Load more"
            />
          </div>
        )}
    </div>
  );
};

export default SearchResult;
