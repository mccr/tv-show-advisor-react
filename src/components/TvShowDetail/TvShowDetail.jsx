import style from "./style.module.css";
import React from "react";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

export function TvShowDetail({ tvShow }) {
  const rating = tvShow.vote_average / 2;
  return (
    <div className="tv-show-detail">
      <div className={style.title}>{tvShow.name}</div>
      <div className={style.rating_container}>
        <FiveStarRating ratingValue={rating} />
        <span className={style.rating}>{rating}/5</span>
      </div>
      <div className={style.overview}>{tvShow.overview}</div>
    </div>
  );
}
