import React from "react";
import { NavLink } from "react-router-dom";
import './index.css'

const MovieShow = ({ movieData }) => {
  const isValidData = movieData && movieData.Title && movieData.Poster;

  return (
    <div>
      {isValidData ? (
        <div className= "rounded-lg shadow-sm p-2 shadow-white">
          <div className="flex flex-col items-center">
            <img
              src={movieData.Poster}
              alt={movieData.Title}
              className="rounded-lg shadow-md w-60 object-cover mb-6"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold mb-2">{movieData.Title}</h1>
              <div className="text-lg mb-4 space-y-2">
                <p>
                  <strong className="se">Released:</strong> {movieData.Released}
                </p>
                <p>
                  <strong className="se">Actors:</strong> {movieData.Actors}
                </p>
                <p>
                  <strong className="se">Genre:</strong> {movieData.Genre}
                </p>
                <p>
                  <strong className="se">Language:</strong> {movieData.Language}
                </p>
              </div>
              <NavLink to={`/moviedetails/${movieData.imdbID}`}>
                <button className="bg-blue-600 px-4 mb-2 py-2 rounded-lg hover:bg-blue-700 transition duration-200">
                  More Details
                </button>
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center mt-10 text-gray-400">No movie found!</p>
      )}
    </div>
  );
};

export default MovieShow;
