import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getDataByID } from "./Api";
import Loader from "./Loader";

const MovieDetails = () => {
  const { id } = useParams();
  const [movieDataDetails, setmovieDataDetails] = useState(null);

  useEffect(() => {
    dataAya();
  }, []);

  const dataAya = async () => {
    const res = await getDataByID(id);
    setmovieDataDetails(res.data);
  };

  if (!movieDataDetails) return <Loader/>

  return (
    <div className="max-w-6xl mx-auto py-12 px-6">
          <div className="flex justify-end  mb-4"> 
            <NavLink to="/">
            <i className="ri-close-line text-3xl text-red-600 hover:text-red-800 border-2 bg-gray-100 rounded-full"></i> 
            </NavLink>
            </div>
      <div className="flex flex-col md:flex-row items-center bg-teal-950 p-6 rounded-lg shadow-lg">
       
        <img
          src={movieDataDetails.Poster}
          alt={movieDataDetails.Title}
          className="w-64 h-96 object-cover rounded-lg mb-6 md:mb-0 md:mr-8"
          />

       
        <div className="text-white flex flex-col space-y-4">
          <div className="flex justify-between items-center">
          <h1 className="text-4xl font-bold">{movieDataDetails.Title}</h1>
          </div>
          <p className="text-xl italic text-gray-300">{movieDataDetails.Year}</p>
          
          <div className="flex space-x-6 font-light">
            <p><strong>Genre:</strong> {movieDataDetails.Genre}</p>
            <p><strong>Language:</strong> {movieDataDetails.Language}</p>
            <p><strong>Rated:</strong> {movieDataDetails.Rated}</p>
          </div>

          <div className="flex space-x-6">
            <p><strong>Released:</strong> {movieDataDetails.Released}</p>
            <p><strong>Runtime:</strong> {movieDataDetails.Runtime}</p>
            <p><strong>Director:</strong> {movieDataDetails.Director}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Plot:</p>
            <p>{movieDataDetails.Plot}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Actors:</p>
            <p>{movieDataDetails.Actors}</p>
          </div>

          <div>
            <p className="font-semibold text-lg">Awards:</p>
            <p>{movieDataDetails.Awards}</p>
          </div>

          <div className="flex space-x-6">
            <p><strong>Box Office:</strong> {movieDataDetails.BoxOffice}</p>
            <p><strong>IMDB Rating:</strong> {movieDataDetails.imdbRating}</p>
            <p><strong>Votes:</strong> {movieDataDetails.imdbVotes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
