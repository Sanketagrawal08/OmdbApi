import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieShow = ({ movieData }) => {

    console.log(movieData);
    
    const kyaDataHa = movieData && movieData.Title && movieData.Poster

   
  return (
   <div>
    {kyaDataHa ?  ( 
         <div className=" text-white p-8 rounded-lg max-w-3xl mx-auto mt-10">
        <div className="flex flex-col items-center">
         
          <img
            src={movieData.Poster}
            alt={movieData.Title}
            className="rounded-lg shadow-md w-80 h-80 mb-6"
          />
          <div className="text-center">
            
            <h1 className="text-4xl font-bold mb-3">{movieData.Title}</h1>
   
            <div className="text-lg mb-2">
              <p><strong>Released On:</strong> {movieData.Released}</p>
              <p><strong>Actors:</strong> {movieData.Actors}</p>
              <p><strong>Genre:</strong> {movieData.Genre}</p>
              <p><strong>Language:</strong> {movieData.Language}</p>
              <NavLink to={`/moviedetails/${movieData.imdbID}`}> 
              <button className='bg-blue-600 text-white px-4 py-2 rounded-lg mt-4'>More Details</button>
               </NavLink>
            </div>
          </div>
        </div>
      </div> ) 
      :
       (<p className='absolute top-[50vh] left-[70vw] text-white'>Movie Not Found 🥲 </p>) }
    
  
  </div>
  );
};

export default MovieShow;
