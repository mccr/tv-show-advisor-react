import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import style from "./style.module.css";
import React from "react";

const MAX_CHAR_TITLE = 20;

export function TVShowListItem({ tvShow, onClickItem }) {
  const tvShowName = () => {
    return tvShow.name > MAX_CHAR_TITLE
      ? `${tvShow.name.split(0, MAX_CHAR_TITLE)}...`
      : tvShow.name;
  };
  const handleClick = () => {
    onClickItem(tvShow);
  };
  return (
    <div onClick={handleClick} className={style.container}>
      <img
        className={style.img}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
        alt={tvShow.name}
      />
      <div className={style.title}>{tvShowName}</div>
    </div>
  );
}
