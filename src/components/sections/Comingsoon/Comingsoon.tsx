import React from "react";
import styles from "./Comingsoon.module.css";
import Image from "../../common/Image/Image";
import Link from "../../common/Link/Link";

interface Movie {
  poster_path: string;
  title: string;
  overview: string;
  original_language: string;
  release_date: string;
}
interface Comingsoonprops {
  title: string;
  movies: Movie[];
}

function Comingsoon({ title, movies }: Comingsoonprops) {
  return (
    <div className="pd-T-40 flex-row flex-direction-column align-items-center row-gap-40">
      <div className="col-12 text-align-center bgblackcolor">
        <h2 className="txtmaincolor">{title}</h2>
      </div>
      <div className="grid-3 grid-2-md grid-1-sm">
        {/* Loop through the movies array and render each movie */}
        {movies.map((movie, index) => (
          <div key={index} className={`${styles.moviecard}`}>
            <div>
              <Image
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </div>
            <div>
              <h3 className="txtmaincolor">{movie.title}</h3>
            </div>
            <div>
              <p>{movie.overview}</p>
            </div>
            <div>
              <span className="txtmaincolor">Language: {movie.original_language}</span>
            </div>
            <div>
              <span className="txtmaincolor">Release Date: {movie.release_date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comingsoon;
