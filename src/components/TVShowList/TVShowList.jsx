import style from "./style.module.css";
import React from "react";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList }) {
  const showTvShowDetails = (tvShow) => console.log("im clicking", tvShow);
  return (
    <div>
      <h1 className={style.title}>You'll probably like:</h1>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={style.tv_show_item}>
              <TVShowListItem tvShow={tvShow} onClick={showTvShowDetails} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
