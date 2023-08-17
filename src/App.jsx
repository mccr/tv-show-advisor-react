import React, { useEffect, useState } from "react";
import { TVShowAPI } from "./api/tv-show";
import { BACKDROP_BASE_URL } from "./config";
import { TvShowDetail } from "./components/TvShowDetail/TvShowDetail";
import { TVShowList } from "./components/TVShowList/TVShowList";
import { Logo } from "./components/Logo/Logo";
import logoImg from "./assets/images/logo.png";

export function App() {
  const [currentTVShow, setCurrentTVShow] = useState();
  const [recommendationList, setRecommendationList] = useState([]);

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  async function fetchRecommendations(tvShowId) {
    const recommendationList = await TVShowAPI.fetchRecommendations(tvShowId);
    if (recommendationList.length > 0) {
      setRecommendationList(recommendationList.slice(0, 10));
    }
  }
  useEffect(() => {
    fetchPopulars();
  }, []);

  useEffect(() => {
    if (currentTVShow) fetchRecommendations(currentTVShow.id);
  }, [currentTVShow]);

  const updateCurrentTvShow = (tvShow) => {
    setCurrentTVShow(tvShow);
  };
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
        <div className="row">
          <div className="col-4">
            <Logo
              img={logoImg}
              title="Watowatch"
              subtitle="Find a show you may like"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text"></input>
          </div>
        </div>
      </div>
      {currentTVShow && <TvShowDetail tvShow={currentTVShow} />}
      <div className="recommendations">
        {currentTVShow && (
          <TVShowList
            tvShowList={recommendationList}
            onClickItem={updateCurrentTvShow}
          />
        )}
      </div>
    </div>
  );
}
