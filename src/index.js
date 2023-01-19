import "./assets/css/style.css";

import { state } from "./Model/model";
import { addWeatherContent } from "./View/view";

import clear from "./assets/img/clear.svg";
import cloud from "./assets/img/cloud.svg";
import haze from "./assets/img/haze.svg";
import rain from "./assets/img/rain.svg";
import snow from "./assets/img/snow.svg";
import storm from "./assets/img/storm.svg";

const wrapper = document.querySelector(".wrapper");
const wIcon = document.querySelector("img");
const arrorBack = document.querySelector("header i");

export const infoTxt = document.querySelector(".info-txt");
export const weatherPart = document.querySelector(".weather-part");

// Variables
// let api;
// let API_KEY = "c6c351625df31807b6e3c66fb3910fcf";

// Functions
// function getInputValues(e) {
//   if (e.key === "Enter" && inputField.value !== "") {
//     requestApi(inputField.value);
//   }
// }

// services
// function requestApi(city) {
//   api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
//   fetchData();
// }

// services
// function getGeoLocation() {
//   if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(onSuccess, onError);
//   } else {
//     alert("Your browser not support geolocation api");
//   }
// }

// services
// function onSuccess(position) {
//   const { latitude, longitude } = position.coords;
//   api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
//   console.log(latitude, longitude);
//   fetchData();
// }

// view
// function onError(error) {
//   infoTxt.innerHTML = error.message;
//   infoTxt.classList.add("error");
// }

// services
// function fetchData() {
//   infoTxt.innerHTML = "Getting weather details...";
//   infoTxt.classList.add("pending");
//   fetch(api)
//     .then((res) => res.json())
//     .then((result) => {
//       weatherDetails(result);
//     })
//     .catch(() => {
//       infoTxt.innerHTML = "Something went wrong";
//       infoTxt.classList.replace("pending", "error");
//     });
// }

// index
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

// view
// function addWeatherContent(weatherDetails) {
//   const city = weatherDetails.name;
//   const country = weatherDetails.sys.country;
//   const { description } = weatherDetails.weather[0];
//   const { temp, feels_like, humidity } = weatherDetails.main;

//   weatherPart.querySelector(".temp .numb").innerHTML = Math.floor(temp);
//   weatherPart.querySelector(".weather").innerHTML = description;
//   weatherPart.querySelector(".location span").innerHTML = `${city}, ${country}`;
//   weatherPart.querySelector(".temp .numb-2").innerHTML = Math.floor(feels_like);
//   weatherPart.querySelector(".humidity span").innerHTML = `${humidity}%`;
//   infoTxt.classList.remove("pending", "error");
//   infoTxt.innerHTML = "";
//   inputField.value = "";
//   wrapper.classList.add("active");
// }

// Add Event listeners
// inputField.addEventListener("keyup", getInputValues);
// locationBtn.addEventListener("click", getGeoLocation);
arrorBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
