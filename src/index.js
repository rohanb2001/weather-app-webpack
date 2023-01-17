import "./css/style.css";
import clear from "./assets/clear.svg";
import cloud from "./assets/cloud.svg";
import haze from "./assets/haze.svg";
import rain from "./assets/rain.svg";
import snow from "./assets/snow.svg";
import storm from "./assets/storm.svg";

const wrapper = document.querySelector(".wrapper");
const inputPart = document.querySelector("input-part");
const infoTxt = document.querySelector(".info-txt");
const inputField = document.querySelector("input");
const locationBtn = document.querySelector("button");
const weatherPart = document.querySelector("weather-part");
const wIcon = document.querySelector("img");
const arrorBack = document.querySelector("header i");

// Variables
let api;
let API_KEY = "c6c351625df31807b6e3c66fb3910fcf";

// Functions
function getInputValues(e) {
  if (e.key == "Enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
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
  api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
  console.log(latitude, longitude);
  fetchData();
}

function onError(error) {
  infoTxt.innerHTML = error.message;
  infoTxt.classList.add("error");
}

function requestApi(city) {
  api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  fetchData();
}
// weatherDetails(result)
function fetchData() {
  infoTxt.innerHTML = "Getting weather details...";
  infoTxt.classList.add("pending");
  fetch(api)
    .then((res) => res.json())
    .then((result) => weatherDetails(result))
    .catch(() => {
      infoTxt.innerHTML = "Something went wrong";
      infoTxt.classList.replace("pending", "error");
    });
}

function weatherDetails(info) {
  if (info.cod === "404") {
    infoTxt.classList.replace("pending", "error");
    infoTxt.innerHTML = `${inputField.value} isn't a vlid city name`;
  } else {
    const city = info.name;
    const country = info.sys.country;
    const { description, id } = info.weather[0];
    const { temp, feels_like, humidity } = info.main;

    if (id === 800) {
      wIcon.src = `assets/${clear}`;
    }
  }
}

// Add Event listeners
inputField.addEventListener("keyup", getInputValues);
locationBtn.addEventListener("click", getGeoLocation);
