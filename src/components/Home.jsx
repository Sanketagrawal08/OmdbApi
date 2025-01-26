import React, { useEffect, useState } from "react";
import "./index.css";
import MovieShow from "./MovieShow";
import { getDataByTitle } from "./Api";
import Loader from "./Loader";

const Home = () => {
  const [query, setquery] = useState("");
  const [movieData, setmovieData] = useState(null)
  const [laoding, setlaoding] = useState(false)
  useEffect(() => {
    if (query) {
      HandleClick();
    } else {
      setmovieData(null);
    }
  }, [query]);
  const HandleClick = async () => {
    setlaoding(true)
    if(!query){
        alert("Please enter movie name")
        return;
    }
    try {
      const res = await getDataByTitle(query);
      setmovieData(res.data)
      setlaoding(false)
    } catch (Error) {
      console.log("Error: ", Error);
      setlaoding(false)
    }
  };

  return (
    <div className="res1 w-full h-[91vh] flex">
      <div className="bgImage  w-1/2 h-[91vh] justify-center items-center flex">
        <div className="container-input">
          <input
            type="text"
            placeholder="Enter Any Movie Name"
            name="text"
            className="input"
            value={query}
            onChange={(e) => {
              setquery(e.target.value);
            }}
          />
          <svg
          className="cursor-pointer"
            onClick={HandleClick}
            fill="#000000"
            width="20px"
            height="20px"
            viewBox="0 0 1920 1920"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z"
              fillRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
      <div className="res2 w-1/2 h-[91vh] bg-neutral-800 ">
        {laoding ? (
          <Loader />
        ) : movieData ? (
          <MovieShow movieData={movieData} />
        ) : (
          <div className="text-white text-xl flex  justify-center items-center h-full">
            
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
