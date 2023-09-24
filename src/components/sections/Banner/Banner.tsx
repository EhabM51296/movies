import React from "react";
import styles from "./Banner.module.css";
import Image from "../../common/Image/Image";
import Link from "../../common/Link/Link";


interface BannerProps {
  movie: {
    poster_path: string;
    title: string;
    overview: string;
    original_language: string;
    release_date: string;
  };
}
function Banner({ movie }: BannerProps) {

  return (
    <div className={styles.banner}>
      <Image
        src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`} // Use the image URL from the first movie
        alt="banner image"
        width="100%"
        height="100%"
        objectFit="cover"
        className={styles.bannerbg}
      />
      <div className={styles.overlay}></div>
      <div className={`${styles.bannercontent} relative z-10 flex-row flex-direction-column row-gap-40`}>
        <div className="col-12">
          <h6 className="txtmaincolor mediumf">COMING SOON</h6>
        </div>
        <div className="col-12 flex-row flex-direction-column row-gap-20">
          <h1 className="txtwhitecolor">{movie?.title}</h1>
          <p className="txtwhitecolor large">{movie?.overview}</p>
        </div>
        <div className="flex-row row-gap-5 column-gap-20">
          <div><span className="txtmaincolor mediumf">{movie?.original_language}</span></div>
          <div><span className="txtmaincolor mediumf">{movie?.release_date}</span></div>
        </div>
        <Link text="View Details" to="#" openInNewTab={true} Underline={false} transition={false} colorBeforeHover="white" className="button-primary"/>
      </div>
    </div>
  );
}

export default Banner;
