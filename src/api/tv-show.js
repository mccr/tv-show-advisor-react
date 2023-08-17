import axios from "axios";
import { FAKE_POPULARS } from "./fake-data";
import { FAKE_RECOMMENDATIONS } from "./fake-recommendations";
import { BASE_URL, API_KEY_PARAM } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    // const response = await axios.get(`${BASE_URL}discover/tv${API_KEY_PARAM}`);
    // console.log(response.data.results);
    // return response.data.results;
    return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    // const response = await axios.get(
    //   `${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`
    // );
    // return response.data.results;
    return FAKE_RECOMMENDATIONS;
  }
}
