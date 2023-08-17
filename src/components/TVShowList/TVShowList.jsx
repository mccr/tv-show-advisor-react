import style from "./style.module.css";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <h1 className={style.title}>You'll probably like:</h1>
      <div className={style.list}>
        {tvShowList.map((tvShow) => {
          return (
            <span key={tvShow.id} className={style.tv_show_item}>
              <TVShowListItem tvShow={tvShow} onClickItem={onClickItem} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
