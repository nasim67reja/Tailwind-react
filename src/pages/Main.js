import React, { useEffect, useState } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  const fetchData = async () => {
    const response = await fetch(requests.requestPopular);
    const data = await response.json();
    setMovies(data.results);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="h-[550px] w-full text-white">
      <div className="h-full w-full">
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
          alt={movie?.title}
        />
      </div>
    </div>
  );
};

export default Main;
