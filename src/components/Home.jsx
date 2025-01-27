import React, { useEffect, useState } from "react";
import "./index.css";
import MovieShow from "./MovieShow";
import { getDataByTitle } from "./Api";
import Loader from "./Loader";

const Home = () => {
  const [query, setQuery] = useState("");
  const [movieData, setMovieData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query) {
      handleSearch();
    } else {
      setMovieData(null);
    }
  }, [query]);

  const handleSearch = async () => {
    setLoading(true);
    if (!query) {
      alert("Please enter a movie name");
      return;
    }
    try {
      const res = await getDataByTitle(query);
      setMovieData(res.data);
      setLoading(false);
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
    }
  };

  return (
    <div className="colDena w-full h-[91vh] flex bg-gray-900 text-white">
     
      <div className="c1 w-1/2 h-[91vh] flex items-center justify-center bg-gradient-to-br from-neutral-900 to-[#023430]">
        <div className="p-6 bg-white/10 rounded-2xl backdrop-blur-md shadow-lg text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">
            Search Your Favorite Movie 🎬
          </h1>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Enter any movie name..."
              className="w-72 p-3 rounded-l-lg bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 outline-none"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button
              onClick={handleSearch}
              className="px-4 py-3 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition duration-200"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      
      <div className="c2 w-1/2 h-[91vh] bg-neutral-900 overflow-y-auto p-6">
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        ) : movieData ? (
          <MovieShow movieData={movieData} />
        ) : (
          <div className="flex justify-center items-center h-full">
            <p className="text-xl">Search for a movie to see details!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
