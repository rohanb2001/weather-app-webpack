import "./assets/css/style.css";

import { state } from "./Model/model";
import { addWeatherContent } from "./View/view";

// Images
import clear from "./assets/img/clear.svg";
import cloud from "./assets/img/cloud.svg";
import haze from "./assets/img/haze.svg";
import rain from "./assets/img/rain.svg";
import snow from "./assets/img/snow.svg";
import storm from "./assets/img/storm.svg";

const wIcon = document.querySelector("img");
const arrorBack = document.querySelector("header i");

export const wrapper = document.querySelector(".wrapper");
export const infoTxt = document.querySelector(".info-txt");
export const weatherPart = document.querySelector(".weather-part");

// Controller Function
export function weatherDetails(info) {
  if (info.cod === "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerHTML = `${state.inputValue} isn't a valid city name`;
  } else {
    const { id } = info.weather[0];
    if (id === 800) {
      wIcon.src = clear;
    } else if (id >= 200 && id <= 232) {
      wIcon.src = storm;
    } else if (id >= 600 && id <= 622) {
      wIcon.src = snow;
    } else if (id >= 701 && id <= 781) {
      wIcon.src = haze;
    } else if (id >= 801 && id <= 804) {
      wIcon.src = cloud;
    } else if ((id >= 500 && id <= 531) || (id >= 300 && id <= 321)) {
      wIcon.src = rain;
    }
    addWeatherContent(info);
  }
}

arrorBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
