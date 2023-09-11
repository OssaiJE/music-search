import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import SongPage from "./pages/SongPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AlbumPage from "./pages/AlbumPage";
import ArtistPage from "./pages/ArtistPage";
import SearchResultPage from "./pages/SearchResultPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/track/:id" element={<SongPage />} />
        <Route path="/artist/:id" element={<ArtistPage />} />
        <Route path="/album/:id" element={<AlbumPage />} />
        {/* <Route path = '/search/track' element = {<SearchResultPage/>}/> */}
        <Route path="/search" element={<SearchResultPage />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={10000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
