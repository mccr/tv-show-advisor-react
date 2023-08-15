import React, { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TvShowDetail } from "./components/TvShowDetail/TvShowDetail";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);
  console.log(currentTVShow);
  return (
    <div
      className="main-container"
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
             url("${BACKDROP_BASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className="header">
        search bar
        <div className="row">
          <div className="col-4">
            <div>LOGO</div>
            <div>Subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text"></input>
          </div>
        </div>
      </div>
      {currentTVShow && <TvShowDetail tvShow={currentTVShow} />}
      <div className="recommendations">recommendations</div>
    </div>
  );
}
