import "./assets/css/style.css";

import clear from "./assets/img/clear.svg";
import cloud from "./assets/img/cloud.svg";
import haze from "./assets/img/haze.svg";
import rain from "./assets/img/rain.svg";
import snow from "./assets/img/snow.svg";
import storm from "./assets/img/storm.svg";

const wrapper = document.querySelector(".wrapper");
const infoTxt = document.querySelector(".info-txt");
const inputField = document.querySelector("input");
const locationBtn = document.querySelector("button");
const weatherPart = document.querySelector(".weather-part");
const wIcon = document.querySelector("img");
const arrorBack = document.querySelector("header i");

// Variables
let api;
let API_KEY = "c6c351625df31807b6e3c66fb3910fcf";

// Functions
function getInputValues(e) {
  if (e.key === "Enter" && inputField.value !== "") {
    requestApi(inputField.value);
  }
}

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchData();
}

function getGeoLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  } else {
    alert("Your browser not support geolocation api");
  }
}

function onSuccess(position) {
  const { latitude, longitude } = position.coords;
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${API_KEY}`;
  console.log(latitude, longitude);
  fetchData();
}

function onError(error) {
  infoTxt.innerHTML = error.message;
  infoTxt.classList.add("error");
}

// weatherDetails(result)
function fetchData() {
  infoTxt.innerHTML = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(api)
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
      weatherDetails(result);
    })
    .catch(() => {
      infoTxt.innerHTML = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info) {
  if (info.cod === "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerHTML = `${inputField.value} isn't a valid city name`;
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { temp, feels_like, humidity } = info.main;

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

    weatherPart.querySelector(".temp .numb").innerHTML = Math.floor(temp);
    weatherPart.querySelector(".weather").innerHTML = description;
    weatherPart.querySelector(
      ".location span"
    ).innerHTML = `${city}, ${country}`;
    weatherPart.querySelector(".temp .numb-2").innerHTML =
      Math.floor(feels_like);
    weatherPart.querySelector(".humidity span").innerHTML = `${humidity}%`;
    infoTxt.classList.remove("pending", "error");
    infoTxt.innerHTML = "";
    inputField.value = "";
    wrapper.classList.add("active");
  }
}

// Add Event listeners
inputField.addEventListener("keyup", getInputValues);
locationBtn.addEventListener("click", getGeoLocation);
arrorBack.addEventListener("click", () => {
  wrapper.classList.remove("active");
});
